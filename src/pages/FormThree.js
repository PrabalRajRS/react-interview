import { Form } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../context';
import ButtonGroup from '../Components/ButtonGroup';

const FormThree = () => {
  const userContext = useContext(UserContext);
  const { countryCode, phoneNumber, handleChangeInput, setAcceptTerms, acceptTerms } = userContext;
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Country Code</Form.Label>
        <Form.Select
          required
          name="countryCode"
          onChange={handleChangeInput}
          type="text"
          value={countryCode}
          placeholder="Country Code"
        >
          <option>+91</option>
          <option>+1</option>
        </Form.Select>
        {userContext.showError && !countryCode && <p> *required</p>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          required
          name="phoneNumber"
          onChange={handleChangeInput}
          value={phoneNumber}
          type="number"
          placeholder="Phone Number"
        />
        {userContext.showError && !phoneNumber && <p> *required</p>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check
          required
          value={acceptTerms}
          type="checkbox"
          onClick={() => setAcceptTerms(!acceptTerms)}
          label="acceptTermsAndCondition"
        />
        {userContext.showError && !acceptTerms && <p> *required</p>}
      </Form.Group>
      <ButtonGroup />
    </Form>
  );
};

export default FormThree;
