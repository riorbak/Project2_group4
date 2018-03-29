package com.revature.limbo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class SpaController {
	
	@RequestMapping({"/", "/feed", "/login", "/auth", "/verify"})
	public String getSPA() {
		return "forward:/index.html";
	}
	
	@RequestMapping("/profile/{username}")
	public String getSPA2() {
		return "forward:/index.html";
	}
	

}