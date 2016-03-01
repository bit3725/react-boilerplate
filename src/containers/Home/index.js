import React, {
  Component,
  PropTypes,
} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {autobind} from 'core-decorators';

import * as actions from '../../actions';
import Main from '../../components/Main';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  @autobind
  handleClick() {
    this.props.actions.fetchSample();
  }

  render() {
    return (
      <Main onClick={this.handleClick} />
    )
  }
}

Home.propTypes = {
  actions: PropTypes.shape({
    fetchSample: PropTypes.func.isRequired,
  }).isRequired,
}

export default connect(
  (state, ownProps) => ({

  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Home)
