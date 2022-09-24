const { FiLogOut } = require('react-icons/fi');

const AdminName = () => {
  return (
    <div className='mt-4 w-full'>
      <div className='m-3 text-2xl text-gray-900 font-semibold grid grid-cols-2  items-center'>
        <h1 className=''>Good morning, Mr. Danuja! 👋</h1>
        <a href='/' className='flex justify-end mr-12'>
          <FiLogOut size={30} className='flex cursor-pointer' />
        </a>
      </div>
    </div>
  );
};

export default AdminName;
