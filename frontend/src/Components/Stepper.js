// Stepper.js
import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import AccountInfo from './AccountInfo';
import Confirmation from './Confirmation';

const Stepper = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        contactNumber: '',
        email: '',
        message: '',
        name: '',
     
      });
      const submitPersonalInfo = (personalData) => {
        setFormData(prevData => ({
          ...prevData,
          ...personalData
        }));
        console.log("Updated Form Data with Personal Info:", formData);
      
      };
    
      // Function to submit account info data (image upload)
      const submitAccountInfo = (imageData) => {
        console.log(imageData)
        setFormData(prevData => ({
          ...prevData,
          image: imageData
        }));
             
      };

    const steps = [
        { component: <PersonalInfo onNext={() => setCurrentStep(1)} submitPersonalInfo={submitPersonalInfo} /> },
        { component: <AccountInfo onNext={() => setCurrentStep(2)} onPrevious={() => setCurrentStep(0)} submitAccountInfo={submitAccountInfo} /> },
        { component: <Confirmation onPrevious={() => setCurrentStep(1)} formData={formData}/> },
    ];

    return (
        <div className='flex justify-center items-center mt-20' >
            <div className='w-[50%]'>
                <ol className="flex items-center w-full text-sm font-medium text-center text-[white]  sm:text-base">
                    <li className={`flex md:w-full items-center  ${currentStep == 0 ? 'text-blue-600' : ''} ${currentStep >= 1 ? 'text-[green]' : ''} sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 `}>
                        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 ">
                            {
                                currentStep >= 1 ? (<svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>

                                ) : <span></span>
                            }

                            Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                        </span>
                    </li>
                    <li className={`flex md:w-full items-center font-bold text-[white] ${currentStep == 1 ? 'text-blue-600' : ''} ${currentStep >= 2 ? 'text-[green]' : ''} after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 `}>
                        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                            {
                                currentStep >= 2 ? (<svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>

                                ) : <span></span>
                            }
                            Account <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                        </span>
                    </li>
                    <li className={`flex items-center font-bold text-[white] ${currentStep >= 2 ? 'text-blue-600 ' : ''}`}>
                        <span className="me-2">3</span>
                        Confirmation
                    </li>
                </ol>
                <div>
                    {steps[currentStep].component}
                </div>
            </div>
        </div>
    );
};

export default Stepper;
