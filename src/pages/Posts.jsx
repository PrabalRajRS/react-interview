import { useContext, useEffect } from 'react';
import { UserContext } from '../context';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Posts = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  useEffect(() => {
    const fetchData = fetch('https://codebuddy.review/posts');
    userContext.setPostedData(fetchData?.body?.data?.post);
  }, []);
  const onBackClick = () => {
    userContext.setCurrentPage('/formThree');
    navigate('/formThree');
  };
  return (
    <>
      {userContext.postedData?.map(data => (
        <p key={data.id}> {data}</p>
      ))}
      <Button onClick={onBackClick} variant="primary">
        Back
      </Button>
    </>
  );
};

export default Posts;
