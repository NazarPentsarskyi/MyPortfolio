import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";

export const Navbar = () => {

  return (
    <div className='navbar'>
      <Router>
      <div className='links'>
        <div className='link'><Link to="../pages/about"> About </Link></div>
        <div className='link'><Link to="../pages/projects"> Projects </Link></div>
        <div className='link'><Link to="../pages/contacts"> Contacts </Link></div>
      </div>
      </Router>
    </div>
  )
}
