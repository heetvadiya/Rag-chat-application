import './App.css'
import {useState} from "react";
import FileHandler from "./components/FileHandler.tsx";

function App() {
  const [review, setReview] = useState<string>("")

  function handleSubmit(){
     fetch("http://localhost:3002/chat?userInput=" + review)
      .then(async (response) =>
      alert((await response.json()).reply))
      setReview('');
  }

  return (
    <>
      <div className="flex space-y-2 space-x-8">
        <label htmlFor="review-input" className="font-serif">Review</label>
        <input
          className="w-full px-1 py-2 border font-serif border-blue-400 focus:border-none rounded-md focus:outline-0 focus:ring-blue-500 focus:ring-1"
          type="text"
          value={review}
          placeholder="Add Review"
          onChange={(e) => {
              setReview(e.target.value)
          }}/>
      </div>
      <button onClick={handleSubmit}>Send</button>

      <FileHandler></FileHandler>
    </>
  )
}

export default App
