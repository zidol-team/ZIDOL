package com.zidol.fc.domain;

import java.io.Serializable;
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

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class CSContent implements Serializable{
	
	@OneToOne
	@JoinColumn(name = "cs_code")
	@JsonBackReference(value = "cs-content")
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
	public CSContent(CS cs, long csContentCode, @NotNull String csContent, @NotNull LocalDate csRegdate) {
		super();
		this.cs = cs;
		this.csContentCode = csContentCode;
		this.csContent = csContent;
		this.csRegdate = csRegdate;
	}
	
}
