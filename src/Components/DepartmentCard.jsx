import React from 'react'
import styled from 'styled-components'
import {useLocation, useNavigate} from 'react-router-dom'
import departmentImg from '../Assests/department.png'

const Container=styled.div` 
  width:200px;
  height:200px;
  overflow:hidden;
  margin:1rem;
  -webkit-box-shadow: 0px 0px 10px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  border-radius:10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  img{
    width:150px;
    height:150px;
    border-radius:50%;
  }
  span{
    font-size:1.2rem;
    text-align:center;
  }
`
const DepartmentCard = ({departmentName}) => {
  const navigate=useNavigate();
  const location=useLocation();

  const handleClick=()=>{
    if(location.state.record)  
      navigate('/recordsearch',{state:{department:departmentName,record:location.state.record}}) 
    else navigate('/search',{state:{department:departmentName}})
  }
  return (
    <Container onClick={handleClick}>
      <img src={departmentImg}/>
      <span>{departmentName}</span>
    </Container>
  )
}

export default DepartmentCard
