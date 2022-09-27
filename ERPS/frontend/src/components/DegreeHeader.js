const { BsFillPlusSquareFill } = require('react-icons/bs');

const DegreeHeader = () => {
  return (
    <div className='mt-10 mx-12 grid grid-cols-2'>
      <h2 className='text-2xl font-bold text-gray-900 justify-start flex'>
        AVAILABLE DEGREES
      </h2>
      <a href='/add-degree' className='flex justify-end '>
        <BsFillPlusSquareFill
          size={35}
          color='#4F310E'
          className='cursor-pointer'
        />
      </a>
    </div>
  );
};

export default DegreeHeader;
