import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <Link to='/about'>About</Link> <hr></hr>
      <Link to='/Dashboard'>Dashboard</Link>
    </footer>
  )
}

export default Footer