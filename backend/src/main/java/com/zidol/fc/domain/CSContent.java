package com.zidol.fc.domain;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.validation.constraints.NotNull;

import lombok.Builder;

@Entity
public class CSContent {
	
	@OneToOne
	@JoinColumn(name = "cs_code")
	private CS cs;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long csContentCode;
	
	@NotNull
	@Column(columnDefinition = "TEXT")
	private String csContent;
	
	@NotNull
	@Column
	private LocalDate csRegdate;
	
	@PrePersist
	@PreUpdate
	public void createdAt() {
		this.csRegdate = LocalDate.now();
	}
	
	@Builder
	public CSContent(long csContentCode, @NotNull String csContent, @NotNull LocalDate csRegdate) {
		super();
		this.csContentCode = csContentCode;
		this.csContent = csContent;
		this.csRegdate = csRegdate;
	}
	
}
