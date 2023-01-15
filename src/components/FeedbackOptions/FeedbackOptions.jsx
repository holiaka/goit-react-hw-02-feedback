// import PropTypes from "prop-types";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const arr = Object.keys(options);
  return (
    <div onClick={onLeaveFeedback}>
      {arr.map(item => (
        <button key={item} type="button" name={item}>
          {item[0].toUpperCase() + item.slice(1)}
        </button>
      ))}
    </div>
  );
};
