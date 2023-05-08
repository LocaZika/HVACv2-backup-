import './Header.scss';
import { HeaderMobile, HeaderDesktop } from './Components';
import { useMediaQuery } from '@mui/material';

const menuItem = [
  {title: 'cars', path: '/cars'},
  {title: 'blog', path: '/blog'},
  {title: 'about', path: '/about'},
  {title: 'contact', path: '/contact'},
];
export default function Header() {
  const breakpoint992 = useMediaQuery(theme => theme.breakpoints.down('lg'));
  return (
    <header>
      {
        breakpoint992 === true ? 
          <HeaderMobile lgDown={true} menuItem={menuItem} /> :
          <HeaderDesktop menuItem={menuItem} />
      }
    </header>
  )
}
