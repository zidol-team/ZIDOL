package com.zidol.fc.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class Board {
	
	@ManyToOne
	@JoinColumn(name="user_code")
	private User user;
	
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long boardCode;
	
	
	@NotNull
	@Column
	private String boardType;
	
	
	@NotNull
	@Column
	private String boardTitle;
	
	
	@NotNull
	@Column
	private String boardContent;

	@Builder
	public Board(User user, long boardCode, @NotNull String boardType, @NotNull String boardTitle,
			@NotNull String boardContent) {
		super();
		this.user = user;
		this.boardCode = boardCode;
		this.boardType = boardType;
		this.boardTitle = boardTitle;
		this.boardContent = boardContent;
	}


	
}