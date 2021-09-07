package com.projects.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.projects.entities.Team;
@RepositoryRestResource
public interface TeamRepository extends JpaRepository<Team, Long>{

}
