package com.zidol.fc.domain;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;

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

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString
@Setter
@Getter
@NoArgsConstructor
@Entity
public class Board {
   
   @ManyToOne
   @JoinColumn(name="user_code")
   private User user;
   
   @Id
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
   
   @NotNull
   @Column
   private LocalDate boardRegDate;
   
   @PrePersist
   @PreUpdate
   public void createdAt() {
   
       this.boardRegDate = LocalDate.now();
   }
   @Builder
   public Board(User user, long boardCode, @NotNull String boardType, @NotNull String boardTitle,
		@NotNull String boardContent, @NotNull LocalDate boardRegDate) {
	super();
	this.user = user;
	this.boardCode = boardCode;
	this.boardType = boardType;
	this.boardTitle = boardTitle;
	this.boardContent = boardContent;
	this.boardRegDate = boardRegDate;
}
   




   
}