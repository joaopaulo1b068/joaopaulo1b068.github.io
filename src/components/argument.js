import styled from 'styled-jsx/css'

const text = [
  {
    "title": "O que é um Certificado Digital:",
    "content": "O certificado digital é uma identidade eletrônica para pessoas ou empresas. Ele equivale à uma carteira de identidade do mundo virtual. Imagine uma versão eletrônica de todos os seus documentos, segura e com autenticidade garantida por criptografia."
  },
  {
    "title": "Redução de Burocracia:",
    "content": "Uma das principais funções do certificado digital é otimizar processos de assinatura de documentos, reduzindo custos com burocracia, impressão e cartórios. Para isso, ele foi desenvolvido de maneira que replique as mesmas características jurídicas dos documentos tradicionais."
  },
  {
    "title": "Principais Vantagens:",
    "content": ""
  }
]

const frags = [
  'É possível assinar documentos de qualquer lugar',
  'Validade jurídica igual ao CPF ou CNPJ',
  'Segurança: é impossível fraudar uma assinatura digital',
  'Praticidade e economia, com a redução do volume de papel',
  'Agilidade na assinatura dos documentos',
  'Possibilidade de utilizar facilidades online de diversas empresas e órgãos públicos, como declaração de Imposto de Renda Online',
]

export const Argument = () => {

  return (
    <div className="container">

      <div className="logo">
        <img src="/images/logo.png" className="img-logo"></img>
      </div>
      <div className="book">
        {text.map((item, i) => (
          <div key={i}>
            <div><span className="title">{item.title}</span></div>
            <div><span className="content">{item.content}</span></div>
          </div>
        ))}
        <ul>
          {frags.map((item, i) => (
            <li key={i}> <span>{item}</span> </li>
          ))}
        </ul>
      </div>

      <style jsx>{css}</style>
    </div>
  )

}

const css = styled`

  .container {
    background-color: #f8e1f4;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px 0;
  }

  @media screen and (max-width: 600px) {
    .container {
      grid-template-columns: 1fr;
    }
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .img-logo {
    max-height: 200px;
    object-fit: contain;
  }

  .book {
    display: grid;
    grid-template-colums: 1fr;
    gap: 15px;
  }

  .title {
    color: blue;
    font-family: serif;
    font-size: 18px;
  }

`