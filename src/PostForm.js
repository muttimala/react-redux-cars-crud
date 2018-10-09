import React, { Component } from 'react';
import { connect } from 'react-redux';
class PostForm extends Component {
handleSubmit = (e) => {
e.preventDefault();
 const manfacturer = this.getManfacturer.value;
 const make = this.getMake.value;
 const model = this.getModel.value;
 const year = this.getYear.value;
 const data = {
  id: new Date(),
  manfacturer,
  make,
  model,
  year,
  editing: false
 }
 this.props.dispatch({
 type: 'ADD_POST',
 data
 })
 this.getManfacturer.value = '';
 this.getMake.value = '';
 this.getModel.value = '';
 this.getYear.value = '';
}
render() {
return (
<div className="post-container">
  <h1 className="post_heading">Add new car</h1>
  <form className="form" onSubmit={this.handleSubmit} >

   <input required type="text" ref={(input) => this.getManfacturer = input}
   placeholder="Enter manufacturer" /><br /><br style={{'marginBottom' : '20px'}}/>

   <input required type="text" ref={(input) => this.getMake = input}
   placeholder="Enter Make" /><br /><br style={{'marginBottom' : '20px'}} />

   <input required type="text" ref={(input) => this.getModel = input}
   placeholder="Enter Model" /><br /><br style={{'marginBottom' : '20px'}} />

   <input required type="text" ref={(input) => this.getYear = input}
   placeholder="Enter Year" /><br /><br style={{'marginBottom' : '20px'}} />


   <button>Post</button>
  </form>
</div>
);
}
}
export default connect()(PostForm);