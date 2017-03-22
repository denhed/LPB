import React, { Component } from 'react';
//import Survey from '../Survey';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class UsersIndex extends Component {
  componentWillMount(){
    this.props.getUsersAPI();
  }

  render() {
    if(this.props.users.length === 0) { return <div>Loading...</div> };
    return (
      <div>
        <div className="">
          {this.props.users.map(user => {
            return (
              <h3 key={user.id}>{user.firstName}</h3>
            )
          })}
        </div>
      </div>
    )
  }
};

function mapStateToProps(state, ownProps) {
  return {
    users: state.users
  };
}
export default connect(mapStateToProps, null)(UsersIndex);
//export default SurveyGrid;
