import React from 'react'
import './styles.scss'
import { GoogleLogo } from "phosphor-react";

function Singin(){
  return (
    <div className="container">
      <h1>Singin</h1>

      <span>
        Utilizando autenticação social com a Google você <br/>
        facilita a vida do usuário permitindo utilizar sua aplicação sem fazer cadastro.
      </span>

      <button type='button' className='button'>
        <GoogleLogo />
        Entrar com o Google
      </button>
    </div>
  )
}

export default Singin

