import React from 'react';
import { string } from 'prop-types';

const Contact = (props) => {
  const {
    name,
    phone,
    address,
  } = props;

  return (
    <div className='contact'>
      <div className='name'>
        <b>Name</b>: {name}
      </div>
      <div className='phone'>
        <b>Phone</b>: {phone}
      </div>
      <div className='address'>
        <b>Address</b>: {address}
      </div>
      <br />
    </div>
  );
};


Contact.propTypes = {
  name: string.isRequired,
  phone: string.isRequired,
  address: string.isRequired,
};

export default Contact;
