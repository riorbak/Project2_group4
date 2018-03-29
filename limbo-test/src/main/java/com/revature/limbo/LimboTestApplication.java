package com.revature.limbo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.amazonaws.services.simpleworkflow.flow.annotations.Signal;

@SpringBootApplication
public class LimboTestApplication {
	
	
	
	public static void main(String[] args) {
		SpringApplication.run(LimboTestApplication.class, args);
	}
	
	
	
}
