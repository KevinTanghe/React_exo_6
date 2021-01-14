import './Header.css';
import Navbar from './Navbar'
import Search from './Search'
function Header() {
  return (
    <div className="containerHeader">
      <Navbar></Navbar>
      <Search></Search>
    </div>
  );
}

export default Header;
