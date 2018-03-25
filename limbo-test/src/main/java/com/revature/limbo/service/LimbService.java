package com.revature.limbo.service;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revature.limbo.bean.Boer;
import com.revature.limbo.bean.Limb;
import com.revature.limbo.repository.BoerRepository;
import com.revature.limbo.repository.LimbRepository;

@Service
public class LimbService {
	
	@Autowired
	private LimbRepository limbRepo;
	
	@Autowired
	private BoerRepository boerRepo;
	
	public List<Limb> getAllLimbs() {
		List<Limb> limbList = new ArrayList<>();
		limbRepo.findAll().forEach(limbList::add);
		
		return limbList;
	}
	
	public Limb getLimbById(Integer id) {
		Optional<Limb> optLimb = limbRepo.findById(id);
		return optLimb.isPresent() ? optLimb.get() : null;
	}
	
	/**
	 * @param b
	 * @return null if b with given username exists.
	 */
	@Transactional
	public Limb addLimb(Limb limb) {
		limb.setId(null);

		return limbRepo.save(limb);
	}
	
	/**
	 * 
	 * @param b
	 * @return null if a boer with b's username doesn't exist.
	 */
	@Transactional
	public Limb updateLimb(Limb limb) {
		Limb existing = getLimbById(limb.getId());
		
		if(existing == null)
			return null;
		
		Field[] fields = limb.getClass().getDeclaredFields();
		
		for(Field f : fields) {
			String fieldName = f.getName();
			fieldName = fieldName.replaceFirst(".", 
					"" + Character.toUpperCase(fieldName.charAt(0)));
			String getMethodName = "get" + fieldName;
			String setMethodName = "set" + fieldName;
			
			try {
				Method getMethod = limb.getClass().getMethod(getMethodName);
				Method setMethod = limb.getClass().getMethod(setMethodName,  f.getType());
				
				Object getResult;
				setMethod.invoke(existing, 
					(getResult = getMethod.invoke(limb)) == null ?
						getMethod.invoke(existing) : getResult
				);
			} catch(NoSuchMethodException | SecurityException | IllegalAccessException
					| IllegalArgumentException | InvocationTargetException ex) {
				return null;
			}
		}
		
		limb = limbRepo.save(existing);
		
		return limb;
	}
	
	public void deleteLimbById(Integer id) {
		limbRepo.deleteById(id);
	}
	
	@Transactional
	public Integer likeLimb(Integer limbId, String likerUsername) {
		Optional<Boer> liker = boerRepo.findById(likerUsername);
		
		// add user to liker set if not liked.
		if(liker.isPresent()) {
			Limb likedLimb = limbRepo.findById(limbId).get();
			likedLimb.getLikers().add(liker.get());
			limbRepo.save(likedLimb);
		}
		
		return (int)(limbRepo.countLikersByLikersLikedLimbsId(limbId));
	}
	
	@Transactional
	public Integer unlikeLimb(Integer limbId, String likerUsername) {
		Optional<Boer> liker = boerRepo.findById(likerUsername);
		
		// remove user from liker set.
		if(liker.isPresent()) {
			Limb likedLimb = limbRepo.findById(limbId).get();
			likedLimb.getLikers().remove(liker.get());
			limbRepo.save(likedLimb);
		}
		
		return (int)(limbRepo.countLikersByLikersLikedLimbsId(limbId));
	}
	
	/////////////////////////////////////
	
	public long getLimbLikeCount(Integer limbId) {
		return limbRepo.countLikersByLikersLikedLimbsId(limbId);
	}
	
	public List<Boer> getLikersFromLimb(Integer limbId) {
		return boerRepo.findLikersByLikedLimbsId(limbId);
	}
}
