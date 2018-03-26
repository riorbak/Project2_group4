package com.revature.limbo.controller;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.function.BiPredicate;
import java.util.regex.Pattern;

import org.apache.tomcat.util.buf.HexUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.revature.utils.Pair;

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
	
	
	@RequestMapping(method=RequestMethod.POST,
			value="/test-file-check",
			consumes="multipart/form-data",
			produces="application/json")
	public JsonNode testFileCheckReset(@RequestParam(name="data") MultipartFile mf) {
		ObjectNode result = JsonNodeFactory.instance.objectNode();
		
		// Check input
		if(mf == null) {
			result.put("message", "mf is null");
			return result;
		} else if(mf.isEmpty()) {
			result.put("message", "mf is empty");
			return result;
		}
		
		// Get data
		final byte[] fileData;
		try {
			fileData = mf.getBytes();
		} catch(IOException ex) {
			result.put("message", "error getting byte data");
			return result;
		}
		
		
		
		// Start
		final BiPredicate<byte[], Pair<String, Integer>> magicNumHexMatches =
		// (byte data, <regex, expected byte-length>)
		(byte[] data, Pair<String, Integer> hexMagicNumRegex) -> {
			// Data-length check.
			if(data.length < hexMagicNumRegex.getSecond()) {
				// data too short to be valid
				return false;
			}
			
			// Create magic number hex string.
			ByteArrayInputStream magicNumStream = new ByteArrayInputStream(data, 0, hexMagicNumRegex.getSecond());
			byte[] magicNum = new byte[hexMagicNumRegex.getSecond()];
			magicNumStream.read(magicNum, 0, hexMagicNumRegex.getSecond());
			String magicNumHex = HexUtils.toHexString(magicNum);
			
			
			// Perform matching.
			Pattern magicNumPattern = Pattern.compile(hexMagicNumRegex.getFirst());
			return magicNumPattern.matcher(magicNumHex).matches();
		};
		
		final List<Pair<String, Integer>> magicNumberRegexList = new ArrayList<>();
		magicNumberRegexList.add(new Pair<String, Integer>("89504e470d0a1a0a", 8)); // PNG
		magicNumberRegexList.add(new Pair<String, Integer>("52494646.{8}57454250", 12)); // WEBP
		magicNumberRegexList.add(new Pair<String, Integer>("424d", 2)); // BMP
		magicNumberRegexList.add(new Pair<String, Integer>("ffd8ffdb", 4)); // JPG-RAW
		magicNumberRegexList.add(new Pair<String, Integer>("ffd8ffe0.{4}4a4649460001", 12)); // JPG-JFIF
		magicNumberRegexList.add(new Pair<String, Integer>("ffd8ffe1.{4}457869660000", 12)); // JPG-EXIF
		magicNumberRegexList.add(new Pair<String, Integer>("474946383761", 6)); // GIF87A
		magicNumberRegexList.add(new Pair<String, Integer>("474946383961", 6)); // GIF89A
		
		boolean isValid = magicNumberRegexList.stream().anyMatch(
			magicNumberRegex -> magicNumHexMatches.test(fileData, magicNumberRegex));
		// End
		
		
		if(isValid) {
			result.put("message", "file valid");
		} else {
			result.put("message", "file not valid");
		}
		
		return result;
	}
	
	
}
