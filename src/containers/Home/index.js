import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from '../../actions';
import Main from '../../components/Main';

const Home = ({actions}) => {
  function handleClick() {
    actions.fetchSample();
  }

  return (
    <Main onClick={handleClick} />
  )
}

Home.propTypes = {
  actions: PropTypes.shape({
    fetchSample: PropTypes.func.isRequired,
  }).isRequired,
}

export default connect(
  (state, ownProps) => ({}),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Home)
