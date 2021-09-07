package com.projects.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor @ToString
public class Team {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	long id;
	String name;
	String description;
	int nbrMaxofMembers;
	@OneToOne(cascade = CascadeType.ALL)
	User teamOwner;
	@OneToMany(mappedBy = "team", cascade = CascadeType.ALL)
	List<User> members;
}
