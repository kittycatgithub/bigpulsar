// ContactUs.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { 
  FaUser, FaBriefcase, FaBuilding, FaEnvelope, FaPhone, 
  FaSearch, FaCommentAlt, FaMapMarkerAlt, FaPaperPlane, 
  FaFacebook, FaInstagram, FaLinkedin, FaYoutube
} from "react-icons/fa";
import Link from "next/link";
import Swal from 'sweetalert2';

// Define the form data type
type FormData = {
  name: string;
  designation: string;
  orgName: string;
  email: string;
  mobile: string;
  lookingFor: string;
  message: string;
  city: string;
};

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    designation: '',
    orgName: '',
    email: '',
    mobile: '',
    lookingFor: '',
    message: '',
    city: ''
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Show loading state
    if (typeof window !== 'undefined' && Swal) {
      Swal.fire({
        title: 'Submitting...',
        text: 'Please wait while we process your request',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });
    }
  
    try {
      const response = await fetch('http://localhost:8080/public/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Close loading alert
        if (typeof window !== 'undefined' && Swal) {
          Swal.close();
          
          // Clear form data immediately after successful submission
          setFormData({
            name: '',
            designation: '',
            orgName: '',
            email: '',
            mobile: '',
            lookingFor: '',
            message: '',
            city: ''
          });
          
          // Show success alert
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your form has been successfully submitted.',
            confirmButtonColor: '#00CED1',
            confirmButtonText: 'OK',
            timer: 5000,
            timerProgressBar: true,
          });
        }
      } else {
        // Close loading alert
        if (typeof window !== 'undefined' && Swal) {
          Swal.close();
          
          // Show error alert
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: data.message || 'An error occurred while submitting your form.',
            confirmButtonColor: '#00CED1',
            confirmButtonText: 'Try Again',
          });
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Close loading alert
      if (typeof window !== 'undefined' && Swal) {
        Swal.close();
        
        // Show error alert
        Swal.fire({
          icon: 'error',
          title: 'Network Error!',
          text: 'An error occurred while submitting your form. Please check your connection and try again.',
          confirmButtonColor: '#00CED1',
          confirmButtonText: 'Try Again',
        });
      }
    }
  };
  
  return (
    <main className="min-h-screen bg-[#F5F7FA] text-[#2C3E50] flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-gradient-to-r from-[#00CED1] to-[#008080]">
          <div className="md:flex">
            {/* Contact Information */}
            <div className="md:w-1/3 bg-gradient-to-br from-[#092A51] to-[#00CED1] p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="mb-8">
                Fill out the form and our team will get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p>+91 9766313023</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p>info@aethermind.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Office</h3>
                    <p>123 Business Avenue, Suite 100, City, Country</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" aria-label="Facebook" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors duration-300">
                    <FaFacebook className="text-xl" />
                  </a>
                  <a href="#" aria-label="Instagram" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors duration-300">
                    <FaInstagram className="text-xl" />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors duration-300">
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a href="#" aria-label="YouTube" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors duration-300">
                    <FaYoutube className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:w-2/3 p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-[#2C3E50] mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="text-[#00CED1]" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your Name"
                        className="w-full pl-10 pr-3 py-3 border-2 border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="designation" className="block text-sm font-medium text-[#2C3E50] mb-1">
                      Designation <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaBriefcase className="text-[#00CED1]" />
                      </div>
                      <input
                        type="text"
                        id="designation"
                        name="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        required
                        placeholder="Designation"
                        className="w-full pl-10 pr-3 py-3 border-2 border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <label htmlFor="orgName" className="block text-sm font-medium text-[#2C3E50] mb-1">
                      Organization Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaBuilding className="text-[#00CED1]" />
                      </div>
                      <input
                        type="text"
                        id="orgName"
                        name="orgName"
                        value={formData.orgName}
                        onChange={handleInputChange}
                        required
                        placeholder="Organization Name"
                        className="w-full pl-10 pr-3 py-3 border-2 border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-[#2C3E50] mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="text-[#00CED1]" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Email Address"
                        className="w-full pl-10 pr-3 py-3 border-2 border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <label htmlFor="mobile" className="block text-sm font-medium text-[#2C3E50] mb-1">
                      Mobile No <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaPhone className="text-[#00CED1]" />
                      </div>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                        placeholder="Mobile Number"
                        className="w-full pl-10 pr-3 py-3 border-2 border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="city" className="block text-sm font-medium text-[#2C3E50] mb-1">
                      Your City <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaMapMarkerAlt className="text-[#00CED1]" />
                      </div>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        placeholder="Your City"
                        className="w-full pl-10 pr-3 py-3 border-2 border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <label htmlFor="lookingFor" className="block text-sm font-medium text-[#2C3E50] mb-1">
                    Looking For <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaSearch className="text-[#00CED1]" />
                    </div>
                    <input
                      type="text"
                      id="lookingFor"
                      name="lookingFor"
                      value={formData.lookingFor}
                      onChange={handleInputChange}
                      required
                      placeholder="What are you looking for?"
                      className="w-full pl-10 pr-3 py-3 border-2 border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-[#2C3E50] mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                      <FaCommentAlt className="text-[#00CED1] mt-1" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      placeholder="Your Message"
                      className="w-full pl-10 pr-3 py-3 border-2 border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                    ></textarea>
                  </div>
                </div>
                
                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#4DA6FF] to-[#00CED1] hover:from-[#00CED1] hover:to-[#008080] text-white font-medium py-3 px-4 rounded-lg transition duration-300 transform hover:scale-[1.02] flex items-center justify-center shadow-md"
                  >
                    <span>Submit</span>
                    <FaPaperPlane className="ml-2 text-sm" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}