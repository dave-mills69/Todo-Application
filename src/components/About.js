import { Link } from 'react-router-dom'
import Dashboard from './Dashboard'

const About = () => {
  return (
    <div>
      <h4 className='abouts'>Version 1.0.0</h4>
      {/* you need to figure out styling on Back to Tasks */}
      <Link to='/'>Back to Tasks</Link>
    </div>
  )
}

export default About