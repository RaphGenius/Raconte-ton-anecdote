import { useRef } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebase.config";
export default function CreatePost({ uid, displayName }) {
  //state
  const message = useRef();
  //comportemment
  const handlePost = async (e) => {
    e.preventDefault();
    const data = {
      author: displayName,
      authorId: uid,
      message: message.current.value,
      comments: null,
      date: Date.now(),
    };
    // AddDoc permet d'ajouter à la Bdd
    // collection (dans quel base de donnée (dans firebase.config), le nom de la collection)
    // data = les infos qu'on envoit
    await addDoc(collection(db, "posts"), data);
    console.log(data);
    message.current.value = "";
  };
  return (
    <div className="new-post-modal">
      <form onSubmit={(e) => handlePost(e)}>
        <textarea placeholder="Message..." ref={message}></textarea>
        <input type="submit" value="envoyer" />
      </form>
    </div>
  );
}
