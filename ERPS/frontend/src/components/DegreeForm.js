const DegreeForm = () => {
  return (
    <div className='mx-60'>
      <form action='#' method='POST'>
        <div className='px-4 py-5'>
          <label
            htmlFor='degree'
            className='block text-sm font-medium text-gray-700'
          >
            Degree
          </label>
          <input
            type='text'
            name='degree'
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
            name='degree'
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
          <div class='inline-block relative w-64 mt-1'>
            <select
              name='duration'
              class='block appearance-none w-full h-12 shadow-none bg-gray-50 border border-gray-300 hover:border-brown-100 hover:border-2 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
            >
              <option>2 Years</option>
              <option>3 Years</option>
              <option>4 Years</option>
            </select>
            <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg
                class='fill-current h-4 w-4'
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

          <div class='grid justify-center grid-cols-3'>
            <div class='form-check mt-5'>
              <input
                class='form-check-input appearance-none h-7 w-7 border border-gray-300 rounded-lg bg-white checked:bg-brown-100 checked:border-brown-100 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                type='checkbox'
                value=''
                name='pScience'
              />
              <label
                class='form-check-label inline-block text-gray-800 '
                for='pScience'
              >
                Physical Science
              </label>
            </div>
            <div class='form-check mt-5'>
              <input
                class='form-check-input appearance-none h-7 w-7 border border-gray-300 rounded-lg bg-white checked:bg-brown-100 checked:border-brown-100 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                type='checkbox'
                value=''
              />
              <label
                class='form-check-label inline-block text-gray-800 '
                for='flexCheckDefault'
              >
                Commerce
              </label>
            </div>
            <div class='form-check mt-5'>
              <input
                class='form-check-input appearance-none h-7 w-7 border border-gray-300 rounded-lg bg-white checked:bg-brown-100 checked:border-brown-100 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                type='checkbox'
                value=''
              />
              <label
                class='form-check-label inline-block text-gray-800 '
                for='flexCheckDefault'
              >
                Languages
              </label>
            </div>
            <div class='form-check mt-5'>
              <input
                class='form-check-input appearance-none h-7 w-7 border border-gray-300 rounded-lg bg-white checked:bg-brown-100 checked:border-brown-100 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                type='checkbox'
                value=''
              />
              <label
                class='form-check-label inline-block text-gray-800 '
                for='flexCheckDefault'
              >
                Arts
              </label>
            </div>
            <div class='form-check mt-5'>
              <input
                class='form-check-input appearance-none h-7 w-7 border border-gray-300 rounded-lg bg-white checked:bg-brown-100 checked:border-brown-100 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                type='checkbox'
                value=''
              />
              <label
                class='form-check-label inline-block text-gray-800 '
                for='flexCheckDefault'
              >
                Technology
              </label>
            </div>
            <div class='form-check mt-5'>
              <input
                class='form-check-input appearance-none h-7 w-7 border border-gray-300 rounded-lg bg-white checked:bg-brown-100 checked:border-brown-100 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                type='checkbox'
                value=''
              />
              <label
                class='form-check-label inline-block text-gray-800 '
                for='flexCheckDefault'
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
            class='
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
          ></textarea>

          <div className='flex item-center justify-center'>
            <button
              type='submit'
              className=' mt-6   rounded-md border border-transparent bg-brown-100 py-2 px-7 text-sm font-medium text-white shadow-sm hover:bg-brown-200 focus:outline-none focus:ring-2 focus:ring-brown-200 focus:ring-offset-2'
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DegreeForm;
