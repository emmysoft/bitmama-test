import styled from "styled-components";

function LoginForm() {
  return (
    <>
      <Wrapper>
        <Input placeholder="enter your username" />
        <Button as="a" href="/profile">
          Login
        </Button>
      </Wrapper>
    </>
  );
}

export default LoginForm;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #fff;
    box-shadow: 2px solid #6a0dad;
    border: 1px solid #6a0dad;
    width: 50vw;
    height: 70vh;
    border-radius: 8px;
    position: relative;
    margin-left: 20em;
    margin-top: 3em;
`;
const Input = styled.input`
  padding: 1rem;
  border-radius: 8px;
  outline: none;
  width: 20%;
  border: 1px solid #000000; 
`;
const Button = styled.button`
  background-color: #6a0dad;
  border: 1px solid #6a0dad;
  cursor: pointer;
  padding: 1.5rem;
  color: #fff;
  width: 10%;
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  &:hover {
    background-color: #fff;
    color: #6a0dad;
    transition: 0.3s all ease-in;
    border: 1px solid #6a0dad;
  }
`;
