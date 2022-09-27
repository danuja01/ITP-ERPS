const DegreeCard = () => {
  return (
    <div class='p-6 m-2 bg-white rounded-lg border border-gray-200 shadow-md'>
      <h3 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 max-w'>
        BSc (Hons) in Information Technology
      </h3>
      <p class=' font-normal text-gray-400'>Minimum Z-score - 3.7</p>
      <p class='mb-3 font-normal text-gray-400'>
        Msubject streams - Science, Commerce
      </p>
      <div className='flex items-end justify-end'>
        <a
          href='/'
          class=' w-28 py-2.5 px-3 text-sm font-medium text-center text-white bg-brown-100 rounded-lg hover:bg-brown-200 focus:ring-4 focus:outline-none focus:ring-blue-300 '
        >
          View More
        </a>
      </div>
    </div>
  );
};

export default DegreeCard;
