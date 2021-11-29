import React from 'react';
import { connect } from 'react-redux';

import { updateTitle } from '../actions';

class Title extends React.Component {
  state = {
    newTitleText: this.props.title,
    editing: false
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateTitle = e => {
    e.preventDefault();
    this.props.updateTitle(this.state.newTitleText);
    this.setState({ editing: false });
  };

  render() {
    return (
      <div>
        {!this.state.editing ? (
          <h1>
            {this.props.title}{' '}
            <i
              className="far fa-edit"
              onClick={() => this.setState({ editing: true })}
            />
          </h1>
        ) : (
          <div>
            <input
              className="title-input"
              type="text"
              name="newTitleText"
              value={this.state.newTitleText}
              onChange={this.handleChanges}
            />
            <button onClick={this.updateTitle}>Update title</button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.title.title
  };
};

export default connect(
  mapStateToProps,
  { updateTitle } // same as { updateTitle: updateTitle }
)(Title);
