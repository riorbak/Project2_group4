package com.revature.limbo.controller;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.text.MessageFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.function.BiPredicate;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;

import org.apache.logging.log4j.Logger;
import org.apache.tomcat.util.buf.HexUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
	
	@Autowired
	private Logger logger;
	
	private static MessageFormat msg = new MessageFormat("[{0} ({1,number,#})]: 「{2,number,integer}/{3,number,integer}」 {4}");
	
	// Get all
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.GET,
			value="/boers")
	public ResponseEntity<List<? extends JsonNode>> getAllBoers(HttpServletRequest req) {
		
		Object[] args = {
				req.getRemoteAddr(), // IP
				req.getRemotePort(), // Port
				1, 2,				 // Message #/Total Messages
				"Get all Boers"		 // Message
		};
		logger.info(msg.format(args));
		
		List<Boer> boerList = boerService.getAllBoers();
		List<ObjectNode> boerJsonNodeList = new ArrayList<>();
		boerList.stream().forEach((Boer b) -> {
			boerJsonNodeList.add(jsonGenService.generateBoerJsonNode(b));
		});
		
		args[2] = 2;
		args[4] = "Sending " + boerJsonNodeList.size() + " Boers";
		logger.info(msg.format(args));
		
//		return ResponseEntity.ok(boerJsonNodeList);
		return ResponseEntity.status(HttpStatus.I_AM_A_TEAPOT).body(boerJsonNodeList);
	}
	
	// Get by ID
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.GET,
			value="/boers/{username}")
	public JsonNode getBoerById(HttpServletRequest req, @PathVariable String username) {
		Object[] args = {
				req.getRemoteAddr(), // IP
				req.getRemotePort(), // Port
				1, 2,				 // Message #/Total Messages
				"Requested Boer: " + username		 // Message
		};
		logger.info(msg.format(args));
		
		Boer b = boerService.getBoerById(username);
		
		args[2] = 2;
		args[4] = "Boer 「" + b.getUsername() + "」　" + (b == null ? "not found." : "found.");
		logger.info(msg.format(args));
		
		return jsonGenService.generateBoerJsonNode(b);
	}
	
	// Get by Email
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.POST,
			value="/boers/email")
	public JsonNode getBoerByEmail(HttpServletRequest req, @RequestBody(required=true) ObjectNode param) {
		JsonNode emailNode = param.get("email");
		
		if(emailNode == null || !emailNode.isTextual()) {
			
			return JsonNodeFactory.instance.nullNode();
		}
		String email = emailNode.textValue();
		
		Object[] args = {
				req.getRemoteAddr(), // IP
				req.getRemotePort(), // Port
				1, 2,				 // Message #/Total Messages
				"Requesting Boer by Email 「" + email + "」" // Message
		};
		logger.info(msg.format(args));
		
		Boer b = boerService.getBoerByEmail(email);
		
		args[2] = 2;
		args[4] = b == null ? "Boer not found." : "Boer found.";
		logger.info(msg.format(args));
		
		return jsonGenService.generateBoerJsonNode(b);
	}
	
	// Make new boer
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.POST,
			value="/boers/new")
	public JsonNode addBoer(HttpServletRequest req, @RequestBody Boer b) {
		Object[] args = {
				req.getRemoteAddr(), // IP
				req.getRemotePort(), // Port
				1, 2,				 // Message #/Total Messages
				"Adding Boer 「" + jsonGenService.generateBoerJsonNode(b) + "」" // Message
		};
		logger.info(msg.format(args));
		
		Boer addedBoer = boerService.addBoer(b); 
		
		
		args[2] = 2;
		args[4] = addedBoer == null ? "Failed to add" : "Successfully added";
		logger.info(msg.format(args));
		
		return jsonGenService.generateBoerJsonNode(addedBoer);
	}
	
	// Update boer
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.POST,
			value="/boers/update")
	public JsonNode updateBoer(HttpServletRequest req, @RequestBody Boer b) {
		b.setLikedLimbs(null);
		b.setLimbs(null);

		Object[] args = {
				req.getRemoteAddr(), // IP
				req.getRemotePort(), // Port
				1, 2,				 // Message #/Total Messages
				"Updating Boer with data 「" + jsonGenService.generateBoerJsonNode(b) + "」" // Message
		};
		logger.info(msg.format(args));

		b.setProfilePic(null);
		b.setCoverPic(null);

		Boer updatedBoer = boerService.updateBoer(b);
		
		args[2] = 2;
		args[4] = updatedBoer == null ? "Failed to update boer 「" + b.getUsername() + "」" : 
			"Succeeded in updating Boer 「" + jsonGenService.generateBoerJsonNode(updatedBoer) + "」";
		logger.info(msg.format(args));
		
		return jsonGenService.generateBoerJsonNode(updatedBoer);
	}
	
	// Delete boer
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.DELETE,
			value="/boers/{username}")
	public void deleteBoer(HttpServletRequest req, @PathVariable String username) {
		Object[] args = {
				req.getRemoteAddr(), // IP
				req.getRemotePort(), // Port
				1, 1,				 // Message #/Total Messages
				"Deleting Boer 「" + username + "」" // Message
		};
		logger.info(msg.format(args));
		
		boerService.deleteBoer(username);
	}
	
	/////////////////////////////////////////////////////////////////////////// 
	
	// Get user's limbs
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.GET,
			value="/boers/{username}/limbs")
	public List<? extends JsonNode> getLimbsByBoer(HttpServletRequest req, @PathVariable String username) {
		Object[] args = {
				req.getRemoteAddr(), // IP
				req.getRemotePort(), // Port
				1, 2,				 // Message #/Total Messages
				"Requesting Limbs by Boer 「" + username + "」" // Message
		};
		logger.info(msg.format(args));
		
		List<Limb> boerLimbList = boerService.getAllUserLimbs(username); 
		List<ObjectNode> boerLimbJsonNodeList = new ArrayList<>();
		
		
		
		boerLimbList.stream().forEach((Limb l) -> {
			boerLimbJsonNodeList.add(
					jsonGenService.generateLimbJsonNode(l));
		});
		
		args[2] = 2;
		args[4] = boerLimbJsonNodeList.size() + " limbs found by 「" + username + "」";
		logger.info(msg.format(args));
		
		return boerLimbJsonNodeList;
	}
	
	// Get user's liked limbs
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.GET,
			value="/boers/{username}/limbs/liked")
	public List<? extends JsonNode> getLikedLimbsByBoer(HttpServletRequest req, @PathVariable String username) {
		Object[] args = {
				req.getRemoteAddr(), // IP
				req.getRemotePort(), // Port
				1, 2,				 // Message #/Total Messages
				"Requesting Liked Limbs of 「" + username + "」" // Message
		};
		logger.info(msg.format(args));
		
		List<Limb> likedLimbList = boerService.getLimbsLikedByUser(username); 
		List<ObjectNode> likedLimbJsonNodeList = new ArrayList<>();
		
		
		likedLimbList.stream().forEach((Limb l) -> {
			likedLimbJsonNodeList.add(
					jsonGenService.generateLimbJsonNode(l));
		});
		
		args[2] = 2;
		args[4] = "Found 「" + likedLimbJsonNodeList.size() + "」 liked limbs.";
		logger.info(msg.format(args));
		
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
	
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.POST,
			value="/boers/{username}/cover-img",
			consumes="multipart/form-data",
			produces="application/json")
	public JsonNode uploadCoverImage(HttpServletRequest req, @PathVariable String username,
			@RequestParam(name="inputImg") MultipartFile coverFile) {
		ObjectNode resultJsonObj = JsonNodeFactory.instance.objectNode();
		final String KEY_SUCCESS = "success";
		final String KEY_MESSAGE = "message";
		final String KEY_OWNER = "owner";
		Object[] args = {
				req.getRemoteAddr(), // IP
				req.getRemotePort(), // Port
				1, 2,				 // Message #/Total Messages
				"Attempting to upload cover image for 「" + username + "」" // Message
		};
		logger.info(msg.format(args));
		
		// Check for non-empty 
		if(coverFile == null) {
			resultJsonObj.put(KEY_SUCCESS, false);
			resultJsonObj.put(KEY_MESSAGE, "File null.");
			
			args[2] = 2;
			args[4] = "Cover file provided is null. Details:「" + resultJsonObj.toString() + "」";
			logger.error(msg.format(args));
			
			return resultJsonObj;
		} else if(coverFile.isEmpty()) {
			resultJsonObj.put(KEY_SUCCESS, false);
			resultJsonObj.put(KEY_MESSAGE, "File empty.");
			
			args[2] = 2;
			args[4] = "Cover file provided has no data. Details:「" + resultJsonObj.toString() + "」";
			logger.error(msg.format(args));
			
			return resultJsonObj;
		}
		
		// Check for valid data.
		try {
			if(!isValidImageData(coverFile.getBytes())) {
				resultJsonObj.put(KEY_SUCCESS, false);
				resultJsonObj.put(KEY_MESSAGE, "Invalid file type.");
				
				args[2] = 2;
				args[4] = "Cover file provided is not of a valid type [PNG/WEBP/BMP/JPG(RAW/JFIF/EXIF)/GIF(87a/89a)]. "
						+ "Details:「" + resultJsonObj.toString() + "」";
				logger.error(msg.format(args));
				
				return resultJsonObj;
			}
		} catch(IOException ex) {
			StringWriter stackTraceWriter = new StringWriter();
			PrintWriter wrapper = new PrintWriter(stackTraceWriter);
			ex.printStackTrace(wrapper);
			
			args[2] = -1;
			args[4] = "Exception occurred: " + ex.getMessage() + "\n" + stackTraceWriter.toString();
			
			logger.error(msg.format(args));
		}
		
		// Upload file
		String urlString = s3BucketService.uploadFile(coverFile);
		
		// Failed upload.
		if(urlString == null || urlString.isEmpty()) {
			resultJsonObj.put(KEY_SUCCESS, false);
			resultJsonObj.put(KEY_MESSAGE, "Error uploading file.");
			resultJsonObj.putNull(KEY_OWNER);
			
			args[2] = 2;
			args[4] = "Failed to upload. Details:「" + resultJsonObj.toString() + "」";
			
			logger.error(msg.format(args));
			
			return resultJsonObj;
		}
		
		// Update boer info
		Boer b = new Boer();
		b.setProfilePic(null);
		b.setUsername(username);
		b.setCoverPic(urlString);
		
		try {
			b = boerService.updateBoer(b);
		
			if(b == null) { // Boer does not exist.
				resultJsonObj.put(KEY_SUCCESS, false);
				resultJsonObj.put(KEY_MESSAGE, "Boer does not exist.");
				resultJsonObj.putNull(KEY_OWNER);
				
				args[2] = 2;
				args[4] = "Boer does not exist. Details:「" + resultJsonObj.toString() + "」";
				
				logger.error(msg.format(args));
				
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
				
				args[2] = 2;
				args[4] = "Failed to update user's cover image. Details:「" + resultJsonObj.toString() + "」";
				
				logger.error(msg.format(args));
				
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
			
			args[2] = 2;
			args[4] = "Exception occurred: " + ex.getMessage() + "\n" + stackTraceStr;
			
			logger.error(msg.format(args));
			
			return resultJsonObj;
		}
		
		args[2] = 2;
		args[4] = "Successfully updated cover image of 「" + username + "」 to 「" + b.getCoverPic() + "」";
		
		logger.info(msg.format(args));
		
		return resultJsonObj;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.POST,
			value="/boers/{username}/profile-img",
			consumes="multipart/form-data",
			produces="application/json")
	public JsonNode uploadProfileImage(HttpServletRequest req, @PathVariable String username,
			@RequestParam(name="inputImg") MultipartFile profileFile) {
		ObjectNode resultJsonObj = JsonNodeFactory.instance.objectNode();
		final String KEY_SUCCESS = "success";
		final String KEY_MESSAGE = "message";
		final String KEY_OWNER = "owner";
		
		Object[] args = {
				req.getRemoteAddr(), // IP
				req.getRemotePort(), // Port
				1, 2,				 // Message #/Total Messages
				"Attempting to upload profile image for 「" + username + "」" // Message
		};
		logger.info(msg.format(args));
		
		// Check for non-empty 
		if(profileFile == null) {
			resultJsonObj.put(KEY_SUCCESS, false);
			resultJsonObj.put(KEY_MESSAGE, "File null.");
			
			args[2] = 2;
			args[4] = "Profile file provided is null. Details:「" + resultJsonObj.toString() + "」";
			logger.error(msg.format(args));
			
			return resultJsonObj;
		} else if(profileFile.isEmpty()) {
			resultJsonObj.put(KEY_SUCCESS, false);
			resultJsonObj.put(KEY_MESSAGE, "File empty.");
			
			args[2] = 2;
			args[4] = "Profile file provided has no data. Details:「" + resultJsonObj.toString() + "」";
			logger.error(msg.format(args));
			
			return resultJsonObj;
		}
		
		// Check for valid data.
		try {
			if(!isValidImageData(profileFile.getBytes())) {
				resultJsonObj.put(KEY_SUCCESS, false);
				resultJsonObj.put(KEY_MESSAGE, "Invalid file type.");
				
				args[2] = 2;
				args[4] = "Profile file provided is not of a valid type [PNG/WEBP/BMP/JPG(RAW/JFIF/EXIF)/GIF(87a/89a)]. "
						+ "Details:「" + resultJsonObj.toString() + "」";
				logger.error(msg.format(args));
				
				return resultJsonObj;
			}
		} catch(IOException ex) {
			StringWriter stackTraceWriter = new StringWriter();
			PrintWriter wrapper = new PrintWriter(stackTraceWriter);
			ex.printStackTrace(wrapper);
			
			args[2] = -1;
			args[4] = "Exception occurred: " + ex.getMessage() + "\n" + stackTraceWriter.toString();
			
			logger.error(msg.format(args));
		}
		
		
		// Upload file
		String urlString = s3BucketService.uploadFile(profileFile);
		
		// Failed upload.
		if(urlString == null || urlString.isEmpty()) {
			resultJsonObj.put(KEY_SUCCESS, false);
			resultJsonObj.put(KEY_MESSAGE, "Error uploading file.");
			resultJsonObj.putNull(KEY_OWNER);
			
			args[2] = 2;
			args[4] = "Failed to upload. Details:「" + resultJsonObj.toString() + "」";
			
			logger.error(msg.format(args));
			
			return resultJsonObj;
		}
		
		// Update boer info
		Boer b = new Boer();
		b.setCoverPic(null);
		b.setUsername(username);
		b.setProfilePic(urlString);
		
		try {
			b = boerService.updateBoer(b);
		
			if(b == null) { // Boer does not exist.
				resultJsonObj.put(KEY_SUCCESS, false);
				resultJsonObj.put(KEY_MESSAGE, "Boer does not exist.");
				resultJsonObj.putNull(KEY_OWNER);
				
				args[2] = 2;
				args[4] = "Boer does not exist. Details:「" + resultJsonObj.toString() + "」";
				
				logger.error(msg.format(args));
				
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
				
				args[2] = 2;
				args[4] = "Failed to update user's profile image. Details:「" + resultJsonObj.toString() + "」";
				
				logger.error(msg.format(args));
				
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
			
			args[2] = 2;
			args[4] = "Exception occurred: " + ex.getMessage() + "\n" + stackTraceStr;
			
			logger.error(msg.format(args));
			
			return resultJsonObj;
		}
		
		args[2] = 2;
		args[4] = "Successfully updated profile image of 「" + username + "」 to 「" + b.getProfilePic() + "」";
		
		logger.info(msg.format(args));
		
		return resultJsonObj;
	}
}
