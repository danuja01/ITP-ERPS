import AdminName from '../components/AdminName';
import AdminNav from '../components/AdminNav';
import DegreeCard from '../components/DegreeCard';
import DegreeHeader from '../components/DegreeHeader';
import useFetch from '../components/useFetch';

const Degrees = () => {
  const { data, isPending, error } = useFetch('/api/degrees');

  return (
    <section className='flex gap-6'>
      <AdminNav />
      <div className='w-full mr-12'>
        <AdminName />
        <DegreeHeader />
        <div
          id='slider'
          className='mt-5 mx-12 overflow-y-scroll scroll scroll scroll-smooth scrollbar-hide'
        >
          {error && <p>{error}</p>}
          {isPending && (
            <div className='mt-10 py-4 loading'>
              <div className='snippet' data-title='.dot-pulse'>
                <div className='stage'>
                  <div className='dot-pulse'></div>
                </div>
              </div>
            </div>
          )}
          <div className='grid grid-cols-2'>
            {data &&
              data.map((degree) => (
                <DegreeCard key={degree.id} degree={degree} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Degrees;
