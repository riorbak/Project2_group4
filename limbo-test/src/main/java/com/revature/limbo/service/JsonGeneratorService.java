package com.revature.limbo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.revature.limbo.bean.Boer;
import com.revature.limbo.bean.Limb;

@Service
public class JsonGeneratorService {
	private static ObjectMapper jsonObjMapper = new ObjectMapper();
	
	@Autowired
	private BoerService boerService;
	
	@Autowired
	private LimbService limbService;
	
	public ObjectNode generateLimbJsonNode(Limb l) {
		ObjectNode lNode = jsonObjMapper.valueToTree(l);
		lNode.put("likes", limbService.getLimbLikeCount(l.getId()));
		
		return lNode;
	}
	
	public ObjectNode generateBoerJsonNode(Boer b) {
		ObjectNode bNode = jsonObjMapper.valueToTree(b);
		bNode.put("limbCount",
				boerService.getUserLimbsCount(b.getUsername()));
		bNode.put("likedLimbCount",
				boerService.getUserLikedLimbsCount(b.getUsername()));
		
		return bNode;
	}
	
	public static ObjectMapper getObjectMapper() {
		return jsonObjMapper;
	}
}
