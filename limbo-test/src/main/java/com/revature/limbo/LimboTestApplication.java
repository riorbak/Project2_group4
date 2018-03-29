package com.revature.limbo;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class LimboTestApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(LimboTestApplication.class, args);
	}
	
	@Bean
	public static Logger getSysLogger() {
		return LogManager.getLogger("general-logger");
	}
}
