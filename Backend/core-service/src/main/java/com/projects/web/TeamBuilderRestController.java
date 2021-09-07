package com.projects.web;

import java.util.List;
import java.util.Map;

import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.netflix.discovery.shared.Application;
import com.projects.entities.Team;
import com.projects.entities.User;
import com.projects.helperClasses.EmailInfos;
import com.projects.helperClasses.TeamDTO;
import com.projects.helperClasses.TeamToBeAdded;
import com.projects.helperClasses.UserToBeAdded;
import com.projects.openfeign.EmailServiceClient;
import com.projects.service.ITeamService;

@RestController
public class TeamBuilderRestController {

	@Autowired
	ITeamService service;
	@Autowired
	EmailServiceClient emailServiceClient;
	
	@CrossOrigin
	@PostMapping("/addTeam")
	public ResponseEntity<String> addTeam(@RequestBody TeamToBeAdded teamToBeAdded ) {
		service.addTeam(teamToBeAdded);
		return new ResponseEntity<String>("TeamCreated",HttpStatus.ACCEPTED);
	}
	
	@CrossOrigin
	@PostMapping("/addUserToTeam")
	public void addUserToTeam(@RequestBody UserToBeAdded userToBeAdded) {
		service.addUserToTeam(userToBeAdded);
		
	}
	@GetMapping(path = "/getTeams",produces = {"application/json"}  )
	public List<TeamDTO> getTeams(){
		return service.getTeams();
	}
//	@GetMapping("send")
//	public String hhe() {
//		return emailServiceClient.sendEmail(new EmailInfos("hello this is email","this is content of email"));
//	
//	}
}
