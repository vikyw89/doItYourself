const Overview = (props) => {
    const { tasks } = props;
    console.log({tasks})
  
    return (
      <>
      <ul className="Overview">
        {tasks.map((task) => {
          return <li key={task.id}>{task.text}</li>;
        })}
      </ul>
      </>
    );
};

export { Overview }