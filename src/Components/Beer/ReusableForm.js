import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  
  return (
    <React.Fragment>
      <div style={styles}>
        <form onSubmit={props.formSubmissionHandler}>
          <input
            required
            type='text'
            name='name'
            placeholder='Name of Beer' /><br />
          <input
            required
            type='text'
            name='description'
            placeholder='Description' /><br />
          <input
            required
            type='number'
            name='quantity'
            placeholder='Number of pints in keg (124)' /><br />
          <button type='submit'>{props.buttonText}</button>
        </form>
      </div>
    </React.Fragment>    
  );
}

const styles = {
  display: 'inlineBlock'
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;