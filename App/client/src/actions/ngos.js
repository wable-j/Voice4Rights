// //client/src/actions/ngos.js

// import * as api from '../api';

// export const fetchAllNgos = () => async (dispatch) => {
//   try {
//     const { data } = await api.fetchAllNgos();
//     dispatch({ type: 'FETCH_NGOS', payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const createNgo = async (ngoData) => {
//   try {
//     const { data } = await api.postNgo(ngoData);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const deleteNgo = async (id) => {
//   try {
//     const { data } = await api.deleteNgo(id);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };



// client/src/actions/ngos.js

import * as api from '../api';
import {fetchAllQuestions} from "./question";

export const fetchAllNgos = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllNgos(); // Use the correct function name
    dispatch({ type: 'FETCH_NGOS', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createNgo = async (ngoData) => {
  try {
    const { data } = await api.postNgo(ngoData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteNgo = async (id) => {
  try {
    const { data } = await api.deleteNgo(id);
    return data;
  } catch (error) {
    console.log(error);
  }
};


export const subscribeUnsubscribeToNgo = (id, userId, ngoData) => async (dispatch) => {
  try{
    const {data} = await api.subscribeUnsubscribeToNgo(id, userId, ngoData);
    dispatch({ type:"SUBUNSUB_NGO", payload: data})
  } catch (error){
    console.log(error)
  }
}

// import * as api from '../api';

// export const fetchAllNgos = () => async (dispatch) => {
//   try {
//     const { data } = await api.fetchAllNgos();
//     dispatch({ type: 'FETCH_NGOS', payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const createNgo = async (ngoData) => {
//   try {
//     const { data } = await api.postNgo(ngoData);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const deleteNgo = async (id) => {
//   try {
//     const { data } = await api.deleteNgo(id);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
