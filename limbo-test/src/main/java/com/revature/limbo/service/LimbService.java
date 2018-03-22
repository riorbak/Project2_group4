package com.revature.limbo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.limbo.bean.Limb;
import com.revature.limbo.repository.LimbRepository;

@Service
public class LimbService {
	
	@Autowired
	private LimbRepository limbRepo;
	
	public List<Limb> getAllLimbs() {
		List<Limb> limbList = new ArrayList<>();
		limbRepo.findAll().forEach(limbList::add);
		
		return limbList;
	}
	
	public Limb getLimbById(Integer id) {
		Optional<Limb> optLimb = limbRepo.findById(id);
		return optLimb.get();
	}
	
	public Limb addOrUpdateLimb(Limb limb) {
		return limbRepo.save(limb);
	}
	
	public void deleteLimbById(Integer id) {
		limbRepo.deleteById(id);
	}
}
