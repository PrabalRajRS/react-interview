import { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

// import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context';

const Home = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div className="bg-light p-5 mb-5">
        <h1>React + Bootstrap v4</h1>
        <p>React template with Bootstrap version v4</p>
        <p>
          <Button onClick={() => navigate('/formOne')} variant="primary">
            Go to Form
          </Button>
        </p>
      </div>
      {/* <Container>
        <Form>
          <Button onClick={onSubmit}>Goto Posts</Button>
        </Form>
      </Container> */}
    </main>
  );
};

export default Home;
