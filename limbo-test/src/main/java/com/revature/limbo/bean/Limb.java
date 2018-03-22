package com.revature.limbo.bean;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@JsonIdentityInfo(generator=ObjectIdGenerators.PropertyGenerator.class,
				  property="id")
public class Limb {
	@Id
	private Integer id;
	private String content;
	
	@ManyToOne(cascade=CascadeType.ALL,
			optional=false)
	@JsonIdentityReference(alwaysAsId=true)
	private Boer owner;
	
	
	public Limb() {}
	
	public Limb(Integer id, String content, String ownerUsername) {
		super();
		this.id = id;
		this.content = content;
		this.setOwner(new Boer(ownerUsername, "", ""));
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Boer getOwner() {
		return owner;
	}

	public void setOwner(Boer owner) {
		this.owner = owner;
	}
	
	
}
