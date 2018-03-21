package com.revature.limbo.boers;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Boer {
	@Id
	private String userName;
	private String password;
	private String email;
	private String birthday;
	private String coverPhoto;
	private String profilePhoto;
	
	public Boer() {
		
	}
	
	public Boer(String userName, String password, String email, String birthday, String coverPhoto,
			String profilePhoto) {
		super();
		this.userName = userName;
		this.password = password;
		this.email = email;
		this.birthday = birthday;
		this.coverPhoto = coverPhoto;
		this.profilePhoto = profilePhoto;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getBirthday() {
		return birthday;
	}

	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}

	public String getCoverPhoto() {
		return coverPhoto;
	}

	public void setCoverPhoto(String coverPhoto) {
		this.coverPhoto = coverPhoto;
	}

	public String getProfilePhoto() {
		return profilePhoto;
	}

	public void setProfilePhoto(String profilePhoto) {
		this.profilePhoto = profilePhoto;
	}
	
	
	
}
