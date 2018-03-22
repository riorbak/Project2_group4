package com.revature.limbo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
	
	
	@RequestMapping(method=RequestMethod.GET,
			value="/boers")
	public List<Boer> getAllBoers() {
		return boerService.getAllBoers();
	}
	
	@RequestMapping(method=RequestMethod.GET,
			value="/boers/{username}/limbs")
	public List<Limb> getLimbsByBoer(@PathVariable String username) {
		Boer b = boerService.getBoer(username);
		return b.getLimbs();
	}
	
	@RequestMapping(method=RequestMethod.GET,
			value="/boers/{username}")
	public Boer getBoerById(@PathVariable String username) {
		return boerService.getBoer(username);
	}
	
	@RequestMapping(method=RequestMethod.POST,
			value="/boers")
	public void addOrUpdateBoer(@RequestBody Boer b) {
		boerService.addOrUpdateBoer(b);
	}
	
	@RequestMapping(method=RequestMethod.DELETE,
			value="/boers/{username}")
	public void deleteBoer(@PathVariable String username) {
		boerService.deleteBoer(username);
	}
}
