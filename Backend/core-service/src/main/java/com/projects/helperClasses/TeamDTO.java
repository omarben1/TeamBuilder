package com.projects.helperClasses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @NoArgsConstructor @AllArgsConstructor
public class TeamDTO {

	long teamId;
	String teamName;
	String teamDesc;
	String teamOwnerFirstName;
	String teamOwnerLastName;
	int nbrRemainingMembers;
	
}
