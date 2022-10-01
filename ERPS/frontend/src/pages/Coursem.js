import AdminNav from '../components/AdminNav';
import CoursemName from '../components/CoursemName';
import CoursemHeader from '../components/CoursemHeader';
import CoursemCard from '../components/CoursemCard';


const Coursem = () => {
  return (
    <section className='flex gap-6'>
      <AdminNav />
      <div className='w-full mr-12'>
        <CoursemName />
        <CoursemHeader />
        <div
          id='slider'
          className='mt-5 mx-12 overflow-y-scroll scroll scroll scroll-smooth scrollbar-hide'
        >
          <div className='grid grid-cols-1 mx-32'>
            <CoursemCard />
            <CoursemCard />
            <CoursemCard />
            <CoursemCard />
            <CoursemCard />
            <CoursemCard />
            <CoursemCard />
            <CoursemCard />
            <CoursemCard />
            <CoursemCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coursem;
