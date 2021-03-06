import Head from 'next/head';
import LoginForm from '../components/LoginForm';
import Profile from '../components/Profile';
import { useSelector } from "react-redux";
import { selectUser } from '../redux/slice';


export default function Home() {

  const user = useSelector(selectUser);

  return (
    <>
      <Head>
        <title>Login App</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {user ? <Profile/> : <LoginForm/> }
    </>
  )
}
 