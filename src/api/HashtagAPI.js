import { firebaseInstance } from "fbase/Fbase";

const hashtagAPI = {
  filterPostByHashtag: async (hash) => {
    try {
      const selected = [];
      if (hash) {
        const posts = await firebaseInstance.database().ref("posts").get();
        await posts.forEach((post) => {
          const { hashtag } = post.val();
          if (hashtag && hashtag.includes(hash)) {
            selected.push(post.val());
          }
        });
      }
      if (selected.length) {
        return selected;
      }
    } catch (e) {
      return null;
    }
  },
};

export default hashtagAPI;
