import PropTypes from "prop-types";
import { Notification } from 'components/Notification/Notification';
import { StatWrapper } from "./Statistics.styled";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  if (total()) {
    return (
      <StatWrapper>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total()}</p>
        <p>Positive feedback: {positivePercentage()}</p>
      </StatWrapper>
    );
  } else {
    return <Notification message="There is no feedback"></Notification>;
  }
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
}