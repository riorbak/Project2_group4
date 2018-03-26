package com.revature.limbo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.revature.limbo.bean.Limb;

public interface LimbRepository extends CrudRepository<Limb, Integer> {
	public long countLimbsByOwnerUsername(String username);
	public long countLikedLimbsByLikersUsername(String username);
	
	public List<Limb> findAllByOwnerUsername(String username);
	public List<Limb> findLimbsLikedByLikersUsername(String username);
}
