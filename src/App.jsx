import { useState, useEffect } from "react";

const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

function App() {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  useEffect(() => {
    // Fetch a joke when the component mounts
    fetchJoke();
  }, []);

  const getJoke = () => {
    fetchJoke();
  };

  return (
    <>
      <div className="container">
        <h2 className="title">Random Joke Generator</h2>
        <p className="sub-title">
          Click the button to get the Random Joke! 😊{" "}
        </p>

        <span className="emoji">&#128514;</span>
        <p className={`joke ${joke ? "fade" : ""}`}>{joke}</p>
        <button onClick={getJoke}>Get Random Joke</button>
      </div>
    </>
  );
}

export default App;
