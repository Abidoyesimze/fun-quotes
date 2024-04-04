import './App.css';
import Card from "./components/card";
import { useState } from 'react';
import "tailwindcss/tailwind.css";


function App() {
  const [quote, setQuote] = useState({
    anime: "Hyouka",
    character: "Eru Chitanda",
    quote: "I find myself hard to understand sometimes."
  });

  function getQuote(){
    fetch("https://animechan.xyz/api/random")
    .then((res) => res.json())
    .then((data) => setQuote(data))
    .catch((error) =>console.log(error.message));
  }

  
  return (
    <div className="App h-screen flex justify-center items-center bg-auto bg-center">
      <div>
      {quote && <Card quote={quote} />}
      <button onClick={getQuote} className="bg-green-400 px-5 py-4 mt-5 text-white">Get Quote</button>
      </div>
    </div>
  );
}

export default App;
