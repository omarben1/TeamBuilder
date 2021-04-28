package com.projects.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projects.dao.TeamRepository;
import com.projects.dao.UserRepository;
import com.projects.entities.Team;
import com.projects.entities.User;
import com.projects.helperClasses.TeamDTO;
import com.projects.helperClasses.TeamToBeAdded;
import com.projects.helperClasses.UserToBeAdded;
@Service
public class ITeamServiceImpl implements ITeamService{
	
	@Autowired
	TeamRepository teamRepo;
	@Autowired
	UserRepository userRepo;
	public void addTeam(TeamToBeAdded teamToBeAdded) {
		Team team = teamToBeAdded.getTeam();
		User teamOwner = teamToBeAdded.getTeamOwner();
		team.setTeamOwner(teamOwner);
		teamOwner.setTeam(team);
		teamRepo.save(team);
		userRepo.save(teamOwner);
		
	}
	
	public void addUserToTeam(UserToBeAdded userToBeAdded) {
		Team team = teamRepo.findById(userToBeAdded.getTeamId()).get();
		User user = userToBeAdded.getUser();
		user.setTeam(team);
		userRepo.save(user);
		
	}
	
	public List<TeamDTO> getTeams(){
		List<TeamDTO> teams = new ArrayList<TeamDTO>();
		TeamDTO tmp;
		teamRepo.findAll().forEach((team)->{
			long teamId = team.getId();
			String teamName = team.getName();
			String teamDesc = team.getDescription();
			String teamOwnerFirstName = team.getTeamOwner().getFirstName();
			String teamOwnerLastName = team.getTeamOwner().getLastName();
			int nbrRemainingMembers = team.getNbrMaxofMembers() - team.getMembers().size();
			teams.add(new TeamDTO(teamId,teamName,teamDesc,teamOwnerFirstName,teamOwnerLastName,nbrRemainingMembers));
		});
		return teams;
	}
}







