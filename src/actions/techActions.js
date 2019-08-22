import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
  SET_LOADING
} from './types';

// Get techs
export const getTechs = () => async dispatch => {
  try {
    const res = await fetch('/techs');

    const data = await res.json();
    console.log(data);

    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.data
    });
  }
};

// Add Techs
export const addTech = tech => async dispatch => {
  try {
    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.data
    });
  }
};

// Delete Techs
export const deleteTech = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/techs/${id}`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_TECH,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const setLoading = () => dispatch => {
  dispatch({
    type: SET_LOADING
  });
};
