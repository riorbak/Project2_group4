package com.revature.limbo.controller;

import java.net.MalformedURLException;
import java.net.URL;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
	
	// Get all
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.GET,
			value="/limbs")
	public List<? extends JsonNode> getAllLimbs() {
		List<Limb> limbList = limbService.getAllLimbs();
		List<ObjectNode> limbNodeList = new ArrayList<>();
		
		limbList.stream().forEach((Limb l) -> {
			limbNodeList.add(jsonGenService.generateLimbJsonNode(l));
		});
		
		return limbNodeList;
	}
	
	
	// Get by ID
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.GET,
			value="/limbs/{id}")
	public JsonNode getLimbById(@PathVariable Integer id) {
		return jsonGenService.generateLimbJsonNode(limbService.getLimbById(id));
	}
	
	// Add new 
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.POST,
			value="/boers/{posterUsername}/limbs/new")
	public JsonNode addLimb(@PathVariable String posterUsername, @RequestBody Limb limb) {
		limb.setOwner(boerService.getBoerById(posterUsername));
		limb.setPostTime(LocalDateTime.now()); // set post time.
		Limb addedLimb = limbService.addLimb(limb);
		
		return jsonGenService.generateLimbJsonNode(addedLimb);
	}
	
	
	// Update existing
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.POST,
			value="/boers/{posterUsername}/limbs/update")
	public JsonNode updateLimb(@PathVariable String posterUsername, @RequestBody Limb limb) {
		if(limb.getId() == null) {
			// unknown id
			return null;
		}
		limb.setOwner(null);
		limb.setPostTime(LocalDateTime.now());
		Limb updatedLimb = limbService.updateLimb(limb); 
		return jsonGenService.generateLimbJsonNode(updatedLimb);
	}
	
	
	// Delete by ID
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.DELETE,
			value="/limbs/{id}")
	public void deleteLimbById(@PathVariable Integer id) {
		limbService.deleteLimbById(id);
	}
	
	//////////////////////////////////////
	
	// Like/Unlike limb
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.GET,
			value="/limbs/{id}/{likerUsername}/{like}")
	public JsonNode likeLimb(@PathVariable Integer id,
			@PathVariable String likerUsername,
			@PathVariable Integer like) {
		Integer count = 0;
		
		// like <= 0 -> remove like if exist
		// like > 0 -> add like if not exist
		if(like > 0) {
			count = limbService.likeLimb(id, likerUsername);
		} else {
			count = limbService.unlikeLimb(id, likerUsername);
		}
		
		ObjectNode countNode = JsonGeneratorService.getObjectMapper().createObjectNode();
		countNode.put("likes", count);
		
		return countNode;
	}
	
	
	// Get likers
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.GET,
			value="/limbs/{id}/likers")
	public List<? extends JsonNode> getLikersByLimbId(@PathVariable Integer id) {
		List<Boer> likers = limbService.getLikersFromLimb(id);
		List<ObjectNode> likedLimbJsonList = new ArrayList<>();
		
		likers.stream().forEach((Boer b) -> {
			likedLimbJsonList.add(jsonGenService.generateBoerJsonNode(b));
		});
		
		return likedLimbJsonList;
	}
	
	
	@RequestMapping(method=RequestMethod.POST,
			value="/upload",
			consumes="multipart/form-data",
			produces="application/json")
	public JsonNode uploadMedia(@RequestBody MultipartFile mediaFile) {
		final String KEY_SUCCESS = "success";
		final String KEY_MESSAGE = "message";
		final String KEY_URL = "url";
		ObjectNode resultJson = JsonNodeFactory.instance.objectNode();
		
		if(mediaFile == null) { // No file given.
			resultJson.put(KEY_SUCCESS, false);
			resultJson.put(KEY_MESSAGE, "No file given.");
			resultJson.putNull(KEY_URL);
			return resultJson;
		} else if(mediaFile.isEmpty()) { // Empty file.
			resultJson.put(KEY_SUCCESS, false);
			resultJson.put(KEY_MESSAGE, "File is empty.");
			resultJson.putNull(KEY_URL);
			return resultJson;
		}
		
		String url = s3BucketService.uploadFile(mediaFile);
		
		if(url == null || url.isEmpty()) { // Upload error.
			resultJson.put(KEY_SUCCESS, false);
			resultJson.put(KEY_MESSAGE, "Error occurred during upload.");
			resultJson.putNull(KEY_URL);
			return resultJson;
		}
		
		
		// Successful.
		resultJson.put(KEY_SUCCESS, true);
		resultJson.put(KEY_MESSAGE, "File successfully uploaded.");
		resultJson.put(KEY_URL, url);
		
		return resultJson;
	}
	
	@RequestMapping(method=RequestMethod.DELETE,
			value="/upload/delete")
	public JsonNode deleteMedia(@RequestBody JsonNode args) {
		final String KEY_SUCCESS = "success";
		final String KEY_MESSAGE = "message";
		ObjectNode resultJson = JsonNodeFactory.instance.objectNode();
		
		// Get url
		JsonNode urlNode = args.get("url");
		String url = urlNode.textValue();
		
		// Check for null.
		if(url == null) {
			resultJson.put(KEY_SUCCESS, false);
			resultJson.put(KEY_MESSAGE, "URL not found.");
			return resultJson;
		}
		
		// Check for valid URL
		try {
			URL urlCheck = new URL(url);
		} catch(MalformedURLException ex) {
			resultJson.put(KEY_SUCCESS, false);
			resultJson.put(KEY_MESSAGE, "URL provided is not valid.");
			return resultJson;
		}
		
		
		try {
			s3BucketService.deleteFileFromS3Bucket(url);
		} catch(Exception ex) {
			resultJson.put(KEY_SUCCESS, false);
			resultJson.put(KEY_MESSAGE, "Error occurred during deletion.");
			return resultJson;
		}
		
		resultJson.put(KEY_SUCCESS, true);
		resultJson.put(KEY_MESSAGE, "File successfully deleted.");
		
		return resultJson;
	}
}
