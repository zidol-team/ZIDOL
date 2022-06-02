package com.zidol.fc.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Achievement {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long achievementCode;
	
	@ManyToOne
	@JoinColumn(name = "user_code")
	private User user;
	
	@ManyToOne
	@JoinColumn(name = "cs_code")
	private CS cs;
	
}
