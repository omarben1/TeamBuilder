package com.projects.service;

import java.util.List;

import com.projects.entities.Team;
import com.projects.entities.User;
import com.projects.helperClasses.TeamDTO;
import com.projects.helperClasses.TeamToBeAdded;
import com.projects.helperClasses.UserToBeAdded;

public interface ITeamService {

	public void addTeam(TeamToBeAdded teamToBeAdded);
	public void addUserToTeam(UserToBeAdded userToBeAdded);
	public List<TeamDTO> getTeams();
}
