package com.revature.limbo.bean;

import java.time.LocalDateTime;
import java.util.Set;
import java.util.TreeSet;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@JsonIdentityInfo(generator=ObjectIdGenerators.PropertyGenerator.class,
				  property="id")
public class Limb implements Comparable<Limb> {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	@Column(name="id")
	private Integer id;
	
	@Column(name="content")
	private String content;
	
	@Column(name="post_time")
	private LocalDateTime postTime;
	
	@ManyToOne(cascade=CascadeType.ALL,
			optional=false)
	@JsonIdentityReference(alwaysAsId=true)
	private Boer owner;
	
	@ManyToMany
	@JoinTable(name="liked_limbs",
		joinColumns=@JoinColumn(name="liked_post", referencedColumnName="id"),
		inverseJoinColumns=@JoinColumn(name="liked_by", referencedColumnName="username")
	)
	@JsonIdentityReference(alwaysAsId=true)
	private Set<Boer> likedBy;
	
	
	public Limb() {
		this.setLikedBy(new TreeSet<Boer>());
	}
	
	public Limb(Integer id, String content, String ownerUsername) {
		super();
		this.id = id;
		this.content = content;
		this.postTime = LocalDateTime.now();
		this.setOwner(new Boer(ownerUsername, "", "", "", null));
		this.setLikedBy(new TreeSet<Boer>());
	}

	public Limb(Integer id, String content, LocalDateTime postTime, String ownerUsername) {
		super();
		this.id = id;
		this.content = content;
		this.postTime = postTime;
		this.setOwner(new Boer(ownerUsername, "", "", "", null));
		this.setLikedBy(new TreeSet<Boer>());
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

	public LocalDateTime getPostTime() {
		return postTime;
	}

	public void setPostTime(LocalDateTime postTime) {
		this.postTime = postTime;
	}

	public Set<Boer> getLikedBy() {
		return likedBy;
	}

	public void setLikedBy(Set<Boer> likedBy) {
		this.likedBy = likedBy;
	}

	@Override
	public int compareTo(Limb o) {
		return id.compareTo(o.getId());
	}
}
