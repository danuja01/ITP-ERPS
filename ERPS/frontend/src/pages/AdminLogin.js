import { useState } from 'react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <div>
      <div className='flex-row justify-center '>
        <h1 className=' text-2xl font-bold mt-8 text-center'>ADMIN LOGIN</h1>
        <h2 className='text-sm text-red-600  text-center'>
          authorized personnel only!
        </h2>
      </div>
      <div class='flex flex-col items-center justify-center px-6 mt-20 mx-auto '>
        <div class='w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 '>
          <div class='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 class='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl '>
              Login to an account
            </h1>
            <form class='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
              <div>
                <label
                  for='email'
                  class='block mb-2 text-sm font-medium text-gray-900'
                >
                  e-mail
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                  placeholder='name@mail.com'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
              <div>
                <label
                  for='password'
                  class='block mb-2 text-sm font-medium text-gray-900'
                >
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='••••••••'
                  class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </div>
              {/* <div>
                <label
                  for='confirm-password'
                  class='block mb-2 text-sm font-medium text-gray-900'
                >
                  Confirm password
                </label>
                <input
                  type='confirm-password'
                  name='confirm-password'
                  id='confirm-password'
                  placeholder='••••••••'
                  class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                  required=''
                />
              </div> */}

              <button
                type='submit'
                class='w-full bg-brown-100 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
