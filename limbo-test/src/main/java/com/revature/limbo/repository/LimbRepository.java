package com.revature.limbo.repository;

import org.springframework.data.repository.CrudRepository;

import com.revature.limbo.bean.Limb;

public interface LimbRepository extends CrudRepository<Limb, Integer> {
	
}
