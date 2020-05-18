import styled from 'styled-jsx/css'

export const Contact = () => {

  return (
    <div className="container">

      <form onSubmit={e => e.preventDefault()}>
        <h2>Entre Em Contato Conosco</h2>
        <label htmlFor="name">Nome</label>
        <input name="name" />
        <label htmlFor="email">Email</label>
        <input name="email" />
        <label htmlFor="msg">Mensagem</label>
        <textarea name="msg" rows="5" />
        <button type="submit">Enviar</button>
      </form>

      <span>@CERTIFIQUEPLUS - Certificação Digital</span>
      <style jsx>{css}</style>
    </div>
  )

}

const css = styled`

  .container {
    background-color: #dadada;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input, textarea, button {
    width: 100%;
    margin-bottom: 10px;
  } 

  form {
    max-width: 500px;
    padding: 20px;
  }

  h2 {
    text-align: center;
  }

  button {
    padding: 10px 0;
    display: block;
    color: #FFF;
    background-color: #0088FF;
  }

`