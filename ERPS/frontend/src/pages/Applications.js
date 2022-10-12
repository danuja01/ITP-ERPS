import { useState } from 'react';

import AdminHeader from '../components/AdminHeader';
import AdminName from '../components/AdminName';
import AdminNav from '../components/AdminNav';
import Table from '../components/Table';

const Applications = () => {
  return (
    <section className='flex gap-6'>
      <AdminNav />
      <div className='w-full mr-12'>
        <AdminName />
        <AdminHeader title='Applications' />

        {/* TABLE */}
        <Table />
      </div>
    </section>
  );
};

export default Applications;
