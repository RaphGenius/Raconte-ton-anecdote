import { onAuthStateChanged, updateCurrentUser } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { useRef, useState } from "react";
import { auth, db } from "../utils/firebase.config";

export default function CommentPost({ post }) {
  //S
  const [user, setUser] = useState(null);
  const answerContent = useRef();
  //C
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const handleComment = (e) => {
    e.preventDefault();

    let data = [
      {
        commentAuthor: user.displayName,
        text: answerContent.current.value,
      },
    ];
    updateDoc(doc(db, "posts", post.id), { comments: data });
    console.log(answerContent.current.value);
    answerContent.current.content = "";
  };
  //R
  return (
    <div className="comment-container">
      <h5 className="comment-title">Commentaire</h5>
      {user ? (
        <form onSubmit={(e) => handleComment(e)}>
          <textarea
            placeholder="Envoyer un commentaire"
            ref={answerContent}
          ></textarea>
          <input type="submit" value="Envoyer"></input>
        </form>
      ) : (
        <p>Vous devez être connecté pour poster un commentaire</p>
      )}
    </div>
  );
}
