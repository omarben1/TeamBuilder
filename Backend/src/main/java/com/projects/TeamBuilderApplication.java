package com.projects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.projects.dao.TeamRepository;
import com.projects.dao.UserRepository;
import com.projects.entities.Team;
import com.projects.entities.User;

@SpringBootApplication
public class TeamBuilderApplication implements CommandLineRunner{

	@Autowired
	TeamRepository tr;
	@Autowired
	UserRepository ur;
	public static void main(String[] args) {
		SpringApplication.run(TeamBuilderApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		User user = new User(1,"omar","omarr","omar@email.com",null);
		ur.save(user);
		tr.save(new Team(5,"helloTeam","awesome team where we will work togrther to do something amazing",9, user,null));
		User user1 = new User(1,"hicham","hh","hicham@email.com",null);
		ur.save(user);
		tr.save(new Team(5,"myTeam","nothing to say just join us plz",9,user,null));
		User user2 = new User(1,"ff","offr","off@email.com",null);
		ur.save(user);
		tr.save(new Team(5,"welcome","dfgfdf cvbb nn",9,user,null));
	}

}
