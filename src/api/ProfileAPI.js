import { firebaseInstance } from "fbase/Fbase";
import axios from "axios";

const ProfileDB = {
    createProfileDB: async (img, name, say) => {
        const uuid = firebaseInstance.auth().currentUser.uid;

        const res = await axios({
            method: "post",
            url: `http://localhost:4000/profile`,
            params: {
                user_id: uuid,
                img: "",
                name: "",
                say: "saysomething"
            }
        })
        return res.data;
    }
}

export default ProfileDB;