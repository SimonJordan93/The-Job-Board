const Job = (props) => {
  return (
    <div className={props.color}>
      <h2 className="job-title">{props.title}</h2>
      <span className="info">
        {props.contractType} - {props.country} - {props.city}
      </span>
    </div>
  );
};

export default Job;
