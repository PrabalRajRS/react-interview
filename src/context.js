import React, { createContext, useState } from 'react';

export const UserContext = createContext();
const initialState = {
  emailId: '',
  password: '',
  firstName: '',
  lastName: '',
  address: '',
  countryCode: '',
  phoneNumber: '',
};
export const UserProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const [currentPage, setCurrentPage] = useState('/formOne');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [postedData, setPostedData] = useState();
  const [showError, setShowError] = useState(false);
  const handleChangeInput = e => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  return (
    <UserContext.Provider
      value={{
        state,
        setState,
        currentPage,
        setCurrentPage,
        handleChangeInput,
        acceptTerms,
        setAcceptTerms,
        postedData,
        setPostedData,
        showError,
        setShowError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
