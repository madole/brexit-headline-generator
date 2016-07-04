import React, { PropTypes } from 'react';
import styles from './style.css';

const TweetShare = ({ tweet }) => {
    let extendedTweet;
    if (`${tweet} - Brexit Headline Generator - https://goo.gl/K7Hdw4`.length < 140) {
        extendedTweet = `${tweet} - Brexit Headline Generator - https://goo.gl/K7Hdw4`;
    } else if (`${tweet} - Brexit Headline Generator`.length < 140) {
        extendedTweet = `${tweet} - Brexit Headline Generator`;
    } else {
        extendedTweet = tweet;
    }

    return (
      <a
        className={`${styles.tweet}`}
        href={`https://twitter.com/intent/tweet?text=${encodeURI(extendedTweet)}`}
        target="_blank"
      >
        <i className="fa fa-twitter" /> Tweet
      </a>
    );
};

TweetShare.propTypes = {
    tweet: PropTypes.string
};

export default TweetShare;
