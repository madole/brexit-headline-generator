
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import MainSection from '../../components/MainSection';
import * as HeadlineActions from '../../actions/headlines';
import styles from './style.css';

const App = () => ({
    render() {
        const { headlines, actions } = this.props;
        return (
          <div className={styles.container}>
            <Header className={styles.header} />
            <MainSection headlines={headlines} actions={actions} />
          </div>
        );
    }
});

App.propTypes = {
    headlines: PropTypes.any,
    actions: PropTypes.object
};

function mapStateToProps(state) {
    return {
        headlines: state.headlines
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(HeadlineActions, dispatch)
    };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
