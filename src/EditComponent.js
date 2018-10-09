import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
handleEdit = (e) => {
  e.preventDefault();
 const newManfacturer = this.getManfacturer.value;
 const newMake = this.getMake.value;
 const newModel = this.getModel.value;
 const newYear = this.getYear.value;
  const data = {
    newManfacturer,
    newMake,
    newModel,
    newYear
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
}
render() {
return (
<div key={this.props.post.id} className="post">
  <form className="form" onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getManfacturer = input}
    defaultValue={this.props.post.manfacturer} placeholder="Enter Manufacturer" /><br /><br />

    <input required type="text" ref={(input) => this.getMake = input}
    defaultValue={this.props.post.make} placeholder="Enter Make" /><br /><br />

    <input required type="text" ref={(input) => this.getModel = input}
    defaultValue={this.props.post.model} placeholder="Enter Model" /><br /><br />

    <input required type="text" ref={(input) => this.getYear = input}
    defaultValue={this.props.post.year} placeholder="Enter Year" /><br /><br />

    <button>Update</button>
  </form>
</div>
);
}
}
export default connect()(EditComponent);