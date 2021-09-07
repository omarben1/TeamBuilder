package com.projects.helperClasses;

import java.util.List;

import com.projects.entities.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmailInfos {
	String title;
	List<User> members;

}
