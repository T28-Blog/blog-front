# 여행 블로그 Team 28 ver 1.0
## 📌 서비스 소개
![Team28-logo](https://user-images.githubusercontent.com/66353903/126797225-5ca388fd-155d-47fd-be18-bc8374049920.png)
여행자들이 그 동안 다닌 여행지에 대한 정보들을 기록하고 공유하기 위한 반응형 웹사이트

## 📌 주요 기능
### 👀 로그인 / 회원가입
![Login](https://user-images.githubusercontent.com/66353903/126796784-2a67d840-f5e4-4372-a0d3-c21636d4a477.png)
![Signup](https://user-images.githubusercontent.com/66353903/126796790-774fea29-bad3-471b-9ae8-9c8d28fb62d5.png)
+ 구글 또는 카카오 계정으로 OAuth인증을 통해 로그인 할 수 있습니다.

+ 자체 회원가입을 통해 이메일 인증 후 로그인하여 이용할 수 있습니다.

### 👀 메인페이지
![Main](https://user-images.githubusercontent.com/66353903/126796550-87cb9053-05ba-4afe-beba-4ece3beb52cf.png)
+ 최신글(작성일이 가장 빠른 순서) / 인기글(조회수가 많은 글) 두 가지의 정렬을 이용하여 구성되어 있습니다.

+ 글을 작성할 때 기입한 해시태그들이 메인페이지 우측에 위치하여 해시태그 클릭 시 해당 해시태그가 사용된 글만 모아서 보여줍니다.

### 👀 글쓰기 페이지
![Write](https://user-images.githubusercontent.com/66353903/126797622-93e00833-0bef-49e1-b630-e0c2af365426.png)
+ 제목, 본문, 썸네일, 임시저장, 저장, 구글맵으로 이루어져 있습니다.

+ TinyMCE 텍스트 에디터를 사용하여 본문 글을 작성 할 수 있게 하였습니다.

+ 임시저장은 1개만 가능하며, 저장하기 버튼을 클릭하면 글 작성이 완료됩니다.

+ 구글맵으로 현재 위치나 갔던 여행지의 위치를 보여줄 수 있습니다.

+ 썸네일 이미지를 등록할 수 있고 상세페이지와 목록페이지에서 썸네일 확인이 가능합니다.

+ 해시태그는 필요한 만큼 작성이 가능합니다.

### 👀 상세 페이지
![Detail](https://user-images.githubusercontent.com/66353903/126798282-0c7d49d4-8414-4029-9e1c-1ee3cc34d105.png)
+ 글쓰기 페이지에서 작성한 내용을 토대로 화면에 보여줍니다.

+ 로그인을 한 상태에서 댓글 또는 대댓글 작성이 가능하며, 작성자 본인의 글만 수정 및 삭제가 가능합니다.

### 👀 에러페이지 및 로딩페이지
![Loading](https://user-images.githubusercontent.com/66353903/126798604-588507fb-d782-47ab-a702-c00c2a819cb1.png)
![Error](https://user-images.githubusercontent.com/66353903/126798617-812e5508-7d8d-4cdf-baf4-8284da229b9b.png)

## 📌 배포
백엔드 구성은 파이어베이스와 파이어베이스 내 Realtime Database로 진행하였지만, 배포는 AWS EC2로 진행하였습니다.



## 🛠 &nbsp; Tech Stack &nbsp; 🛠

<img src="https://img.shields.io/badge/React-1B9CFC?style=flat-square&logo=React&logoColor=white"/>&nbsp;&nbsp;<img src="https://img.shields.io/badge/Redux-90caf9?style=flat-square&logo=Redux&logoColor=white"/>&nbsp;&nbsp;<img src="https://img.shields.io/badge/JavaScript-badc58?style=flat-square&logo=JavaScript&logoColor=white"/>
