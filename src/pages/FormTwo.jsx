import { Form } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../context';
import ButtonGroup from '../Components/ButtonGroup';

const FormTwo = () => {
  const userContext = useContext(UserContext);
  const { firstName, lastName, address, handleChangeInput } = userContext;
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          required
          name="firstName"
          onChange={handleChangeInput}
          value={firstName}
          type="text"
          placeholder="First Name"
        />
        {userContext.showError && !firstName && <p> *required</p>}
        {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          required
          name="lastName"
          onChange={handleChangeInput}
          value={lastName}
          type="text"
          placeholder="Last Name"
        />
        {userContext.showError && !lastName && <p> *required</p>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control
          required
          name="address"
          onChange={handleChangeInput}
          value={address}
          type="password"
          placeholder="Address"
        />
        {userContext.showError && !firstName && <p> *required</p>}
      </Form.Group>
      <ButtonGroup />
    </Form>
  );
};

export default FormTwo;
