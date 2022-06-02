package com.zidol.fc.domain;

import lombok.Data;

import javax.persistence.Entity;

@Data
public class DataResponse {
    // http 상태 코드
    private int status;
    
    // 메세지
    private String code;
    
    // 응답 데이터
    private Object data;
}
