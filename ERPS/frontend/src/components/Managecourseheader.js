import { Link } from 'react-router-dom';

const { BsFillPlusSquareFill } = require('react-icons/bs');

const Managecourseheader = () => {
  return (

    <div className='mt-5 mx-12 grid grid-cols-2'>

      <h2 className='text-2xl font-bold text-gray-900 justify-start flex'>
        MANAGE LECTURES
      </h2>
      <Link to='/admin/addcourse' className='flex justify-end '>
        <BsFillPlusSquareFill
          size={35}
          color='#4F310E'
          className='cursor-pointer'
        />
      </Link>
    </div>
  );
};

export default Managecourseheader;
