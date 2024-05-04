import { useLocation } from 'react-router-dom';
import Header from './Header';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/login' && location.pathname !=='/register' && <Header />}
      <div className='font-mono'>{children}</div>
    </>
  );
};

export default Layout;