import { PATH_URLS } from '../routes/path';
import http from '../utils/axios';
import { API_GATEWAY_URL } from './config';

export const URLS = {
  //GET

  //POST
  GET_ME: `/sign-in.act`,
  SIGN_UP: `/sign-up.act`
};

export function postSignUp(userInfos) {
  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify({
      userName: userInfos.userName,
      userNickname: userInfos.NickName,
      userEmail: userInfos.email,
      userPassword: userInfos.password
    })
  };

  fetch(URLS.SIGN_UP, requestOptions)
    .then((res) => res.json())
    .then((res) => {
      console.log('res : ', res);
      if (res.code === 'OK') {
        alert('회원가입이 완료되었습니다.');
        window.location = '/SignIn';
      } else if (res.code === 'DUPLICATED_ID') {
        alert('회원가입이 완료되지 않았습니다. 다시 시도해 주세요.');
      }
    });
}

export function postSignIn(userInfo) {
  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify({
      // userEmail, userPassword 전송
      userEmail: userInfo.email,
      userPassword: userInfo.password
    })
  };
  console.log('requestOptions : ', requestOptions);

  fetch(URLS.GET_ME, requestOptions)
    .then((res) => res.json())
    .then((res) => {
      console.log('res : ', res);
      if (res.code === 'LOGIN_FAILED') {
        alert(res.fieldErrors[0].message);
      } else {
        alert('로그인 성공했습니다.');
        // 로컬스토리지 저장
        localStorage.setItem('userEmail', res.data.userEmail);
        localStorage.setItem('userName', res.data.userName);
        localStorage.setItem('userNickname', res.data.userNickname);
        localStorage.setItem('userCode', res.data.userCode);

        window.location.replace(PATH_URLS.MYPAGE);
      }
    });
}

// export async function signUp(input) {
//   const response = await http.post('signup.act', input);
//   return response.data;
// }
