package com.revature.limbo.controller;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Base64;
import java.util.List;
import java.util.function.BiPredicate;
import java.util.function.Predicate;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.tomcat.util.buf.HexUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import com.fasterxml.jackson.databind.node.ObjectNode;

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
			value="/test-ms-reset",
			consumes="multipart/form-data",
			produces="application/json")
	public JsonNode testMultipartStreamReset(@RequestBody MultipartFile mf) {
		ObjectNode result = JsonNodeFactory.instance.objectNode();
		List<Predicate<byte[]>> imgPredList = new ArrayList<>();
		Predicate<byte[]> pngPred = (byte[] magicNumber) -> {
			boolean isValid = false;
			final byte[] PNG_MAGIC_NUM = HexUtils.fromHexString("89504e470d0a1a0a");
			
			if(magicNumber.length < PNG_MAGIC_NUM.length) {
				// input too short to be valid.
				return false;
			}
			
			// Read data & compare
			ByteArrayInputStream bais = new ByteArrayInputStream(magicNumber, 0, PNG_MAGIC_NUM.length);
			byte[] buffer = new byte[PNG_MAGIC_NUM.length];
			bais.read(buffer, 0, buffer.length);
			isValid = Arrays.equals(buffer, PNG_MAGIC_NUM);
			
			return isValid;
		};
		imgPredList.add(pngPred);
		
		Predicate<byte[]> webpPred = (byte[] magicNumber) -> {
			boolean isValid = false;
			// hex [52 49 46 46 ?? ?? ?? ?? 57 45 42 50]
			final String WEBP_MAGIC_NUM_REGEX =  "524946........57454250";
			final int WEBP_MAGIC_NUM_LENGTH = (WEBP_MAGIC_NUM_REGEX.length() >> 1);
			final Pattern WEBP_MAGIC_NUM_PATTERN = Pattern.compile(WEBP_MAGIC_NUM_REGEX);
			
			if(magicNumber.length < WEBP_MAGIC_NUM_LENGTH) {
				// input too short to be valid.
				return false;
			}
			
			// Read data & create magic number in hex string format
			ByteArrayInputStream bais = new ByteArrayInputStream(magicNumber, 0, WEBP_MAGIC_NUM_LENGTH);
			byte[] buffer = new byte[WEBP_MAGIC_NUM_LENGTH];
			bais.read(buffer, 0, buffer.length);
			String magicNumberString = HexUtils.toHexString(buffer);
			
			// Check the magic number hex string.
			Matcher m = WEBP_MAGIC_NUM_PATTERN.matcher(magicNumberString);
			isValid = m.matches();
			
			return isValid;
		};
		imgPredList.add(webpPred);
		
		BiPredicate<byte[], String> beginningHexMatches = (byte[] data, String hexRegex) -> {
			
			
			
			return false;
		};
		
		
		if(mf == null) {
			result.put("message", "mf is null");
			return result;
		} else if(mf.isEmpty()) {
			result.put("message", "mf is empty");
			return result;
		}
		
		try(InputStream inStream = mf.getInputStream()) {
			
		} catch(Exception ex) {
			StringWriter stackTraceWriter = new StringWriter();
			ex.printStackTrace(new PrintWriter(stackTraceWriter));
			result.put("message", "Exception caught trying to reset.");
			result.put("exception", ex.getClass().getSimpleName());
			result.put("stack-trace", stackTraceWriter.toString());
			return result;
		}
		
		
		return result;
	}
	
	
}
