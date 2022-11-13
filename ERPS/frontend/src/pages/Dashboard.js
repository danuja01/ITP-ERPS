import AdminName from '../components/AdminName';
import AdminNav from '../components/AdminNav';

const Dashboard = () => {
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
