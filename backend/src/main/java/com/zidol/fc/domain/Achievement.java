package com.zidol.fc.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Builder;
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
	@JsonBackReference(value = "user-cs")
	private User user;
	
	@ManyToOne
	@JoinColumn(name = "cs_code")
	@JsonBackReference(value = "cs")
	private CS cs;

	@Builder
	public Achievement(long achievementCode, User user, CS cs) {
		super();
		this.achievementCode = achievementCode;
		this.user = user;
		this.cs = cs;
	}	
	
}
