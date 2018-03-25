package com.revature.limbo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.revature.limbo.bean.Boer;
import com.revature.limbo.bean.Limb;
import com.revature.limbo.service.BoerService;
import com.revature.limbo.service.JsonGeneratorService;

@RestController
public class BoerController {
	@Autowired
	private BoerService boerService;
	
	@Autowired
	private JsonGeneratorService jsonGenService;
	
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
	
}
