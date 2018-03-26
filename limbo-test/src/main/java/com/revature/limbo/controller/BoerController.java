package com.revature.limbo.controller;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.function.BiPredicate;
import java.util.regex.Pattern;

import org.apache.tomcat.util.buf.HexUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.revature.limbo.bean.Boer;
import com.revature.limbo.bean.Limb;
import com.revature.limbo.service.AmazonBucketService;
import com.revature.limbo.service.BoerService;
import com.revature.limbo.service.JsonGeneratorService;
import com.revature.utils.Pair;

@RestController
public class BoerController {
	@Autowired
	private BoerService boerService;
	
	@Autowired
	private JsonGeneratorService jsonGenService;
	
	@Autowired
	private AmazonBucketService s3BucketService;
	
	// Get all
	@RequestMapping(method=RequestMethod.GET,
			value="/boers")
	public List<? extends JsonNode> getAllBoers() {
		List<Boer> boerList = boerService.getAllBoers();
		List<ObjectNode> boerJsonNodeList = new ArrayList<>();
		boerList.stream().forEach((Boer b) -> {
			boerJsonNodeList.add(jsonGenService.generateBoerJsonNode(b));
		});
		
		return boerJsonNodeList;
	}
	
	// Get by ID
	@RequestMapping(method=RequestMethod.GET,
			value="/boers/{username}")
	public JsonNode getBoerById(@PathVariable String username) {
		Boer b = boerService.getBoerById(username); 
		
		return jsonGenService.generateBoerJsonNode(b);
	}
	
	// Get by Email
	@RequestMapping(method=RequestMethod.POST,
			value="/boers/email")
	public JsonNode getBoerByEmail(@RequestBody(required=true) ObjectNode param) {
		JsonNode emailNode = param.get("email");
		
		if(emailNode == null || !emailNode.isTextual()) {
			return JsonNodeFactory.instance.nullNode();
		}
		
		String email = emailNode.textValue();
		
		Boer b = boerService.getBoerByEmail(email);
		
		return jsonGenService.generateBoerJsonNode(b);
	}
	
	// Make new boer
	@RequestMapping(method=RequestMethod.POST,
			value="/boers/new")
	public JsonNode addBoer(@RequestBody Boer b) {
		Boer addedBoer = boerService.addBoer(b); 
		return jsonGenService.generateBoerJsonNode(addedBoer);
	}
	
	// Update boer
	@RequestMapping(method=RequestMethod.POST,
			value="/boers/update")
	public JsonNode updateBoer(@RequestBody Boer b) {
		b.setLikedLimbs(null);
		b.setLimbs(null);
		
		Boer updatedBoer = boerService.updateBoer(b);
		return jsonGenService.generateBoerJsonNode(updatedBoer);
	}
	
	// Delete boer
	@RequestMapping(method=RequestMethod.DELETE,
			value="/boers/{username}")
	public void deleteBoer(@PathVariable String username) {
		boerService.deleteBoer(username);
	}
	
	/////////////////////////////////////////////////////////////////////////// 
	
	// Get user's limbs
	@RequestMapping(method=RequestMethod.GET,
			value="/boers/{username}/limbs")
	public List<? extends JsonNode> getLimbsByBoer(@PathVariable String username) {
		List<Limb> boerLimbList = boerService.getAllUserLimbs(username); 
		List<ObjectNode> boerLimbJsonNodeList = new ArrayList<>();
		
		boerLimbList.stream().forEach((Limb l) -> {
			boerLimbJsonNodeList.add(
					jsonGenService.generateLimbJsonNode(l));
		});
		
		return boerLimbJsonNodeList;
	}
	
	// Get user's liked limbs
	@RequestMapping(method=RequestMethod.GET,
			value="/boers/{username}/limbs/liked")
	public List<? extends JsonNode> getLikedLimbsByBoer(@PathVariable String username) {
		List<Limb> likedLimbList = boerService.getLimbsLikedByUser(username); 
		List<ObjectNode> likedLimbJsonNodeList = new ArrayList<>();
		
		likedLimbList.stream().forEach((Limb l) -> {
			likedLimbJsonNodeList.add(
					jsonGenService.generateLimbJsonNode(l));
		});
		
		return likedLimbJsonNodeList;
	}
	
	/////////////////////////////////////////////////////////////////////////////
	
