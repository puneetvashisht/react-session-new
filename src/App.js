import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [post, setPost] = useState("");

  useEffect(() => {
    console.log('one more change');
    fetch("https://my-json-server.typicode.com/puneetvashisht/demo-1/courses/1")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{post.title}</h2>
    </div>
  );
}
