import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer>
      <hr></hr>
      <Link to='/'>Tasks</Link><br></br>
      <Link to='/about'>About</Link> <br></br>
      <Link to='/dashboard'>Dashboard</Link><br></br>

    </footer>
  )
}

export default Footer