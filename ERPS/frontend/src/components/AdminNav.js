import React, { useState } from 'react';
import { MdOutlineDashboard } from 'react-icons/md';
import { GiGraduateCap } from 'react-icons/gi';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoIosPeople } from 'react-icons/io';
import { MdInventory } from 'react-icons/md';
import { IoFastFood } from 'react-icons/io5';
import { MdOutlinePayment } from 'react-icons/md';

import { Link } from 'react-router-dom';

const AdminNav = () => {
  const menus = [
    { name: 'Dashboard', link: '/admin/dashboard', icon: MdOutlineDashboard },
    { name: 'Degrees', link: '/admin/degrees', icon: GiGraduateCap },
    { name: 'Students', link: '/students', icon: IoIosPeople },
    { name: 'Inventory', link: '/inventory', icon: MdInventory },
    { name: 'Food Items', link: '/foods', icon: IoFastFood },
    { name: 'Payments', link: '/payments', icon: MdOutlinePayment },
  ];
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`bg-[#4F310E] min-h-screen ${
        open ? 'w-72' : 'w-16'
      } duration-500 text-gray-100 px-4`}
    >
      <div className='py-3 flex justify-end'>
        <HiMenuAlt3
          size={26}
          className='cursor-pointer'
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className='mt-4 flex flex-col gap-4 relative'>
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            className={` ${
              menu?.margin && 'mt-5'
            } group flex items-center text-sm pr-7 gap-.5 font-medium p-2 hover:bg-brown-200 rounded-md`}
          >
            <div>{React.createElement(menu?.icon, { size: '20' })}</div>
            <h2
              className={`whitespace-pre duration-300 pl-4 ${
                !open && 'opacity-0 translate-x-10 overflow-hidden'
              }`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${
                open && 'hidden'
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:w-fit  `}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminNav;
