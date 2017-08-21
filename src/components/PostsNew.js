import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

// reduxForm helper identical to the connect helper from react-redux
  // allows our component to talk directly to application state (redux store)

// Field
// doesn't know how to show itself on the screen
  // name property: specifies the peice of state this Field produces
  // component property: takes in a function that is used to display the Field
    // returns JSX

class PostsNew extends Component {

  // field object contains event Handlers responsible for making sure the Field knows its dealing with a specific input
  // field.input is an object containing event handlers and props (onChange, onBlur, value of input)
  // ... spread operator calls all properties in the field.input object and uses them as props to the input tag
  renderTitleField(field){
    return (
      <div>
        <input 
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form>
          <Field 
            name="title"
            component={this.renderTitleField}
          />
        </form>
      </div>
    );
  }
}

// reduxForm allows direct communication between component to the reducer in application state (store)
  // object that is passed 
    // key: name of the form ('form')
      // make sure the string that is assigned is unique
export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);