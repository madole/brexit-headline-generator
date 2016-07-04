import React, { PropTypes } from 'react';

const Headline = ({ headline }) => (
  <div>{headline}</div>
);

Headline.propTypes = {
    headline: PropTypes.string.required
};

export default Headline;
