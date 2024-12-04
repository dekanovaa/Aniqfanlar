
import { Link } from 'react-router-dom'
import logo from '../../assets/logotip.png'
import './Navbar.css'
import Modal from '../Modal/Modal'
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

function Navbar() {
 
  const {t,i18n} = useTranslation();
  const languages = localStorage.getItem('i18nextLng')
  const handleChange = (event) => {
    const selectLanguage = event.target.value;
    i18n.changeLanguage(selectLanguage)
  }

  const [navColor, setNavColor] = useState('transparent');

  const handleScroll = () => {

    if (window.scrollY > 50) {
      setNavColor('blue');
    

    } else {
      setNavColor('transparent')
     

    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
  
    };
  
  }, []);
  return (
    <>
    <div  className={`navbar ${navColor === 'blue' ? 'navbar-blue' : 'navbar-transparent'}`}>
      <div className='container navbar__container'>
        <Link to="/"><img className='logo' src={logo} alt="logo" /></Link>
        <nav className='navbar__nav'>
          <Link to="/about" className='navbar__link'>{t('navbar.link2')}</Link>
          <Link to="/new" className='navbar__link'>{t('navbar.link3')}</Link>
          <Link to="/course" className='navbar__link'>{t('navbar.link4')}</Link>
        </nav>
        <Link to="/contact" className='navbar__link_btn'>{t('navbar.btn')}</Link>
      <Modal/>
      <select id='lang' onChange={handleChange} value={languages}>
        <option id='uz' value="uz">UZ</option>
        <option id='en' value="en">EN</option>
        <option id='ru' value="ru">RU</option>
      </select>
      </div>
    </div>
     
    </>
  )
}

export default Navbar
