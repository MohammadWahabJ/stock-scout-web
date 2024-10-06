"use client"
import { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example validation
    if (!formData.name) {
      setErrors({ ...errors, name: 'Name is required' });
    } else if (!formData.email) {
      setErrors({ ...errors, email: 'Email is required' });
    } else if (!formData.password) {
      setErrors({ ...errors, password: 'Password is required' });
    } else if (formData.password !== formData.confirmPassword) {
      setErrors({ ...errors, confirmPassword: 'Passwords must match' });
    } else if (!formData.terms) {
      setErrors({ ...errors, terms: 'You must agree to the terms' });
    } else {
      // Form is valid
      console.log('Form submitted:', formData);
      // Perform your registration logic here
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg text-gray-900">
        <h2 className="text-2xl font-semibold text-center mb-6">Create a new account</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="input input-bordered w-full"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="input input-bordered w-full"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="********"
              className="input input-bordered w-full"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password Input */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="********"
              className="input input-bordered w-full"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>

          {/* Terms & Conditions */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              className="checkbox checkbox-primary"
              id="terms"
              checked={formData.terms}
              onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
            />
            <label htmlFor="terms" className="ml-2 text-sm">
              I agree to the{' '}
              <a href="#" className="text-blue-500 hover:underline">
                Terms & Conditions
              </a>
            </label>
            {errors.terms && <p className="text-red-500 text-xs mt-1">{errors.terms}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full mt-6">
            Register
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/auth/login" className="text-blue-500 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
