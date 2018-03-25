package com.revature.limbo.bean;

import java.net.URL;
import java.time.LocalDate;
import java.util.Set;
import java.util.TreeSet;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;


@Entity(name="boers")
@JsonIdentityInfo(generator=ObjectIdGenerators.PropertyGenerator.class,
				  property="username")
@JsonIgnoreProperties(ignoreUnknown=true)
@Table(name="boer")
public class Boer implements Comparable<Boer> {
	@Id
	@Column(name="username")
	private String username;
	
	@Column(name="first_name")
	private String firstName;
	
	@Column(name="last_name")
	private String lastName;
	
	@Column(name="email")
	private String email;
	
	@Column(name="bdate")
	private LocalDate bdate;
	
	
	@Column(name="profilePic")
	private URL profilePic;
	
	@Column(name="coverPic")
	private URL coverPic;
	
	@OneToMany(mappedBy="owner")
	@JsonIdentityReference(alwaysAsId=true)
	@JsonIgnore
	private Set<Limb> limbs;
	
	@ManyToMany(mappedBy="likers")
	@JsonIdentityReference(alwaysAsId=true)
	@JsonIgnore
	private Set<Limb> likedLimbs;
	
	
	public Boer() {
		setLimbs(new TreeSet<>());
		setLikedLimbs(new TreeSet<Limb>());
	}
	
	public Boer(String username, String firstName, String lastName, String email, LocalDate bdate) {
		super();
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.bdate = bdate;
		
		setLimbs(new TreeSet<>());
		setLikedLimbs(new TreeSet<Limb>());
		setProfilePic(null);
		setCoverPic(null);
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

	public Set<Limb> getLimbs() {
		return limbs;
	}

	public void setLimbs(Set<Limb> limbs) {
		this.limbs = limbs;
	}

	public Set<Limb> getLikedLimbs() {
		return likedLimbs;
	}

	public void setLikedLimbs(Set<Limb> likedLimbs) {
		this.likedLimbs = likedLimbs;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public LocalDate getBdate() {
		return bdate;
	}

	public void setBdate(LocalDate bdate) {
		this.bdate = bdate;
	}

	public URL getProfilePic() {
		return profilePic;
	}

	public void setProfilePic(URL profilePic) {
		this.profilePic = profilePic;
	}

	public URL getCoverPic() {
		return coverPic;
	}

	public void setCoverPic(URL coverPic) {
		this.coverPic = coverPic;
	}

	@Override
	public int compareTo(Boer b) {
		return username.compareTo(b.getUsername());
	}
}
