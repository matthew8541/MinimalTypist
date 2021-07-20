import "./List.css"

const List = (props) => {
  const { wpm, accuracy, date } = props.record
  return (
    <div className="list-box">
      <div className="inner-box">
        <p>{wpm}</p>
      </div>
      <div className="inner-box">
        <p>{accuracy}</p>
      </div>
      <div className="inner-box">
        <p>{date}</p>
      </div>
    </div>
  );
};

export default List;