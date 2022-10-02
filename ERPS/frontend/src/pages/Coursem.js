import { useEffect, useState } from 'react';
import CoursemCard from '../components/CoursemCard';
import CourseNavbar from '../components/CourseNavbar';

const Coursem = () => {
  const [cmaterials, setCmaterials] = useState(null);
  useEffect(() => {
    const fetchCmaterials = async () => {
      const response = await fetch('/api/cmaterials');
      const json = await response.json();

      if (response.ok) {
        setCmaterials(json);
      }
    };

    fetchCmaterials();
  }, []);

  return (
    <section className=''>
      <div className='mx-32 my-12'>
        {cmaterials && cmaterials.map((cm) => <CoursemCard cmaterial={cm} />)}
      </div>
    </section>
  );
};

export default Coursem;
