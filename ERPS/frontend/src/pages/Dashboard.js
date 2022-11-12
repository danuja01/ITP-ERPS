import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

//hooks
import { useAuthContext } from '../hooks/useAuthContext';

// components
import AdminName from '../components/AdminName';
import AdminNav from '../components/AdminNav';

const Dashboard = () => {

  //hooks
  const { admin } = useAuthContext();

  //navigation
  const navigate = useNavigate();

  useEffect(() => {
    if (!admin) {
      navigate('/admin/login');
      return;
    }
  }, [admin, navigate]);


  return (
    <section className='flex gap-6'>
      <AdminNav />
      <div className='w-full mr-12'>
        <AdminName />
        <h1>ADMIN DASHBOARD</h1>
      </div>
    </section>
  );
};

export default Dashboard;
