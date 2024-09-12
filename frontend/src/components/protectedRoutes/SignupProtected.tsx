
import { useSelector } from 'react-redux';
import { Navigate, Outlet} from 'react-router-dom';
import { RootState } from '../../redux/store'; // Adjust the import path as needed based on your project structure

// Define the ProtectRoute component
export default function ProtectRoute() {
 
    
  // Use the useSelector hook with type safety
  const {email} = useSelector((state: RootState) => state.signup);

  // Return Outlet if the user is authenticated, otherwise redirect to sign-in
  return email ? <Outlet /> : <Navigate to="/" />;
}
