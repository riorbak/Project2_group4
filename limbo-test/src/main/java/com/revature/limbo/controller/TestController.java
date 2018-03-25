package com.revature.limbo.controller;

import java.io.File;
import java.io.IOException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class TestController {
	
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
	
}
