//client/src/pages/NgosList.jsx

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchAllNgos } from '../../api';

import Ngo from './Ngo';
import './Ngos.css';

const NgosList = () => {
  const ngos = useSelector((state) => state.ngosReducer);
  // const [ngos,setNgos] = useState('')
  // const getNgos = async () => {
  //   const ng = await fetchAllNgos();
  //   setNgos(ng);
  // };
  useEffect(() => {
    console.log(ngos)
  }, [])


  return (
    <div className='ngo-list-container'>
      {ngos.map((ngo) => (
        <Ngo ngo={ngo} key={ngo?._id} />
      ))}
    </div>
  );
};

export default NgosList;
