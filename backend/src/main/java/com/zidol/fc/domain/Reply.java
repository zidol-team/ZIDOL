package com.zidol.fc.domain;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.validation.constraints.NotNull;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Reply {
	
	
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
	public Reply(long replyCode, @NotNull String replyContent, @NotNull LocalDate replyRegdate) {
		super();
		this.replyCode = replyCode;
		this.replyContent = replyContent;
		this.replyRegdate = replyRegdate;
	}
}
