import { Link } from 'react-scroll';

export const Navbar = () => {

  return (
    <div className='navbar'>
      <div className='links'>
        <Link to='about' smooth={true} duration={500}>
          About
        </Link>
        <Link to='projects' smooth={true} duration={500}>
          Projects
        </Link>
        <Link to='cv' smooth={true} duration={500}>
          CV
        </Link>
        <Link to='contacts' smooth={true} duration={500}>
          Contact
        </Link>
      </div>
    </div>
  )
}
