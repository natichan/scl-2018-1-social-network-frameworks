import React from 'react';
import './Register.css';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';// primera letra mayuscula 
import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';




// const ranges = [
//   {
//     value: '0-20',
//     label: '0 to 20',
//   },
//   {
//     value: '21-50',
//     label: '21 to 50',
//   },
//   {
//     value: '51-100',
//     label: '51 to 100',
//   },
// ];

class InputAdornments extends React.Component {

  render() {

    return (
<Row>
    <Input placeholder="Placeholder" s={6} label="First Name" />
    <Input s={6} label="Last Name" />
    <Input s={12} label="disabled" defaultValue="I am not editable" disabled />
    <Input type="password" label="password" s={12} />
    <Input type="email" label="Email" s={12} />
</Row>
     
    );
  }
}

export default InputAdornments;
