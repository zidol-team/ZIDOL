package com.zidol.fc.domain;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Reply {
	
	@ManyToOne
	@JoinColumn(name = "user_code")
	@JsonBackReference(value = "user-reply")
	private User user;
	
	@ManyToOne
	@JoinColumn(name = "board_code")
	@JsonBackReference(value = "board-reply")
	private Board board;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long replyCode;
	
	@NotNull
	@Column
	private String replyContent;
	
	@NotNull
	@Column
	private LocalDate replyRegdate;
	
	@PrePersist
	@PreUpdate
	public void createdAt() {
		this.replyRegdate = LocalDate.now();
	}

	@Builder
	public Reply(User user, Board board, long replyCode, @NotNull String replyContent,
			@NotNull LocalDate replyRegdate) {
		super();
		this.user = user;
		this.board = board;
		this.replyCode = replyCode;
		this.replyContent = replyContent;
		this.replyRegdate = replyRegdate;
	}

}
