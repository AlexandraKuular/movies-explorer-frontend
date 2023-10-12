import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer';
import { useLocation } from 'react-router-dom';
import { appLayoutPT } from '../../utils/propTypes';

const AppLayout = ({ children, header = true, footer = true }) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {header && <Header />}
      {children}
      {path !== '/profile' && footer && <Footer />}
    </>
  );
};

AppLayout.propTypes = appLayoutPT;

export default AppLayout;
