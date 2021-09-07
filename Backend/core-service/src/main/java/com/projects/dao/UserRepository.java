package com.projects.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.projects.entities.User;
@RepositoryRestResource
public interface UserRepository extends JpaRepository<User, Long>{

}
