import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { useNavigate ,Link} from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let user = localStorage.getItem('user');
    let user1 = Cookies.get('user');
    if(user){
      user = JSON.parse(user)
      if(user1){
        user1 = JSON.parse(user1)
        if(user1.email === email && user1.password === password){
          toast.success('youre logged in already!');
          navigate('/');}}

      if(user.email === email && user.password === password){
        Cookies.set('user', JSON.stringify(user), { expires: new Date(Date.now() + 1 * 60 * 60 * 1000)  });//
        navigate('/');
      } else {
        toast.error('Invalid email or password');
      }
    }else{
      toast.error('No user found. Please sign up first.');
      navigate('/signup');
    }
    
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold font-inter text-center mb-6">Login To Your Account</h2>
        <p className="text-sm font-cinzel text-gray-600 text-center mb-6">
          Enter your email and password to access your account.
        </p>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-inter font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D6BFA8]"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block font-inter text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D6BFA8]"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#D6BFA8] text-white py-2 rounded-lg hover:bg-[#C5A68D] focus:outline-none focus:ring-2 focus:ring-[#C5A68D] transition duration-200"
        >
          Login
        </button>
        <p className="text-sm font-cinzel text-gray-600 text-center mt-4">
        Don't have an account? <Link to="/signup" className="text-[#D6BFA8]">Sign up</Link>
      </p>
      </form>
      
    </div>
  );
};

export default LoginForm;