	private boolean isValidImageData(byte[] imgData) {
		// Start
		final BiPredicate<byte[], Pair<String, Integer>> magicNumHexMatches =
		// (byte data, <regex, expected byte-length>)
		(byte[] data, Pair<String, Integer> hexMagicNumRegex) -> {
			// Data-length check.
			if(data.length < hexMagicNumRegex.getSecond()) {
				// data too short to be valid
				return false;
			}
			
			// Create magic number hex string.
			ByteArrayInputStream magicNumStream = new ByteArrayInputStream(data, 0, hexMagicNumRegex.getSecond());
			byte[] magicNum = new byte[hexMagicNumRegex.getSecond()];
			magicNumStream.read(magicNum, 0, hexMagicNumRegex.getSecond());
			String magicNumHex = HexUtils.toHexString(magicNum);
			
			
			// Perform matching.
			Pattern magicNumPattern = Pattern.compile(hexMagicNumRegex.getFirst());
			return magicNumPattern.matcher(magicNumHex).matches();
		};
		
		final List<Pair<String, Integer>> magicNumberRegexList = new ArrayList<>();
		magicNumberRegexList.add(new Pair<String, Integer>("89504e470d0a1a0a", 8)); // PNG
		magicNumberRegexList.add(new Pair<String, Integer>("52494646.{8}57454250", 12)); // WEBP
		magicNumberRegexList.add(new Pair<String, Integer>("424d", 2)); // BMP
		magicNumberRegexList.add(new Pair<String, Integer>("ffd8ffdb", 4)); // JPG-RAW
		magicNumberRegexList.add(new Pair<String, Integer>("ffd8ffe0.{4}4a4649460001", 12)); // JPG-JFIF
		magicNumberRegexList.add(new Pair<String, Integer>("ffd8ffe1.{4}457869660000", 12)); // JPG-EXIF
		magicNumberRegexList.add(new Pair<String, Integer>("474946383761", 6)); // GIF87A
		magicNumberRegexList.add(new Pair<String, Integer>("474946383961", 6)); // GIF89A
		
		boolean isValid = magicNumberRegexList.stream().anyMatch(
			magicNumberRegex -> magicNumHexMatches.test(imgData, magicNumberRegex));
		// End
		
		return isValid;
	}
	
	
	@RequestMapping(method=RequestMethod.POST,
			value="/boers/{username}/cover-img",
			consumes="multipart/form-data",
			produces="applicatoin/json")
	public JsonNode uploadCoverImage(@PathVariable String username,
			@RequestParam(name="inputImg") MultipartFile coverFile) {
		ObjectNode resultJsonObj = JsonNodeFactory.instance.objectNode();
		final String KEY_SUCCESS = "success";
		final String KEY_MESSAGE = "message";
		final String KEY_OWNER = "owner";
		
		// Check for non-empty 
		if(coverFile == null) {
			resultJsonObj.put(KEY_SUCCESS, false);
			resultJsonObj.put(KEY_MESSAGE, "File null.");
			return resultJsonObj;
		} else if(coverFile.isEmpty()) {
			resultJsonObj.put(KEY_SUCCESS, false);
			resultJsonObj.put(KEY_MESSAGE, "File empty.");
			return resultJsonObj;
		}
		
		// Check for valid data.
		try {
			if(!isValidImageData(coverFile.getBytes())) {
				resultJsonObj.put(KEY_SUCCESS, false);
				resultJsonObj.put(KEY_MESSAGE, "Invalid file type.");
				return resultJsonObj;
			}
		} catch(IOException ex) {}
		
		// Upload file
		String urlString = s3BucketService.uploadFile(coverFile);
		
		// Failed upload.
		if(urlString == null || urlString.isEmpty()) {
			resultJsonObj.put(KEY_SUCCESS, false);
			resultJsonObj.put(KEY_MESSAGE, "Error uploading file.");
			resultJsonObj.putNull(KEY_OWNER);
			return resultJsonObj;
		}
		
		// Update boer info
		Boer b = new Boer();
		b.setUsername(username);
		b.setCoverPic(urlString);
		
		try {
			b = boerService.updateBoer(b);
		
			if(b == null) { // Boer does not exist.
				resultJsonObj.put(KEY_SUCCESS, false);
				resultJsonObj.put(KEY_MESSAGE, "Boer does not exist.");
				resultJsonObj.putNull(KEY_OWNER);
				return resultJsonObj;
			} else if(b.getCoverPic().equals(urlString)) { // Updated boer data successfully.
				// Successful update.
				resultJsonObj.put(KEY_SUCCESS, true);
				resultJsonObj.put(KEY_MESSAGE, "Image successfully uploaded.");
				resultJsonObj.set(KEY_OWNER, jsonGenService.generateBoerJsonNode(b));
			} else {
				// Update failed -> delete pic.
				s3BucketService.deleteFileFromS3Bucket(urlString);
				resultJsonObj.put(KEY_SUCCESS, false);
				resultJsonObj.put(KEY_MESSAGE, "Failed to link image to user.");
				resultJsonObj.set(KEY_OWNER, jsonGenService.generateBoerJsonNode(b));
				return resultJsonObj;
			}
		} catch(Exception ex) {
			s3BucketService.deleteFileFromS3Bucket(urlString);
			resultJsonObj.put(KEY_SUCCESS, false);
			resultJsonObj.put(KEY_MESSAGE, "Error updating boer.");
			StringWriter stackTraceWriter = new StringWriter();
			PrintWriter pw = new PrintWriter(stackTraceWriter);
			ex.printStackTrace(pw);
			pw.flush();
			String stackTraceStr = stackTraceWriter.toString();
			resultJsonObj.put("stack-trace", stackTraceStr);
			return resultJsonObj;
		}
		
		return resultJsonObj;
	}
	
	
	@RequestMapping(method=RequestMethod.POST,
			value="/boers/{username}/profile-img",
			consumes="multipart/form-data",
			produces="applicatoin/json")
	public JsonNode uploadProfileImage(@PathVariable String username,
			@RequestParam(name="inputImg") MultipartFile profileFile) {
		ObjectNode resultJsonObj = JsonNodeFactory.instance.objectNode();
		final String KEY_SUCCESS = "success";
		final String KEY_MESSAGE = "message";
		final String KEY_OWNER = "owner";
		
		// Check for non-empty 
		if(profileFile == null || profileFile.isEmpty()) {
			resultJsonObj.put(KEY_SUCCESS, false);
			resultJsonObj.put(KEY_MESSAGE, "File null or empty.");
			return resultJsonObj;
		}
		
		// Check for valid data.
		try {
			if(!isValidImageData(profileFile.getBytes())) {
				resultJsonObj.put(KEY_SUCCESS, false);
				resultJsonObj.put(KEY_MESSAGE, "Invalid file type.");
				return resultJsonObj;
			}
		} catch(IOException ex) {}
		
		
		// Upload file
		String urlString = s3BucketService.uploadFile(profileFile);
		
		// Failed upload.
		if(urlString == null || urlString.isEmpty()) {
			resultJsonObj.put(KEY_SUCCESS, false);
			resultJsonObj.put(KEY_MESSAGE, "Error uploading file.");
			resultJsonObj.putNull(KEY_OWNER);
			return resultJsonObj;
		}
		
		// Update boer info
		Boer b = new Boer();
		b.setUsername(username);
		b.setProfilePic(urlString);
		
		try {
			b = boerService.updateBoer(b);
		
			if(b == null) { // Boer does not exist.
				resultJsonObj.put(KEY_SUCCESS, false);
				resultJsonObj.put(KEY_MESSAGE, "Boer does not exist.");
				resultJsonObj.putNull(KEY_OWNER);
				return resultJsonObj;
			} else if(b.getProfilePic().equals(urlString)) { // Updated boer data successfully.
				// Successful update.
				resultJsonObj.put(KEY_SUCCESS, true);
				resultJsonObj.put(KEY_MESSAGE, "Image successfully uploaded.");
				resultJsonObj.set(KEY_OWNER, jsonGenService.generateBoerJsonNode(b));
			} else {
				// Update failed -> delete pic.
				s3BucketService.deleteFileFromS3Bucket(urlString);
				resultJsonObj.put(KEY_SUCCESS, false);
				resultJsonObj.put(KEY_MESSAGE, "Failed to link image to user.");
				resultJsonObj.set(KEY_OWNER, jsonGenService.generateBoerJsonNode(b));
				return resultJsonObj;
			}
		} catch(Exception ex) {
			s3BucketService.deleteFileFromS3Bucket(urlString);
			resultJsonObj.put(KEY_SUCCESS, false);
			resultJsonObj.put(KEY_MESSAGE, "Error updating boer.");
			StringWriter stackTraceWriter = new StringWriter();
			PrintWriter pw = new PrintWriter(stackTraceWriter);
			ex.printStackTrace(pw);
			pw.flush();
			String stackTraceStr = stackTraceWriter.toString();
			resultJsonObj.put("stack-trace", stackTraceStr);
			return resultJsonObj;
		}
		
		return resultJsonObj;
	}
	
	
}
