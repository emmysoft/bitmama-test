import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../redux/slice';
import styled from "styled-components";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
      e.preventDefault();
      dispatch(logout());
  }

  return (
    <>  
      <Wrapper>
        <Text>Welcome {user.name} </Text>
        <Container>
          <Button as="a" href="/" onClick={(e) => handleLogout(e)}>
            Logout 
          </Button> 
          <AnotherButton as="a" href="/" onClick={(e) => handleLogout(e)}>
            Sign In 
          </AnotherButton>
        </Container> 
      </Wrapper> 
    </>
  );    
}
 
export default Profile;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 4em;
  background-color: #fff;
  width: 80%;
  height: 40vh;  
  box-shadow: 2px 4px 2px 4px rgb(220, 184, 255);  
  border-radius: 12px 8px;
  border: 3px solid #fff;
`;

const Text = styled.p`
    font-weight: bold;
    font-size: 30px;
    font-style: normal;
    text-align: center;
    color: rgba(213, 184, 255);, 1;
`;

const Button = styled.button`
  color: #fff;
  text-decoration: none;
  background-color: #6a0dad;  
  padding: 1rem;
  border-radius: 8px;
  &:hover {
    background-color: #fff;
    color: #6a0dad;
    border: 1px solid #6a0dad;
    transition: 0.3s ease-in-out;
  }
`;

const Container = styled.div`
  display: flex; 
  flex-direction: row;
  justify-contents: space-between;
  align-items: center;
  flex-grow: 1;
  margin: 8px;
`;

const AnotherButton = styled(Button)`
  background-color: #fff;
  color: #6a0dad;
  border: 1px solid #6a0dad;
  &:hover {
    background-color: #6a0dad;
    color: #fff;
    border: 1px solid #6a0dad;
    transition: 0.3s ease-in-out;
  }
`;
