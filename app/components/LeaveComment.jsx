"use client"
import {React,useState} from 'react'
import { useForm } from 'react-hook-form';
import Toast from './Toast';

const LeaveComment = () => {


    const [toast, setToast] = useState({ show: false, message: '', type: '' });

    const showToast = (type, message) => {
        setToast({ show: true, message, type });
    
        setTimeout(() => {
          setToast({ show: false, message: '', type: '' });
        }, 3000);
      };

      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = async (data) => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
          const result = await response.json();
          console.log('Form submitted successfully:', result);
          showToast("success","Comment posted successfully!");
        } catch (error) {
          console.error('Error submitting form:', error);
          showToast("error",error);
        }
      };
    

    return (
        <div><h2 className="text-2xl font-bold text-gray-800 mb-4">Leave a Comment</h2>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            {...register('title', {
                                required: 'Name is required',
                                minLength: { value: 3, message: 'Name must be at least 3 characters' },
                              })}
                        />
                        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="comment">
                            Comment
                        </label>
                        <textarea
                            id="body"
                            name="body"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            rows="4"
                            {...register('body', {
                                required: 'Comment is required',
                              })}
                        ></textarea>
                        {errors.body && <p className="text-red-500 text-sm">{errors.body.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Submit Comment
                    </button>
                </form>
                {toast.show && <Toast message={toast.message} type={toast.type} onClose={() => setToast({ show: false })} />}
            </div>
        </div>
    )
}

export default LeaveComment