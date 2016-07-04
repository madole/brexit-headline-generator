import React, { Component, PropTypes } from 'react';
import style from './style.css';
import Headline from '../Headline';
import TweetShare from '../TweetShare';

class MainSection extends Component {
    componentDidMount() {
        this.getRandom();
    }

    getRandom() {
        const { getRandomHeadline } = this.props.actions;
        getRandomHeadline();
    }

    render() {
        const headline = this.props.headlines.headline;
        return (
          <section className={style.main}>
            <Headline headline={headline} />
            <button
              className={style.button}
              onClick={() => this.getRandom()}
            >
            Another headline please bob
            </button>
            <TweetShare tweet={headline} />
          </section>
        );
    }
}

MainSection.propTypes = {
    headlines: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    headlineClass: PropTypes.string
};

export default MainSection;
