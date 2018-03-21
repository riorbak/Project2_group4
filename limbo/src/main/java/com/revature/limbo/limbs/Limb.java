package com.revature.limbo.limbs;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Limb {
	
	@Id
	int Id;
	String boerName;
	String textContent;
	int numLikes;
	List<String> likers;
	String mediaObject;
	
	public Limb() {
		
	}
	
	public Limb(int id, String boerName, String textContent, int numLikes, List<String> likers, String mediaObject) {
		super();
		Id = id;
		this.boerName = boerName;
		this.textContent = textContent;
		this.numLikes = numLikes;
		this.likers = likers;
		this.mediaObject = mediaObject;
	}

	public Limb(int id, String boerName, String textContent, int numLikes, List<String> likers) {
		super();
		Id = id;
		this.boerName = boerName;
		this.textContent = textContent;
		this.numLikes = numLikes;
		this.likers = likers;
	}
	
	
	
	
		
}
