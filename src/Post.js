import React, { Component } from 'react';
import { connect } from 'react-redux';
class Post extends Component {
render() {
return (
<div className="post">
  <table style={{'width':'100%'}}>
  <tr>
    <th>Manufacturer</th>
    <th>Make</th>
    <th>Model</th>
    <th>Year</th>
  </tr>
  <tr>
    <td style={{'textAlign':'center'}}>{this.props.post.manfacturer}</td>
    <td style={{'textAlign':'center'}}>{this.props.post.make}</td>
    <td style={{'textAlign':'center'}}>{this.props.post.model}</td>
    <td style={{'textAlign':'center'}}>{this.props.post.year}</td>
    <td><button className="edit"
    onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })
    }
    >Edit</button></td>
    <td><button className="delete"
    onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id })}
    >Delete</button></td>
  </tr>
  </table>
</div>
);
}
}
export default connect()(Post);