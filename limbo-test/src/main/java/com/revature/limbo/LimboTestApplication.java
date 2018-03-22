package com.revature.limbo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.multipart.support.MultipartFilter;

@SpringBootApplication
public class LimboTestApplication {

	public static void main(String[] args) {
		SpringApplication.run(LimboTestApplication.class, args);
	}
	
//	@Bean
//	public CommonsMultipartResolver commonsMultipartResolver() {
//		final CommonsMultipartResolver commonsMultipartResolver = new CommonsMultipartResolver();
//		commonsMultipartResolver.setMaxUploadSize(-1);
//		return commonsMultipartResolver;
//	}
//	
//	@Bean
//	public FilterRegistrationBean<MultipartFilter> multipartFilterRegistrationBean() {
//		final MultipartFilter multipartFilter = new MultipartFilter();
//		final FilterRegistrationBean<MultipartFilter> filterRegistrationBean = new FilterRegistrationBean<>(multipartFilter);
//		filterRegistrationBean.addInitParameter("multipartResolverBeanName", "commonsMultipartResolver");
//		return filterRegistrationBean;
//	}
}
