// ContactForm.js
import React from 'react';
import { useForm } from 'react-hook-form';

const PersonalInfo = ({onNext,submitPersonalInfo}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
      
        submitPersonalInfo(data)
        onNext()
    };

    return (
        <div className="flex items-center justify-center  bg-gray-100 mt-10">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg p-8 bg- rounded-lg -md">
                <h2 className="text-2xl font-bold text-center mb-8 text-gray-700">Contact Form</h2>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        {...register('name', { required: true })}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs italic">Name is required.</p>}
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register('email', { required: true })}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs italic">Email is required.</p>}
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
                        Contact Number
                    </label>
                    <input
                        type="tel"
                        id="contactNumber"
                        {...register('contactNumber', { required: true })}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.contactNumber ? 'border-red-500' : ''}`}
                    />
                    {errors.contactNumber && <p className="text-red-500 text-xs italic">Contact number is required.</p>}
                </div>
                
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        {...register('message')}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows="4"
                    ></textarea>
                </div>

                <div className="flex items-center justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PersonalInfo;
