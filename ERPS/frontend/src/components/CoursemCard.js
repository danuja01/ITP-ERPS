const CoursemCard = () => {
    return (
      <div class='p-6 m-2 bg-white rounded-lg border border-gray-200 shadow-md'>
        <h3 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 max-w'>
        MOBILE APPLICATION DEVELOPMENT - LEC 1
        </h3>
        <p class=' font-normal text-black-400'>Duration : 1 Hr</p>
        <p class='mb-3 font-normal text-black-400'>
          Lecturer : Mrs. Thilmi Anuththara
        </p>
        <div className='flex items-end justify'>
          <a
            href='/'
            class=' w-28 py-2.5 px-3 text-sm font-medium text-center text-white bg-brown-100 rounded-lg hover:bg-brown-200 focus:ring-4 focus:outline-none focus:ring-blue-300 '
          >
            WATCH
          </a>
        </div>
      </div>
    );
  };
  
  export default CoursemCard;
  