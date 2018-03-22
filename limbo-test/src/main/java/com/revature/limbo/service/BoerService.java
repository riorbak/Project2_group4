package com.revature.limbo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.limbo.bean.Boer;
import com.revature.limbo.repository.BoerRepository;

@Service
public class BoerService {
	
	@Autowired
	private BoerRepository boerRepo;
	
	public List<Boer> getAllBoers() {
		List<Boer> boerList = new ArrayList<>();
		boerRepo.findAll().forEach(boerList::add);
		
		return boerList;
	}

	public Boer getBoer(String id) {
		Optional<Boer> b = boerRepo.findById(id);
		return b.get();
	}
	
	public Boer addOrUpdateBoer(Boer b) {
		return boerRepo.save(b);
	}
	
	public void deleteBoer(String id) {
		boerRepo.deleteById(id);
	}
}
