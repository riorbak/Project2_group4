package com.revature.limbo.controller;

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
			value="/boers/{username}/limbs")
	public Limb addOrUpdateLimb(@PathVariable String username, @RequestBody Limb limb) {
		limb.setOwner(boerService.getBoer(username));
		return limbService.addOrUpdateLimb(limb);
	}
	
	@RequestMapping(method=RequestMethod.DELETE,
			value="/limbs/{id}")
	public void deleteLimbById(@PathVariable Integer id) {
		limbService.deleteLimbById(id);
	}
	
}
