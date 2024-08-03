import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = { language: 'en' };

function reducer(state, action) {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
    default:
      return state;
  }
}

const LanguageContext = React.createContext();

export function LanguageProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LanguageContext.Provider value={{ state, dispatch }}>
      {children}
    </LanguageContext.Provider>
  );
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { LanguageContext };
