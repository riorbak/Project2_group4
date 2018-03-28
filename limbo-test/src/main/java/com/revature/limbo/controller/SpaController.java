package com.revature.limbo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/")
public class SpaController {

	@RequestMapping(method = RequestMethod.GET)
	public String getSPA() {
		System.out.println("what");
		return "forward: index.html";
	}

}