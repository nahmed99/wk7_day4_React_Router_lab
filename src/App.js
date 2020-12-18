import { useState, useEffect } from 'react';

import StoryList from './components/StoryList';


function App() {

  const [articleIds, setArticleIds] = useState([]);
  const [stories, setStories] = useState([]);

  const fetchStoryData = (storyIds, numStories) => {
    // 'extract' the first 4 id's
    const topFour = storyIds.slice(0, 4);
    //console.log(topFour);

    // map every url to the promise of the fetch
    let promises = topFour.map(url => fetch(`https://hacker-news.firebaseio.com/v0/item/${url}.json`));

    // create a map of stories (array), to use in the forEach loop below.
    const clonedStories = stories.map((element) => {
      return element
    });

    // Promise.all to waits until all promises are resolved
    Promise.all(promises)
      .then(responses =>  responses)
      .then(responses => Promise.all(responses.map(r => r.json())))
      .then(stories => setStories(stories))

    
    // save that story data to the state
  }

  // This useEffect will run once - on initial load only. That is the 
  // effect of [].
  useEffect(()=>{
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
    .then((res)=>res.json())
    .then((data)=>{
      setArticleIds(data);
    });
  },[]);

  useEffect(()=>{
    fetchStoryData(articleIds, 10);
  },[articleIds])

  return (
    <div stlye={{backgroundColor: "#ff6600"}}>
      <h5 >Hacker News Client</h5>
      <StoryList stories={stories}/>
    </div>
  );
}

export default App;
