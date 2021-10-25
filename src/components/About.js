import { Link } from 'react-router-dom'
import Dashboard from './Dashboard'

const About = () => {
  return (
    <div>
      <h4 className='abouts'>My name is David Mills, and I truly appreciate you checking
      out this project. This react application was built as a project requirement at the school
      I attend (Flatiron). Thank you so much for viewing my app. </h4>
      {/* you need to figure out styling on Back to Tasks */}
      <Link to='/'>Back to Tasks</Link>
    </div>
  )
}

export default About