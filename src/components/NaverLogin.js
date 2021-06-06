import React, { useEffect } from 'react';

function NaverLogin(){
  const { naver } = window;

  const Login = () => {
    Naver();
    UserProfile();
  }

  useEffect(Login, []);

  const Naver = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: 'E59C2Otkehlcqp1ItTxd',
      callbackUrl: 'http://localhost:3000/',
      isPopup: false,
      loginButton: { color: 'green', type: 2, height: '50' }
    });
    naverLogin.init(); // Access_token/tokenType/expirein을 url로 전달
  };

  const UserProfile = () => {
    window.location.href.includes('access_token') && GetUser();
    function GetUser() {
      const location = window.location.href.split('=')[1];
      const token = location.split('&')[0];
      console.log("token: ", token);
      fetch(`${API}/account/sign-in` , {
        method: "GET",
        headers : {
          "Content-type" : "application/json",
          "Authorization": token
        },
      })
      .then(res => res.json())
      .then(res => {
        localStorage.setItem("access_token", res.token);
        localStorage.setUserData({
          name : res.name,
          email : res.email
        })
      })
      .catch(err => console.log("err : ", err));
    }
  }
}

export default NaverLogin