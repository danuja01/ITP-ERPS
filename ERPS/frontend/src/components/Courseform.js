import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DegreeForm = () => {
  const [] = useState('');
  const [] = useState('0');
  const [] = useState(4);
  const [] = useState([]);
  const [] = useState('');
  const [] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const degreeDetails = {
      degree_name,
      z_score,
      duration,
      stream,
      description,
    };

    setIsPending(true);

    setTimeout(() => {
      fetch('/api/degrees', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(degreeDetails),
      }).then(() => {
        console.log('new degree added');
        console.log(stream);
        setIsPending(false);
        navigate('/admin/degrees');
      });
    }, 500);
  };

  useEffect(() => {
    console.log(stream);
  }, [stream]);

  return (
    <div className='mx-60'>
      <form onSubmit={handleSubmit}>
        <div className='px-4 py-5'>
          <label
            htmlFor='degree'
            className='block text-sm font-medium text-gray-700'
          >
            Degree
          </label>
          <input
            type='text'
            value={}
            onChange={(e) => setDegree(e.target.value)}
            placeholder='Add a Degree Program'
            className='mt-1 w-full h-12 rounded-md border-gray-300 focus:outline-brown-100  border p-2'
            required
          />

          <label
            htmlFor='z-score'
            className='block text-sm font-medium text-gray-700 mt-6'
          >
            Maximum z-score
          </label>
          <input
            type='number'
            value={z_score}
            onChange={}
            placeholder='z-score'
            className='mt-1 w-full h-12 rounded-md border-gray-300 focus:outline-brown-100  border p-2'
            required
          />

          <label
            htmlFor='duration'
            className='block text-sm font-medium text-gray-700 mt-6'
          >
            Course Duration :
          </label>
          <div className='inline-block relative w-64 mt-1'>
            <select
              value={}
              onChange={}
              className='block appearance-none w-full h-12 shadow-none bg-gray-50 border border-gray-300 hover:border-brown-100 hover:border-2 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
            >
              <option value={2}>2 Years</option>
              <option value={3}>3 Years</option>
              <option value={4}>4 Years</option>
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

          <label
            htmlFor='streams'
            className='block text-sm font-medium text-gray-700 mt-6'
          >
            Subject Streams :
          </label>

          <div className='grid justify-center grid-cols-3'>
            <div className='form-check mt-5'>
              <input
                className='form-check-input appearance-none h-7 w-7 border border-gray-300 rounded-lg bg-white checked:bg-brown-100 checked:border-brown-100 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                type='checkbox'
                value='Physical Science'
                onChange={(e) => {
                  setStream([...stream, e.target.value]);
                }}
                name='pScience'
              />
              <label
                className='form-check-label inline-block text-gray-800 '
                htmlFor='pScience'
              >
                Physical Science
              </label>
            </div>
            <div className='form-check mt-5'>
              <input
                className='form-check-input appearance-none h-7 w-7 border border-gray-300 rounded-lg bg-white checked:bg-brown-100 checked:border-brown-100 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                type='checkbox'
                value='Commerce'
                onChange={(e) => {
                  setStream([...stream, e.target.value]);
                }}
              />
              <label
                className='form-check-label inline-block text-gray-800 '
                htmlFor='flexCheckDefault'
              >
                Commerce
              </label>
            </div>
            <div className='form-check mt-5'>
              <input
                className='form-check-input appearance-none h-7 w-7 border border-gray-300 rounded-lg bg-white checked:bg-brown-100 checked:border-brown-100 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                type='checkbox'
                value='Languages'
                onChange={(e) => {
                  setStream([...stream, e.target.value]);
                }}
              />
              <label
                className='form-check-label inline-block text-gray-800 '
                htmlFor='flexCheckDefault'
              >
                Languages
              </label>
            </div>
            <div className='form-check mt-5'>
              <input
                className='form-check-input appearance-none h-7 w-7 border border-gray-300 rounded-lg bg-white checked:bg-brown-100 checked:border-brown-100 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                type='checkbox'
                value='Arts'
                onChange={(e) => {
                  setStream([...stream, e.target.value]);
                }}
              />
              <label
                className='form-check-label inline-block text-gray-800 '
                htmlFor='flexCheckDefault'
              >
                Arts
              </label>
            </div>
            <div className='form-check mt-5'>
              <input
                className='form-check-input appearance-none h-7 w-7 border border-gray-300 rounded-lg bg-white checked:bg-brown-100 checked:border-brown-100 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                type='checkbox'
                value='Technology'
                onChange={(e) => {
                  setStream([...stream, e.target.value]);
                }}
              />
              <label
                className='form-check-label inline-block text-gray-800 '
                htmlFor='flexCheckDefault'
              >
                Technology
              </label>
            </div>
            <div className='form-check mt-5'>
              <input
                className='form-check-input appearance-none h-7 w-7 border border-gray-300 rounded-lg bg-white checked:bg-brown-100 checked:border-brown-100 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                type='checkbox'
                value='Biology'
                onChange={(e) => {
                  setStream([...stream, e.target.value]);
                }}
              />
              <label
                className='form-check-label inline-block text-gray-800 '
                htmlFor='flexCheckDefault'
              >
                Biology
              </label>
            </div>
          </div>

          <label
            htmlFor='description'
            className='block text-sm font-medium text-gray-700 mt-4'
          >
            Degree Description :
          </label>

          <textarea
            className='
        form-control
        mt-1
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-brown-100 focus:border-2 focus:outline-none
      '
            rows='3'
            placeholder='Description'
            name='description'
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>

          <div className='flex item-center justify-center'>
            {!isPending && (
              <button
                type='submit'
                className=' mt-6   rounded-md border border-transparent bg-brown-100 py-2 px-7 text-sm font-medium text-white shadow-sm hover:bg-brown-200 focus:outline-none focus:ring-2 focus:ring-brown-200 focus:ring-offset-2'
              >
                SUBMIT
              </button>
            )}
            {isPending && (
              <button
                type='submit'
                className=' mt-6   rounded-md border border-transparent bg-brown-100 py-2 px-7 text-sm font-medium text-white shadow-sm hover:bg-brown-200 focus:outline-none focus:ring-2 focus:ring-brown-200 focus:ring-offset-2'
                disabled
              >
                Loading...
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default DegreeForm;
