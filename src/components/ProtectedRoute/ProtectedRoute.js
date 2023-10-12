import { Navigate } from 'react-router-dom';
import { useStore } from '../../providers/StoreProvider';
import AppLayout from '../AppLayout';

const ProtectedRoute = ({ children, path }) => {
  const [state] = useStore();
  const { loggedIn } = state;
  return <AppLayout>{loggedIn ? children : <Navigate to='/' />}</AppLayout>;
};

export default ProtectedRoute;
