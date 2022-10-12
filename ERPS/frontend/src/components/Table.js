import { useState } from 'react';
import useFetch from '../hooks/useFetch';

const Table = () => {
  const { data, isPending, error } = useFetch(
    'http://localhost:4000/api/applied-students/'
  );

  const [preference, setPreference] = useState(0);

  const isZscore = [];
  const tempColClr = '';

  const [isActive, setIsActive] = useState(false);

  const colOnChange = () => {
    setIsActive((current) => !current);

    setInterval(() => {
      setIsActive((current) => !current);
    }, 1000);
  };

  data &&
    data.forEach((data) => {
      // console.log(data.degree[preference].z_score);
      if (data.student.z_score >= data.degree[preference].z_score) {
        isZscore.push('bg-green-100');
      } else {
        isZscore.push('bg-red-100');
      }

      console.log(isZscore);
    });

  return (
    <div className='mx-12 mt-5'>
      {error && (
        <div className='flex justify-center my-52'>
          <p className='text-red-600 text-2xl  border-2 px-10 py-4 border-red-600'>
            404 : {error}
          </p>
        </div>
      )}
      {isPending && (
        <div className='mt-10  py-4 loading'>
          <div className='snippet' data-title='.dot-pulse'>
            <div className='stage'>
              <div className='dot-pulse'></div>
            </div>
          </div>
        </div>
      )}
      {data && (
        <div>
          {/* SELECTION MENUE */}
          <div className='inline-block relative w-64 mb-3'>
            <select
              onChange={(event) => setPreference(event.target.value)}
              className='block appearance-none w-full h-12 bg-gray-50 border border-gray-300 hover:border-brown-100 hover:border-2 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
            >
              <option value={0}>1st Preference</option>
              <option value={1}>2nd Preference</option>
              <option value={2}>3rd Preference</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg
                className='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </div>
          </div>
          {/* END SELECTION MENUE */}
          <table className='table-auto w-full text-left'>
            <thead className='border-b bg-brown-300 text-white text-sm font-medium'>
              <th className='px-6 py-4 w-80'>Index Number</th>
              <th className='px-6 py-4 w-44'>Z-Score</th>
              <th className='px-6 py-4 w-96'>Applied Degree</th>
              <th className='px-6 py-4 w-32'>Required Z-Score</th>
              <th className='px-6 py-4 w-16'></th>
              <th className='px-6 py-4 w-16'></th>
            </thead>
            <tbody>
              {data.map((data, index) => {
                return (
                  <tr key={data._id} className='bg-white border-b'>
                    <td className='px-6 py-4'>
                      <h3>{data.student.index_number}</h3>
                      <p className='text-xs text-gray-400'>
                        {data.student.student_name}
                      </p>
                    </td>
                    <td className={`px-6 py-4 ${isZscore[index]}`}>
                      {data.student.z_score}
                    </td>
                    <td
                      className={`px-6 py-4 ${isActive ? tempColClr : ''}`}
                      value={data.degree[preference]._id}
                    >
                      {data.degree[preference].degree_name}
                    </td>
                    <td className='px-6 py-4'>
                      {data.degree[preference].z_score}
                    </td>
                    <td className='px-6 py-4'>
                      <button className='bg-green-600 p-2 w-full  rounded-sm text-gray-50 mr-5'>
                        ASSIGN
                      </button>
                    </td>
                    <td className='px-1 pr-6 py-4'>
                      <button className='bg-yellow-500 p-2 w-full rounded-sm text-gray-900 mr-5'>
                        REJECT
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Table;
