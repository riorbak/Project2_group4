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
		return b.isPresent() ? b.get() : null;
	}
	
	/**
	 * 
	 * @param b
	 * @return null if b with given username exists.
	 */
	@Transactional
	public Boer addBoer(Boer b) {
		Boer existing = getBoer(b.getUsername());
		
		if(existing != null)
			return null;
		
		existing = boerRepo.save(b);
		
		return existing;
	}
	
	/**
	 * 
	 * @param b
	 * @return null if a boer with b's username doesn't exist.
	 */
	@Transactional
	public Boer updateBoer(Boer b) {
		Boer existing = getBoer(b.getUsername());
		
		if(existing == null)
			return null;
		
		Field[] fields = b.getClass().getDeclaredFields();
		
		for(Field f : fields) {
			String fieldName = f.getName();
			fieldName = fieldName.replaceFirst(".", "" + Character.toUpperCase(fieldName.charAt(0)));
			String getMethodName = "get" + fieldName;
			String setMethodName = "set" + fieldName;
			
			
			try {
				Method getMethod = b.getClass().getMethod(getMethodName);
				Method setMethod = b.getClass().getMethod(setMethodName, f.getType());
				
				Object getResult;
				setMethod.invoke(existing, 
					(getResult = getMethod.invoke(b)) == null ? 
						getMethod.invoke(existing) : getResult 
				);
			} catch (NoSuchMethodException | SecurityException | IllegalAccessException 
					| IllegalArgumentException | InvocationTargetException e) {
				return null;
			}
		} // end for
		
		b = boerRepo.save(existing);

		return b;
	}
	
	public void deleteBoer(String id) {
		boerRepo.deleteById(id);
	}
}
