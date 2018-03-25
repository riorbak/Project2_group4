package com.revature.limbo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.limbo.bean.Boer;
import com.revature.limbo.bean.Limb;
import com.revature.limbo.service.BoerService;

@RestController
public class BoerController {
	@Autowired
	private BoerService boerService;
	
	// Get all
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.GET,
			value="/boers")
	public List<Boer> getAllBoers() {
		return boerService.getAllBoers();
	}
	
	// Get user's limbs
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.GET,
			value="/boers/{username}/limbs")
	public List<Limb> getLimbsByBoer(@PathVariable String username) {
		Boer b = boerService.getBoer(username);
		return b.getLimbs();
	}
	
	// Get by ID
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.GET,
			value="/boers/{username}")
	public Boer getBoerById(@PathVariable String username) {
		return boerService.getBoer(username);
	}
	
	// Make new boer
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.POST,
			value="/boers/new")
	public Boer addBoer(@RequestBody Boer b) {
		return boerService.addBoer(b);
	}
	
	// Update boer
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.POST,
			value="/boers/update")
	public Boer updateBoer(@RequestBody Boer b) {
		return boerService.updateBoer(b);
	}
	
	// Delete boer
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.DELETE,
			value="/boers/{username}")
	public void deleteBoer(@PathVariable String username) {
		boerService.deleteBoer(username);
	}
}
