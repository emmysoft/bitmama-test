import { useState } from "react";
import styled from "styled-components";

function LoginForm({ Login, error }) {
  const [username ,setUserName] = useState("");
  const [details, setDetails] = useState({ username: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  // const Logout = () => {
  //   console.log(Logout)
  // }

  return (
    <>
      <Wrapper onSubmit={submitHandler}>
        <Input
          type="text"
          placeholder="enter your username"
          onChange={(e) => setDetails({ ...details, username: e.target.value })}
          value={username}
          required
        />
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
  justify-content: center;
  background-color: #fff;
  box-shadow: 2px 4px 2px 4px rgba(213, 184, 255);, 1;
  border: 3px solid #fff;
  width: 40vw;
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
  width: 30%;
  border: 1px solid #000000;
`;
const Button = styled.button`
  background-color: #6a0dad;
  border: 1px solid #6a0dad;
  cursor: pointer;
  padding: 1rem;
  color: #fff;
  width: 10%;
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  margin-top: 40px;
  &:hover {
    background-color: #fff;
    color: #6a0dad;
    transition: 0.3s all ease-in;
    border: 1px solid #6a0dad;
  }
`;
