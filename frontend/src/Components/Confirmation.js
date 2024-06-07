import React, { useState } from 'react';
import axios from 'axios';
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/solid';

const Confirmation = ({ onPrevious, formData }) => {
    const { contactNumber, email, message, name, image } = formData;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        setError(false);
        setSuccess(false);

        const formDataToSend = new FormData();
        formDataToSend.append('contactNumber', contactNumber);
        formDataToSend.append('email', email);
        formDataToSend.append('message', message);
        formDataToSend.append('name', name);
        formDataToSend.append('image', image);

        try {
            const response = await axios.post('http://localhost:8000/submit', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setLoading(false);
            if (response.data.success) {
                setSuccess(true);
            } else {
                setError(true);
            }
        } catch (error) {
            setLoading(false);
            setError(true);
        }
    };

    return (
        <div className="flex items-center justify-center  bg-gray-100 mt-10">
            <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md mt-10">
                <h2 className="text-2xl font-bold text-center mb-8 text-gray-700">Confirmation</h2>

                {error && (
                    <div className="flex items-center justify-center p-4 mb-4 text-red-700 bg-red-100 rounded-lg" role="alert">
                        <ExclamationCircleIcon className="w-6 h-6 mr-2" />
                        <span>There was an error submitting the form. Please try again.</span>
                    </div>
                )}

                {success && (
                    <div className="flex items-center justify-center p-4 mb-4 text-green-700 bg-green-100 rounded-lg" role="alert">
                        <CheckCircleIcon className="w-6 h-6 mr-2" />
                        <span>Form submitted successfully!</span>
                    </div>
                )}

                <div className="grid grid-cols-3 gap-4 mb-4">
                    <p className="font-bold col-span-1">Name:</p>
                    <p className="col-span-2">{name}</p>

                    <p className="font-bold col-span-1">Contact Number:</p>
                    <p className="col-span-2">{contactNumber}</p>

                    <p className="font-bold col-span-1">Email:</p>
                    <p className="col-span-2">{email}</p>

                    <p className="font-bold col-span-1">Message:</p>
                    <p className="col-span-2">{message}</p>

                    {image && (
                        <>
                            <p className="font-bold col-span-1">Image Preview:</p>
                            <div className="col-span-2">
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt="Image Preview"
                                    className="w-32 h-32 object-cover rounded-md"
                                />
                            </div>
                        </>
                    )}
                </div>
                <div className="flex items-center justify-between">
                    <button
                        onClick={onPrevious}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Back
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center"
                        disabled={loading}
                    >
                        {loading ? (
                            <svg
                                className="w-5 h-5 mr-2 text-white animate-spin"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM2 12a10 10 0 0010 10v-4a6 6 0 01-6-6H2z"
                                ></path>
                            </svg>
                        ): "Submit"}
                        
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Confirmation;
