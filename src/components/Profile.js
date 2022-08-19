import React, { useState } from 'react';
import NowLoading from './NowLoading';

const Profile = () => {
  // const [users, setUsers] = useState([]); // Loading Data...
  const [users, setUsers] = useState([
    {
      name: "Ibnu",
      hobby: "tidur"
    },
    {
      name: "Muntzir",
      hobby: "ngoding"
    },
    {
      name: "Reza",
      hobby: "makan"
    },
    {
      name: "Reski",
      hobby: "minum"
    },
    {
      name: "Airi",
      hobby: "bermain musik"
    },
    {
      name: "John",
      hobby: "berenang"
    },
    {
      name: "Insan",
      hobby: "membantu teman"
    },
  ]);

  // console.log(users);

  // props: sebuah parameter yang diberikan dari parent component
  return (
    <div className='table-profile'>
      <table className='table table-hover table-bordered'>
        <thead className='bg-primary text-white'>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Hobby</th>
          </tr>
        </thead>
        <tbody>
          {/* 
          Jika array user atau === 0,
          Tampilkan NowLoading
          Jika array user lebih dari 0
          Tampilkan users.map
          
          let flag = true;
          if (flag){
          console.log(1)
          }else{
          console.log(0)
          }

          //ternary
          flag ? console.log(1) : console.log(0)

          */}
          {
            users.length !== 0 ?
              users.map((user, index) => {
                const { name, hobby } = user;
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{name}</td>
                    <td>{hobby}</td>
                  </tr>
                )
              }) :
              < NowLoading />
          }

        </tbody>
      </table>
    </div >
  )
}

export default Profile;