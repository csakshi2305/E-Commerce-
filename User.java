package com.example.demo.model;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity@Getter@Setter@ToString@NoArgsConstructor@AllArgsConstructor
public class User {
	
	
	@id
	int id;
	String name;
	String password;
	int accountType;

}
