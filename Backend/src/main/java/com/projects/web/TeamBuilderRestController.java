package com.projects.web;

import java.util.List;
import java.util.Map;

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

import com.projects.entities.Team;
import com.projects.entities.User;
import com.projects.helperClasses.TeamDTO;
import com.projects.helperClasses.TeamToBeAdded;
import com.projects.helperClasses.UserToBeAdded;
import com.projects.service.ITeamService;

@RestController
public class TeamBuilderRestController {

	@Autowired
	ITeamService service;
	
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
	@GetMapping("/getTeams")
	public List<TeamDTO> getTeams(){
		return service.getTeams();
	}
	
}
