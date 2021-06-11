import React, { useEffect, useState } from "react";
// import axios from "axios";

interface Posts {
  id: string;
  title: string;
}

const ApiFetch: React.FC = () => {
  const [id, setId] = useState("1");
  const [posts, setPosts] = useState<Posts>({ id: id, title: "" });
  const [clicked, setClicked] = useState(false);

  const handlerClicked = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    //   setPosts(res.data);
    // });

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [clicked, id]);

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(evt) => setId(evt.target.value)}
      />
      <br />
      <button type="button" onClick={handlerClicked}>
        Get post
      </button>
      <br />
      {posts.title}
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default ApiFetch;
