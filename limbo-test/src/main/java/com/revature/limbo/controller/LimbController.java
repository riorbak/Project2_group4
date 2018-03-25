package com.revature.limbo.controller;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.revature.limbo.bean.Boer;
import com.revature.limbo.bean.Limb;
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
	private JsonGeneratorService jsonGenService;
	
	// Get all
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
	@RequestMapping(method=RequestMethod.GET,
			value="/limbs/{id}")
	public JsonNode getLimbById(@PathVariable Integer id) {
		return jsonGenService.generateLimbJsonNode(limbService.getLimbById(id));
	}
	
	// Add new 
	@RequestMapping(method=RequestMethod.POST,
			value="/boers/{posterUsername}/limbs/new")
	public JsonNode addLimb(@PathVariable String posterUsername, @RequestBody Limb limb) {
		limb.setOwner(boerService.getBoerById(posterUsername));
		limb.setPostTime(LocalDateTime.now()); // set post time.
		Limb addedLimb = limbService.addLimb(limb);
		
		return jsonGenService.generateLimbJsonNode(addedLimb);
	}
	
	
	// Update existing
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
	@RequestMapping(method=RequestMethod.DELETE,
			value="/limbs/{id}")
	public void deleteLimbById(@PathVariable Integer id) {
		limbService.deleteLimbById(id);
	}
	
	//////////////////////////////////////
	
	// Like/Unlike limb
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
}
