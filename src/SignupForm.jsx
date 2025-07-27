import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignupForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    let exsistedUser = localStorage.getItem('user');
    if(exsistedUser){
      exsistedUser=JSON.parse(exsistedUser)
      if(exsistedUser.email === form.email){
        toast.error('User already exists with this email');
        navigate('/signin');}
      }else{
      localStorage.setItem('user', JSON.stringify(form));
      toast.success('Account created successfully!');
      navigate('/signin');
      }
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="w-full max-w-md bg-white px-3 py-4 md:p-8 rounded shadow-md">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-4 font-inter text-gray-800">Welcome to Eshoes </h2>
        <p className="text-center text-sm md:text-md font-cinzel text-gray-600 mb-6">
          Sign up to explore the latest and trendiest shoes. It's quick and easy!
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium font-inter text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D6BFA8]"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-inter mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D6BFA8]"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium font-inter text-gray-700 mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D6BFA8]"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-inter font-medium text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D6BFA8]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#D6BFA8] font-inter text-white py-2 px-4 rounded hover:bg-[#e2c7ad] transition duration-200"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 font-cinzel mt-4">
          Already have an account? <a href="/signin" className="text-[#D6BFA8] hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
