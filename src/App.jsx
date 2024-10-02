import { useState } from "react";
import "./App.css";
import { useReplicateMutation } from "./app/slices/apislice.js";

function App() {
  const [mutate] = useReplicateMutation();
  const [ress, setRess] = useState();
  const [prompt, setPrompt] = useState("");
  console.log(prompt, "prompt");

  async function handleClick(e) {
    e.preventDefault();
    const res = await mutate({ prompt: prompt });
    setRess(res.data.src);
    console.log(res, "res");
  }
  return (
    <div className="container">
      <h1 className="title">Visual Generation AI</h1>
      <p className="description">
        Enter your text and let the AI generate stunning visuals.
      </p>
      <textarea
        className="textarea"
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button className="button" onClick={(e) => handleClick(e)}>
        Generate
      </button>
      <img src={ress} className="image" />
    </div>
  );
}

export default App;
