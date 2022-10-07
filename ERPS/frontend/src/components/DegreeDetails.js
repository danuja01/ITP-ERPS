import { Link, useNavigate, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const DegreeDetails = () => {
  const { id } = useParams();
  const { data: degree, isPending, error } = useFetch(`/api/degrees/${id}`);

  const navigate = useNavigate();

  const handleDelete = () => {
    fetch(`/api/degrees/${degree._id}`, {
      method: 'DELETE',
    }).then(() => {
      navigate('/admin/degrees');
    });
  };

  return (
    <div class='max-w p-6 m-8 ml-2 mb-5 border border-gray-50 bg-white rounded-lg  shadow-md '>
      {error && <p>{error}</p>}
      {isPending && (
        <div className='loading'>
          <div className='snippet' data-title='.dot-pulse'>
            <div className='stage'>
              <div className='dot-pulse'></div>
            </div>
          </div>
        </div>
      )}
      {degree && (
        <div>
          <h3 class='my-9 text-2xl font-bold tracking-tight text-gray-900 text-center'>
            {degree.degree_name}
          </h3>

          <h4 className='text-gray-900 leading-9'>
            Stream: {degree.streams.map((stream) => stream).join(', ')}
          </h4>
          <h4 className='text-gray-900 leading-9'>
            Minimum Z-SCORE : {degree.z_score}
          </h4>
          <h4 className='text-gray-900 mb-5 leading-9'>
            Duration : {degree.duration} Years
          </h4>
          <div
            id='slider'
            className='mt-3  overflow-y-scroll scroll  scroll-smooth scrollbar-none'
          >
            <p className='text-gray-900 leading-9 mb-9 text-justify'>
              {degree.description}
            </p>
          </div>
          <div className='flex justify-end'>
            <Link
              to={`/admin/degree/update/${degree._id}`}
              class='mr-2  w-30 py-3.5 px-7 text-sm font-medium text-center text-white bg-brown-100 rounded-lg hover:bg-brown-200 focus:ring-4 focus:outline-none focus:ring-brown-300 '
            >
              UPDATE
            </Link>

            <button
              onClick={handleDelete}
              class=' w-30 py-3.5 px-7 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 '
            >
              DELETE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DegreeDetails;
