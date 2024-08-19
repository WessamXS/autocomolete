
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TypeAnimation } from 'react-type-animation';

function App() {
  const [data, setdata] = useState([]);
  const [newdata, setnewdata] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        setdata(res.data)
        setnewdata(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  const filter = (e) => {
    setnewdata(data.filter(f => f.name.toLowerCase().includes(e.target.value)))
  }
  return (
    <div className="App ">

    <TypeAnimation
    sequence={[
      'Search Bar',
      1000,
            () => {
        console.log('Sequence completed');
      },
    ]}
    wrapper="span"
    cursor={true}
    repeat={Infinity}
    speed={10}
    style={{ fontSize: '50px', display: 'inline-block',margin:'20px'}}
  />
      <div className='card'>
        <div className='child'>
          <input className="input" onChange={filter} placeholder='Search' />
          <table>
            <div className='table'>
              <thead className='thead'>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>

              <tbody>
                {newdata.map((d, i) => (
                  <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>{d.phone}</td>
                  </tr>
                ))}
              </tbody>
            </div>
          </table>
          </div>
      </div>
  
      </div>
      );
    }

export default App;
