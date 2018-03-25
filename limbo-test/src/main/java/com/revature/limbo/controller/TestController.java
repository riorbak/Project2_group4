package com.revature.limbo.controller;

import java.io.File;
import java.io.IOException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.revature.limbo.bean.Boer;
import com.revature.limbo.repository.BoerRepository;
import com.revature.limbo.repository.LimbRepository;

@RestController
public class TestController {
	
	@Autowired
	private BoerRepository boerRepo;
	
	@Autowired 
	private LimbRepository limbRepo;
	
	@RequestMapping(method=RequestMethod.POST,
			value="/testfu",
			consumes="multipart/form-data",
			produces="text/plain")
	public String testMultipart(String stuff,
			@RequestParam(name="myfile") MultipartFile myfile) {
		StringBuilder sb = new StringBuilder();
		
		Long filesize = myfile.getSize();
		String filename = new File(myfile.getOriginalFilename()).getName();
		
		// Hash Sha-256
		MessageDigest hasher = null;
		
		try {
			hasher = MessageDigest.getInstance("SHA-256");
		} catch(NoSuchAlgorithmException ex) {}
		
		String b64sha256 = "";
		try {
			byte[] sha256ByteHash = hasher.digest(myfile.getBytes());
			b64sha256 = Base64.getEncoder().encodeToString(sha256ByteHash);
		} catch(IOException ex) {}
		
		sb.append("Filename: ").append(filename).append('\n');
		sb.append("Length: ").append(filesize).append('\n');
		sb.append("SHA256: ").append(b64sha256).append('\n');
		
		
		return sb.toString();
	}
	
	
	
	@RequestMapping(method=RequestMethod.GET,
			value="/boers/{username}/limbs/count")
	public JsonNode testCount(@PathVariable String username) {
		Long count = limbRepo.countLimbsByOwnerUsername(username);
		
		ObjectNode rootNode = JsonNodeFactory.instance.objectNode();
		rootNode.put("count", count);
		
		return rootNode;
	}
	
	@RequestMapping(method=RequestMethod.GET,
			value="/boers/{username}/limbs/count-liked")
	public JsonNode testLikeCount(@PathVariable String username) {
		Long count = limbRepo.countLikedLimbsByLikersUsername(username);
		
		ObjectNode rootNode = JsonNodeFactory.instance.objectNode();
		rootNode.put("count", count);
		
		return rootNode;
	}
	
	@RequestMapping(method=RequestMethod.GET,
			value="/limbs/{id}/count-likes")
	public JsonNode testLimbLikeCount(@PathVariable Integer id) {
		Long count = limbRepo.countLikersByLikersLikedLimbsId(id);
		
		ObjectNode rootNode = JsonNodeFactory.instance.objectNode();
		rootNode.put("count", count);
		
		return rootNode;
	}

	
	@RequestMapping(method=RequestMethod.POST,
			value="/test/limb/{id}")
	public List<Boer> getAllLikers(@PathVariable Integer id) {
		return boerRepo.findLikersByLikedLimbsId(id);
	}
}
