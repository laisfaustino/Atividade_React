import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      
    <header>
        <nav className="navegacao">
            <ul>
              <li>Agendamento</li>
              <li>Serviços</li>
              <li>Contato</li>
            </ul>
  
        </nav>
        <img className='img' src="https://graces.com.br/wp-content/uploads/2019/02/o-que-nao-pode-faltar-na-sua-barbearia-equipamentos-1024x640.jpg" alt="Barbearia" />
    </header>

<section className="container">
    <div className="containerTexto">
        <h1>ESTILO NA PONTA DA TESOURA</h1>

    </div>

</section>
<section className="unidades">
<div className="unidadeTexto">
    <p>Clique na sua unidade de preferência e agende um horário conosco.</p>
    <ol>
        <button><li>Grajaú</li></button>
        <button><li>Capão Redondo</li></button>
        <button><li>Santo Amaro</li></button>
    </ol>
</div>
<img src="https://img.freepik.com/vetores-gratis/telefone-no-icone-de-estilo-de-desenho-animado-3d-de-mao-humana-pessoa-ou-empresario-usando-midias-sociais-na-ilustracao-vetorial-plana-de-smartphone-ou-celular-tecnologia-comunicacao-conceito-de-internet_74855-26088.jpg?w=740&t=st=1683903742~exp=1683904342~hmac=feb26e8d364b4af1ef4429e3aecb9acc39d6f4645b1605117c4c941b98238655" alt="mobile" />
</section>

<footer>
      
        <p>Desenvolvido por: Lais Faustino - 2023 &copy;</p>
    </footer>

    </>
  )
}

export default App
