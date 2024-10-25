import { useTitle } from "../hooks/useTitle";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {
  useTitle("Create Post");
  const navigate = useNavigate();
  const postRef = collection(db, "posts");

  async function handleCreatePost(e) {
    e.preventDefault();
    console.log(auth);
    const document = {
      title: e.target.title.value,
      description: e.target.description.value,
      // USE auth TO GET AUTHOR INFORMATION
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    };
    await addDoc(postRef, document);
    navigate("/");
  }

  return (
    <section className="create">
      <div className="heading">
        <h1>Add New Post</h1>
      </div>
      <form className="createPost" onSubmit={handleCreatePost}>
        <input
          type="text"
          className="title"
          name="title"
          placeholder="Title"
          maxLength="50"
          required
        />
        <textarea
          className="description"
          name="description"
          placeholder="What's on your mind?"
          maxLength="100"
          required
        ></textarea>
        <button type="submit" className="submit">
          Create
        </button>
      </form>
    </section>
  );
};
