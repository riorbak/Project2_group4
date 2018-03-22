package com.revature.limbo.bean;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@JsonIdentityInfo(generator=ObjectIdGenerators.PropertyGenerator.class,
				  property="username")
public class Boer {
	@Id
	private String username;
	private String firstName;
	private String lastName;
	
	@OneToMany(mappedBy="owner")
//	@JsonBackReference
	@JsonIdentityReference(alwaysAsId=true)
	private List<Limb> limbs;
	
	public Boer() {
		limbs = new ArrayList<>();
	}
	
	public Boer(String username, String firstName, String lastName) {
		super();
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
		limbs = new ArrayList<>();
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public List<Limb> getLimbs() {
		return limbs;
	}

	public void setLimbs(List<Limb> limbs) {
		this.limbs = limbs;
	}
	
	
}
