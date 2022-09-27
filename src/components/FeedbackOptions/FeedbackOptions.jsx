import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  const elements = options.map(el => {
    return (
      <button
        onClick={() => onLeaveFeedback(el.name)}
        name={el.name}
        key={el.id}
        type="button"
      >
        {el.name}
      </button>
    );
  });
  return <div>{elements}</div>;
};

export default FeedbackOptions;

FeedbackOptions.defaultProps = {
  options: [],
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
