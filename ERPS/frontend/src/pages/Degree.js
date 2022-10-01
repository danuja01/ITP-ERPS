import { Link } from 'react-router-dom';
import AdminName from '../components/AdminName';
import AdminNav from '../components/AdminNav';
import DegreeDetails from '../components/DegreeDetails';

const Degree = () => {
  return (
    <section className='flex gap-6'>
      <AdminNav />
      <div className='w-full mr-12'>
        <AdminName />

        <div className='mt-5 mx-12 '>
          <Link
            to={'/admin/degrees'}
            className='  text-2xl font-bold text-gray-900 '
          >
            BACK
          </Link>

          <div className='mx-36'>
            {
              /* MAIN DEGREE CARD */
              <DegreeDetails />
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Degree;
