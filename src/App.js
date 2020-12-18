import { useState, useEffect } from 'react';

import StoryList from './components/StoryList';

// Container for articleids and stories
function App() {

  const [articleIds, setArticleIds] = useState([]);
  const [stories, setStories] = useState([]);

  const fetchStoryData = (storyIds, numStories) => {
    // 'extract' the first 4 id's
    const topStories = storyIds.slice(0, numStories);
    //console.log(topFour);

    // map every url to the promise of the fetch
    let promises = topStories.map(storyId => fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`));

    // // create a map of stories (array), to use in the forEach loop below.
    // const clonedStories = stories.map((element) => {
    //   return element
    // });

    // Promise.all to wait until *ALL* promises are resolved
    Promise.all(promises) // accepts an array of promises and array of responses
      .then(responses => Promise.all(responses.map(r => r.json())))
      .then(stories => setStories(stories));
    
    // save that story data to the state
  }

  // This useEffect will run once - on initial load only. That is the 
  // effect of [].
  useEffect(()=>{
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
    .then((res)=>res.json()) // res is a single response
    .then((data)=>{
      setArticleIds(data);
    });
  },[]);

  // watch a part of the state variable (a single state variable - articleIds)
  useEffect(()=>{
    fetchStoryData(articleIds, 10); // fetch the number of the articles specified (the top x number of articles)
  },[articleIds])

  return (
    <div stlye={{backgroundColor: "#ff6600"}}>
      <h5 >Hacker News Client</h5>
      <StoryList stories={stories}/>
    </div>
  );
}

export default App;
