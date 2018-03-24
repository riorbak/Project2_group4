package com.revature.limbo.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.limbo.bean.Limb;
import com.revature.limbo.service.BoerService;
import com.revature.limbo.service.LimbService;

@RestController
public class LimbController {
	
	@Autowired
	private LimbService limbService;
	
	@Autowired
	private BoerService boerService;
	
	@RequestMapping(method=RequestMethod.GET,
			value="/limbs")
	public List<Limb> getAllLimbs() {
		return limbService.getAllLimbs();
	}
	
	
	@RequestMapping(method=RequestMethod.GET,
			value="/limbs/{id}")
	public Limb getLimbById(@PathVariable Integer id) {
		return limbService.getLimbById(id);
	}
	
	@RequestMapping(method=RequestMethod.POST,
			value="/boers/{posterUsername}/limbs/new")
	public Limb addLimb(@PathVariable String posterUsername, @RequestBody Limb limb) {
		limb.setOwner(boerService.getBoer(posterUsername));
		limb.setPostTime(LocalDateTime.now()); // set post time.
		return limbService.addLimb(limb);
	}
	
	@RequestMapping(method=RequestMethod.POST,
			value="/boers/{posterUsername}/limbs/update")
	public Limb updateLimb(@PathVariable String posterUsername, @RequestBody Limb limb) {
		if(limb.getId() == null) {
			// unknown id
			return null;
		}
		limb.setOwner(null);
		limb.setPostTime(LocalDateTime.now());
		
		return limbService.updateLimb(limb);
	}
	
	@RequestMapping(method=RequestMethod.DELETE,
			value="/limbs/{id}")
	public void deleteLimbById(@PathVariable Integer id) {
		limbService.deleteLimbById(id);
	}
	
	@RequestMapping(method=RequestMethod.GET,
			value="/limbs/{id}/{likerUsername}/{like}")
	public Integer likeLimb(@PathVariable Integer id,
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
		
		return count;
	}
}
