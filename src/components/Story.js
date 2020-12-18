
const Story = ({story}) => {
    return (
        <div style={{background: "powderblue"}}>
          <p>Story Author {story.by} </p>
          <p>Story Title {story.title} </p>
          <p>Story Link {story.url} </p>
        </div>
    );
}

export default Story;