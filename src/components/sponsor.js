import styled from 'styled-jsx/css'

export const Sponsors = () => {

  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>Nossos Parceiros</h2>
      <div className="links">

        <a href="https://www.safeweb.com.br" target="blank">
          <img src="images/safeweb.png" alt="safeweb" />
        </a>
        <a href="https://contadorparceirosafeweb.com.br" target="blank">
          <img src="images/contador.png" alt="contador de parceiros" />
        </a>
      </div>

      <style jsx>{css}</style>
    </div>
  )

}

const css = styled`

  .container {
    padding: 20px;
    background-color: #f8e1f4;
  }
  
  .links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;  
  }

`