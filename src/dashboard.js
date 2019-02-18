import React from 'react';
import Subscriber from './lib/subscriber';
const client = new Subscriber('database');


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: [],
    };

    client.subscribe('create', payload => {
      this.updateActions(payload);
    })
  }
  // {collection: 'teams', id: '123', action: 'create'}
  updateActions = data => {
    this.setState({actions: [...this.state.actions, data] });
  };

  render(){
    return (
      <React.Fragment>
        <ul>
          {this.state.actions.map((action,idx) => (
            <li key={idx}>{action.collection} : {action.action} : {action.id}</li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

export default Dashboard;