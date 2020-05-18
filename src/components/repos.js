import styled from 'styled-jsx/css'

export const linkRFB = "https://pdfs-docs.s3-sa-east-1.amazonaws.com/DPN+RFB.pdf"

export const linkCD = "https://pdfs-docs.s3-sa-east-1.amazonaws.com/DPN+CD.pdf"

export const Repos = () => {

  return (
    <div className="container">

      <h3>Repositórios</h3>
      <div className="files">
        <a href={linkRFB} target="_blank" className="file">
          <img src="images/pdf.jpg" className="pdf-icon" />
          <span>DPN RFB</span>
        </a>
        <a target="_blank" href={linkCD} className="file">
          <img src="images/pdf.jpg" className="pdf-icon" />
          <span>DPN CD</span>
        </a>
      </div>

      <style jsx>{css}</style>
    </div>
  )

}

const css = styled`

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
  }

  a {
    text-decoration: none;
  }

  .file {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .files {
    display: flex;
    flex-direction: row;
  }

  .pdf-icon {
    width: 100px;
  }

`