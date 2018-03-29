package com.revature.limbo.controller;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.net.MalformedURLException;
import java.net.URL;
import java.text.MessageFormat;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
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
import com.revature.limbo.service.LimbService;

@RestController
public class LimbController {
	
	
	@Autowired
	private LimbService limbService;
	
	@Autowired
	private BoerService boerService;
	
	@Autowired
	private AmazonBucketService s3BucketService;
	
	@Autowired
	private JsonGeneratorService jsonGenService;
	
	@Autowired
	private Logger logger;
	
	private static MessageFormat msg = new MessageFormat("[{0} ({1,number,#})]: 「{2,number,integer}/{3,number,integer}」 {4}");
	
	// Get all
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.GET,
			value="/limbs")
	public List<? extends JsonNode> getAllLimbs(HttpServletRequest req) {
		Object[] args = {
				req.getRemoteAddr(), // IP
				req.getRemotePort(), // Port
				1, 2,				 // Message #/Total Messages
				"Get all Limbs"		 // Message
		};
		logger.info(msg.format(args));
		
		List<Limb> limbList = limbService.getAllLimbs();
		List<ObjectNode> limbNodeList = new ArrayList<>();
		
		limbList.stream().forEach((Limb l) -> {
			limbNodeList.add(jsonGenService.generateLimbJsonNode(l));
		});
		
		args[2] = 2;
		args[4] = "Sending " + limbNodeList.size() + " Limbs";
		logger.info(msg.format(args));
		
		return limbNodeList;
	}
	
	
	// Get by ID
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.GET,
			value="/limbs/{id}")
	public JsonNode getLimbById(HttpServletRequest req, @PathVariable Integer id) {
		Object[] args = {
				req.getRemoteAddr(), // IP
				req.getRemotePort(), // Port
				1, 2,				 // Message #/Total Messages
				"Requested Limb: " + id		 // Message
		};
		logger.info(msg.format(args));
		
		Limb l = limbService.getLimbById(id);
		
		args[2] = 2;
		args[4] = "Limb 「" + l.getId() + "」　" + (l == null ? "not found." : "found.");
		logger.info(msg.format(args));
		
		return jsonGenService.generateLimbJsonNode(l);
	}
	
	// Add new 
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.POST,
			value="/boers/{posterUsername}/limbs/new")
	public JsonNode addLimb(HttpServletRequest req, @PathVariable String posterUsername, @RequestBody Limb limb) {
		Object[] args = {
				req.getRemoteAddr(), // IP
				req.getRemotePort(), // Port
				1, 2,				 // Message #/Total Messages
				"Adding Limb 「" + jsonGenService.generateLimbJsonNode(limb) + "」 from"
						+ " 「" +  posterUsername + "」" // Message
		};
		logger.info(msg.format(args));
		
		limb.setOwner(boerService.getBoerById(posterUsername));
		limb.setPostTime(LocalDateTime.now()); // set post time.
		Limb addedLimb = limbService.addLimb(limb);
		
		args[2] = 2;
		args[4] = addedLimb == null ? "Failed to add" : "Successfully added";
		logger.info(msg.format(args));
		
		return jsonGenService.generateLimbJsonNode(addedLimb);
	}
	
	
	// Update existing
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.POST,
			value="/boers/{posterUsername}/limbs/update")
	public JsonNode updateLimb(HttpServletRequest req, @PathVariable String posterUsername, @RequestBody Limb limb) {
		if(limb.getId() == null) {
			// unknown id
			return null;
		}
		
		limb.setOwner(null);
		limb.setPostTime(null);
		
		Object[] args = {
				req.getRemoteAddr(), // IP
				req.getRemotePort(), // Port
				1, 2,				 // Message #/Total Messages
				"Updating Limb with 「" + jsonGenService.generateLimbJsonNode(limb) + "」" // Message
		};
		logger.info(msg.format(args));
		
		Limb updatedLimb = limbService.updateLimb(limb); 
		
		args[2] = 2;
		args[4] = updatedLimb == null ? "Failed to update limb 「" + limb.getId() + "」" : 
			"Succeeded in updating Boer 「" + jsonGenService.generateLimbJsonNode(updatedLimb) + "」";
		logger.info(msg.format(args));
		
		return jsonGenService.generateLimbJsonNode(updatedLimb);
	}
	
	
	// Delete by ID
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.DELETE,
			value="/limbs/{id}")
	public void deleteLimbById(HttpServletRequest req, @PathVariable Integer id) {
		Object[] args = {
				req.getRemoteAddr(), // IP
				req.getRemotePort(), // Port
				1, 1,				 // Message #/Total Messages
				"Deleting Limb 「" + id + "」" // Message
		};
		logger.info(msg.format(args));
		limbService.deleteLimbById(id);
	}
	
	//////////////////////////////////////
	
	// Like/Unlike limb
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.GET,
			value="/limbs/{id}/{likerUsername}/{like}")
	public JsonNode likeLimb(HttpServletRequest req, 
			@PathVariable Integer id,
			@PathVariable String likerUsername,
			@PathVariable Integer like) {
		Integer count = 0;
		Object[] args = {
				req.getRemoteAddr(), // IP
				req.getRemotePort(), // Port
				1, 2,				 // Message #/Total Messages
				"Boer  「" + likerUsername + "」 " +
					(like > 0 ? "liked" : "unliked") +
					" post 「" + id + "」" 
		};
		logger.info(msg.format(args));
		
		// like <= 0 -> remove like if exist
		// like > 0 -> add like if not exist
		if(like > 0) {
			count = limbService.likeLimb(id, likerUsername);
		} else {
			count = limbService.unlikeLimb(id, likerUsername);
		}
		
		ObjectNode countNode = JsonGeneratorService.getObjectMapper().createObjectNode();
		countNode.put("likes", count);
		
		args[2] = 2;
		args[4] = "Limb 「" + id + "」 has like count of 「" + count + "」";
		logger.info(msg.format(args));
		
		return countNode;
	}
	
	
	// Get likers
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.GET,
			value="/limbs/{id}/likers")
	public List<? extends JsonNode> getLikersByLimbId(HttpServletRequest req, @PathVariable Integer id) {
		Object[] args = {
				req.getRemoteAddr(), // IP
				req.getRemotePort(), // Port
				1, 2,				 // Message #/Total Messages
				"Requesting Likers by Limb Id 「" + id + "」" // Message
		};
		logger.info(msg.format(args));
		
		
		List<Boer> likers = limbService.getLikersFromLimb(id);
		List<ObjectNode> likedLimbJsonList = new ArrayList<>();
		
		likers.stream().forEach((Boer b) -> {
			likedLimbJsonList.add(jsonGenService.generateBoerJsonNode(b));
		});
		
		args[2] = 2;
		args[4] = likedLimbJsonList.size() + " boers liked limb 「" + id + "」";
		logger.info(msg.format(args));
		
		return likedLimbJsonList;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.POST,
			value="/upload",
			consumes="multipart/form-data",
			produces="application/json")
	public JsonNode uploadMedia(HttpServletRequest req, @RequestParam(name="inputImg") MultipartFile mediaFile) {
		final String KEY_SUCCESS = "success";
		final String KEY_MESSAGE = "message";
		final String KEY_URL = "url";
		ObjectNode resultJson = JsonNodeFactory.instance.objectNode();
		
		Object[] args = {
				req.getRemoteAddr(), // IP
				req.getRemotePort(), // Port
				1, 2,				 // Message #/Total Messages
				"Uploading media." // Message
		};
		logger.info(msg.format(args));
		
		if(mediaFile == null) { // No file given.
			resultJson.put(KEY_SUCCESS, false);
			resultJson.put(KEY_MESSAGE, "No file given.");
			resultJson.putNull(KEY_URL);
			
			args[2] = 2;
			args[4] = "Media provided is null. Details:「" + resultJson.toString() + "」";
			logger.error(msg.format(args));
			
			return resultJson;
		} else if(mediaFile.isEmpty()) { // Empty file.
			resultJson.put(KEY_SUCCESS, false);
			resultJson.put(KEY_MESSAGE, "File is empty.");
			resultJson.putNull(KEY_URL);
			
			args[2] = 2;
			args[4] = "Media provided has no data. Details:「" + resultJson.toString() + "」";
			logger.error(msg.format(args));
			
			return resultJson;
		}
		
		String url = s3BucketService.uploadFile(mediaFile);
		
		if(url == null || url.isEmpty()) { // Upload error.
			resultJson.put(KEY_SUCCESS, false);
			resultJson.put(KEY_MESSAGE, "Error occurred during upload.");
			resultJson.putNull(KEY_URL);
			
			args[2] = 2;
			args[4] = "Failed to upload. Details:「" + resultJson.toString() + "」";
			
			logger.error(msg.format(args));
			
			return resultJson;
		}
		
		
		// Successful.
		resultJson.put(KEY_SUCCESS, true);
		resultJson.put(KEY_MESSAGE, "File successfully uploaded.");
		resultJson.put(KEY_URL, url);
		
		args[2] = 2;
		args[4] = "Successfully uploaded media. New URL: 「" + url + "」";
		
		logger.info(msg.format(args));
		
		return resultJson;
	}
	
	@RequestMapping(method=RequestMethod.DELETE,
			value="/upload/delete")
	public JsonNode deleteMedia(HttpServletRequest req, @RequestBody JsonNode args) {
		final String KEY_SUCCESS = "success";
		final String KEY_MESSAGE = "message";
		ObjectNode resultJson = JsonNodeFactory.instance.objectNode();
		
		Object[] msgArgs = {
				req.getRemoteAddr(), // IP
				req.getRemotePort(), // Port
				1, 2,				 // Message #/Total Messages
				"Requesting to delete media." // Message
		};
		logger.info(msg.format(msgArgs));
		
		// Get url
		JsonNode urlNode = args.get("url");
		String url = urlNode.textValue();
		
		// Check for null.
		if(url == null) {
			resultJson.put(KEY_SUCCESS, false);
			resultJson.put(KEY_MESSAGE, "URL not found.");
			
			msgArgs[2] = 2;
			msgArgs[4] = "Given URL is null.";
			logger.error(msg.format(msgArgs));
			
			return resultJson;
		}
		
		// Check for valid URL
		try {
			@SuppressWarnings("unused")
			URL urlCheck = new URL(url);
		} catch(MalformedURLException ex) {
			resultJson.put(KEY_SUCCESS, false);
			resultJson.put(KEY_MESSAGE, "URL provided is not valid.");
			
			StringWriter stackTraceWriter = new StringWriter();
			PrintWriter wrapper = new PrintWriter(stackTraceWriter);
			ex.printStackTrace(wrapper);
			
			msgArgs[2] = 2;
			msgArgs[4] = "Malformed URL: " + ex.getMessage() + "\n" + stackTraceWriter.toString();
			logger.error(msg.format(msgArgs));
			
			return resultJson;
		}
		
		
		try {
			s3BucketService.deleteFileFromS3Bucket(url);
		} catch(Exception ex) {
			resultJson.put(KEY_SUCCESS, false);
			resultJson.put(KEY_MESSAGE, "Error occurred during deletion.");
			
			StringWriter stackTraceWriter = new StringWriter();
			PrintWriter wrapper = new PrintWriter(stackTraceWriter);
			ex.printStackTrace(wrapper);
			
			msgArgs[2] = 2;
			msgArgs[4] = "Exception: " + ex.getMessage() + "\n" + stackTraceWriter.toString();
			logger.error(msg.format(msgArgs));
			
			return resultJson;
		}
		
		resultJson.put(KEY_SUCCESS, true);
		resultJson.put(KEY_MESSAGE, "File successfully deleted.");
		
		msgArgs[2] = 2;
		msgArgs[4] = "「" + url + "」" + " deleted";
		logger.info(msg.format(msgArgs));
		
		return resultJson;
	}
}
