import { Link } from 'react-router-dom'
import Dashboard from './Dashboard'

const Footer = () => {
  return (
    <footer>
      <hr></hr>
      <Link to='/about'>About</Link> <br></br>
      <Link to='/dashboard'>Dashboard</Link><br></br>
      <Link to='/'>Task Page</Link>
    </footer>
  )
}

export default Footer