import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer';

const AppLayout = ({ children }) => {

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
