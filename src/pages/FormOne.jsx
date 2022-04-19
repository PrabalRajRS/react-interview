import { Form } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../context';
import ButtonGroup from '../Components/ButtonGroup';

const FormOne = () => {
  const userContext = useContext(UserContext);
  const { emailId, password, handleChangeInput } = userContext;
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          type="email"
          name="emailId"
          onChange={handleChangeInput}
          value={emailId}
          placeholder="Enter email"
        />
        {userContext.showError && !emailId && <p> *required</p>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          type="password"
          name="password"
          value={password}
          onChange={handleChangeInput}
          placeholder="Password"
        />
        {userContext.showError && !password && <p> *required</p>}
      </Form.Group>

      <ButtonGroup />
    </Form>
  );
};

export default FormOne;
