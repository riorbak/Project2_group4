package com.revature.limbo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.revature.limbo.bean.Boer;

public interface BoerRepository extends CrudRepository<Boer, String> {
	public long countLikersByLikedLimbsId(Integer id);
	
	public List<Boer> findLikersByLikedLimbsId(Integer id);
	public Optional<Boer> findFirstBoerByEmail(String email);
}
