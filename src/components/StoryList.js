import Story from './Story';

const StoryList = ({stories}) => {
    
    const storyNodes = stories.map((story) => {
        return (<Story story={story} />);
    });

    return (
        <>
            {storyNodes}
        </>
    )
}

export default StoryList;