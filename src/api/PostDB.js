// import { firebaseInstance } from "fbase/Fbase";
// import axios from "axios";
// import { v4 } from "uuid";

// const PostDB = {
//   createPostDB: async (title, content, hashtag) => {
//     //서버에 유저 생성 요청 call
//     const uuid = firebaseInstance.auth().currentUser.uid;
//     const name = await firebaseInstance.database().ref(`/users/user_${uuid}`).get();
//     console.log('the name is', name);
//     const post_id = v4();
//     const res = await axios({
//       method: "post",
//       url: `http://localhost:4000/posts`,
//       params: {
//         user_id: uuid,
//         date: Date(),
//         post_id,
//         title,
//         content,
//         hashtag,
//         name: name.name
//       },
//     });
//     return res.data;
//   },
// }

// export default PostDB;