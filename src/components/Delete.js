import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../utils/firebase.config";

export default function Delete({ postId }) {
  //state

  //Comportement
  const handleDelete = () => {
    deleteDoc(doc(db, "posts", postId));
  };
  //Render

  return (
    <span className="delete" onClick={(e) => handleDelete()}>
      <i className="fa-solid fa-trash-can"></i>
    </span>
  );
}
