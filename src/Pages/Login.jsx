import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { login } from '../utils/api'
import { CircularProgress } from "@mui/material"

const Container=styled.div`
  width:100vw;
  height:100vh;   
  position: absolute;
  top:0;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://images.pexels.com/photos/15372902/pexels-photo-15372902/free-photo-of-premium-computer-setup-on-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
    center;
  background-size:cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper=styled.div`
    padding: 20px;
    width:25%;
    min-width:15rem;
    background-color:white;
`
const Title=styled.h1`
    font-size: 24px;
    font-weight: 300;

`
const Form=styled.form`
    display: flex;
    flex-direction:column;
`
const Input=styled.input`
    flex:1;
    min-width:40%;
    margin: 10px 0px;
    padding: 10px;
`
const Bottom=styled.div`
  width: 100%;
  display: flex;
`
const Button=styled.button`
    width:40%;
    border:none;
    padding: 15px 20px;
    background-color:teal;
    color:white;
    cursor:pointer;
    margin-right:2rem;
    &:disabled{
      color:green;
      cursor:not-allowed;
    }
`

const Error=styled.span`
    color:red;
`
const Login = () => {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(false);
  const dispatch =useDispatch();
  const navigate=useNavigate();

  const handleClick= async e=>{
    e.preventDefault();
    setLoading(true)
    setError(false)
    const res=await login(dispatch,{username,password});
    console.log(res);
    if(res.status===200)  navigate('/');
    else if(res.response && res.response.status===401) setError(res.response.data) 
    else setError('Something went wrong.Unable to login..')
    setLoading(false)
  }
  return ( 
    <Container>
      <Wrapper>
            <Title >SIGN IN</Title>
           
            <Form>
                <Input placeholder="username"  onChange={e=>setUsername(e.target.value)}/>
                <Input placeholder="password" onChange={e=>setPassword(e.target.value)} type='password'/>
                <Bottom>
                  <Button onClick={handleClick} disabled={loading}>LOGIN</Button>
                  {loading && <CircularProgress />}
                </Bottom>
                {error && <Error>{error}</Error>}
                
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login;
