package com.projects.openfeign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.projects.helperClasses.EmailInfos;

@FeignClient("EMAILSERVICE")
public interface EmailServiceClient {
	
	@RequestMapping(value = "/", method = RequestMethod.POST)
	 String sendEmail(@RequestBody EmailInfos emailInfos);
}
