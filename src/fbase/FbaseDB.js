import { firestore } from "./Fbase";

const fetchData = () => {
  //collection : db, documnet : table, filed: column
  firestore
    .collection("test")
    .get()
    .then((docs) =>
      docs.forEach((datas) => {
        console.log(datas);
      })
    );
};

export default fetchData;
