import styled from 'styled-jsx/css'

export const Banner = () => {

  return (
    <div className="container">
      <img src="images/logo.png" className="logo-img" />
      <style jsx>{css}</style>
    </div>
  )
}

const css = styled`
  .container {
    display: flex;
    height: 500px;
    flexDirection: column;
    alignItems: center;

    background-size: cover;
    background-position: center;
    background-image: url("images/banner.jpeg");
  }

  .logo-img {
    height: 150px;
    object-fit: contain;
  }
`
