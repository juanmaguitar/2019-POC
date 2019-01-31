import Link from 'next/link';
import PropTypes from 'prop-types';

import CssHeader from './styles.js'

const liSecret = <li><Link href="/secret"><a>Secret</a></Link></li>
const liLogin = <li><Link href="/login"><a>Login</a></Link></li>
const liLogout = <li><Link href="/logout"><a>Logout</a></Link></li>

const Header = ({ isLoggedIn }) => (
  <div>
    <CssHeader />
    <nav>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/public"><a>Public</a></Link></li>
        { isLoggedIn ? liSecret : liLogin }
        { isLoggedIn ? liLogout : '' }
      </ul>
    </nav>
    <h1>Auth0 & Next.js</h1>
  </div>
)

Header.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default Header;