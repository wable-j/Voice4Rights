import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Ngos.css';
import Avatar from '../../components/Avatar/Avatar';

const Ngo = ({ ngo }) => {
  useEffect(() => {
    //console.log('--------');
    //console.log(ngo.Name);  // Ensure 'Name' is the correct property; JavaScript is case-sensitive
  });

  return (
    <div className='ngo-profile-link'>
      <Link to={`/ngos/${ngo._id}`} style={{ textDecoration: 'none' }}>  {/* Assuming '_id' is the property storing the unique identifier */}
      <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius='50%' color='white' height='20px' width='15px' margin='5px'>
          NGO
        </Avatar>
        <h5>{ngo.Name}</h5>  {/* Ensure 'Name' is the correct property */}
      </Link>
    </div>
  );
};

export default Ngo;

