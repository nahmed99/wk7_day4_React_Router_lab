import { useState, useEffect } from 'react';


function App() {

  const [articleIds, setArticleIds] = useState([]);

  // This useEffect will run once - on initial load only. That is the 
  // effect of [].
  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
    .then((res) => res.json())
    .then((data) => {
      setArticleIds(data);
    });
  }, []); 

  return (
    <h1>Hey!</h1>
  );
}

export default App;
