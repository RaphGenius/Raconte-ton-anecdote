import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../utils/firebase.config";
import CommentPost from "./CommentPost";
import Delete from "./Delete";

export default function Post({ user, post }) {
  // State
  const [edit, setEdit] = useState(false);
  const [editMess, setEditMess] = useState(null);
  //Comportement
  const dateFormater = (date) => {
    let days = Math.floor((new Date() - new Date(date)) / (1000 * 3600 * 24));

    if (days === 0) {
      return "aujourd'hui";
    }
    if (days === 1) {
      return "il y a 1 jour";
    } else {
      return "il y a" + days + "jours";
    }
  };

  const handleEdit = () => {
    setEdit(false);

    if (editMess) {
      updateDoc(doc(db, "posts", post.id), { message: editMess });
    }
    return;
  };
  //Render
  return (
    <div className="post">
      <div className="post-header">
        <div className="left-part">
          <div className="title">
            <span>{post.author[0]} </span>
            <h2>{post.author} </h2>
          </div>
          <h5>Posté {dateFormater(post.date)} </h5>
        </div>
        {post.authorId === user?.uid && (
          <div className="right-part">
            <span
              onClick={() => {
                setEdit(!edit);
              }}
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </span>
            <span>
              <Delete postId={post.id} />
            </span>
          </div>
        )}
      </div>
      {edit ? (
        <>
          <textarea
            autoFocus
            value={editMess ? editMess : post.message}
            onChange={(e) => setEditMess(e.target.value)}
          ></textarea>
          <button className="edit-btn" onClick={() => handleEdit()}>
            Modifier message
          </button>
        </>
      ) : (
        <p>{editMess ? editMess : post.message} </p>
      )}
      <CommentPost post={post} />
    </div>
  );
}
