import css from 'styled-jsx/css'
import { Banner } from '../src/components/banner'
import { Argument } from '../src/components/argument'
import { Repos } from '../src/components/repos'
import { Contact } from '../src/components/contact'
import { Sponsors } from '../src/components/sponsor'

const HomePage = () => {

  return (
    <div className="container">
      <Banner />
      <Argument />
      <Sponsors />
      <Repos />
      <Contact />
    </div>
  )
}


export default HomePage