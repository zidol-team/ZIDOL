package com.zidol.fc.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@Entity
@NoArgsConstructor
public class Board {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long boardCode;
	
	@NotNull
	private String boardType;
	
	@NotNull
	private String boardTitle;
	
	@NotNull
	private String boardContent;

	@Builder
	public Board(long boardCode, String boardType, String boardTitle, String boardContent) {
		super();
		this.boardCode = boardCode;
		this.boardType = boardType;
		this.boardTitle = boardTitle;
		this.boardContent = boardContent;
	}
	
}
