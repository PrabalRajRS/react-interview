import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../context';
import '../styles/ButtonGroup.css';
import { useNavigate } from 'react-router-dom';

const ButtonGroup = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const {
    emailId,
    password,
    firstName,
    lastName,
    address,
    countryCode,
    phoneNumber,
  } = userContext.state;

  const onSubmit = () => {
    if (
      userContext.acceptTerms &&
      emailId &&
      password &&
      firstName &&
      lastName &&
      address &&
      countryCode &&
      phoneNumber
    ) {
      userContext.setShowError(false);
      fetch('https://codebuddy.review/submit', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(userContext.state),
      });
      navigate('/posts');
    } else {
      userContext.setShowError(true);
    }
  };
  const onBackClick = () => {
    switch (userContext.currentPage) {
      case '/formOne':
        return null;
      case '/formTwo':
        userContext.setCurrentPage('/formOne');
        navigate('/formOne');
        break;
      case '/formThree':
        userContext.setCurrentPage('/formTwo');
        navigate('/formTwo');
        break;
      default:
        return;
    }
  };
  const onSaveNextClick = () => {
    switch (userContext.currentPage) {
      case '/formOne':
        userContext.setCurrentPage('/formTwo');
        navigate('/formTwo');
        break;
      case '/formTwo':
        userContext.setCurrentPage('/formThree');
        navigate('/formThree');
        break;
      case '/formThree':
        return null;
      default:
        return;
    }
  };
  const onSaveClick = () => {};
  return (
    <div className="button-group">
      <Button
        disabled={userContext.currentPage === '/formOne'}
        onClick={onBackClick}
        variant="primary"
      >
        Back
      </Button>
      <Button onClick={onSubmit} variant="primary">
        Save
      </Button>
      <Button
        disabled={userContext.currentPage === '/formThree'}
        onClick={onSaveNextClick}
        variant="primary"
      >
        Save and Next
      </Button>
    </div>
  );
};

export default ButtonGroup;
