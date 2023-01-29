import { useState } from 'react';
import Logo from '@/commons/components/logo';
import './home.css';

function Home() {

  return ( 
    <div>
      <Logo></Logo>
      <h3>Make Perfect Travel With Your Kids</h3>
      <div className='loginForm'>
      <form action='#' className='loginForm'>
        <input name='login' placeholder='ID'></input>
        <input type='password' placeholder='PASSWORD'></input>
        <div className='loginButtons'>
          <button>LOGIN</button>
          <button>SIGN UP</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Home;
