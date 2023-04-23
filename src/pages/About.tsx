
import { Footer, Navbar} from 'components'
import { usePageTitle } from 'hooks'

const About = () => {
  usePageTitle('About Chatt')
  
  return (
    <>
    <Navbar />
    <main></main>
    <Footer />
    </>
  )
}

export default About