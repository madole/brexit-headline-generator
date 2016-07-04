import React, { Component, PropTypes } from 'react';
import style from './style.css';
import Headline from '../Headline';

class MainSection extends Component {
    componentDidMount() {
        this.getRandom();
    }

    getRandom() {
        const { getRandomHeadline } = this.props.actions;
        getRandomHeadline();
    }

    render() {
        return (
          <section className={style.main}>
            <Headline headline={this.props.headlines.headline} />
            <button className={style.button} onClick={() => this.getRandom()}>Another headline please bob</button>
          </section>
        );
    }
}

MainSection.propTypes = {
    headlines: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export default MainSection;
