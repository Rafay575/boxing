import React, { useState, useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { CloudUploadIcon } from '@heroicons/react/outline';

const AccountInfo = ({ onNext, onPrevious ,submitAccountInfo}) => {
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);

  // Handle files dropped or selected
  const handleFiles = useCallback((files) => {
    console.log("Files selected:", files);
    if (files.length === 1) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        if (file.size <= 20 * 1024 * 1024) { // 20 MB limit
          setImageFile(file);
          setPreview(URL.createObjectURL(file));
          setError(null);
        } else {
          setError('File size exceeds 20 MB limit');
          setImageFile(null);
          setPreview(null);
        }
      } else {
        setError('Only image files are allowed');
        setImageFile(null);
        setPreview(null);
      }
    } else {
      setError('Only one image can be uploaded');
      setImageFile(null);
      setPreview(null);
    }
  }, []);

  // Initialize the dropzone
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleFiles,
    accept: 'image/*',
    maxFiles: 1,
  });

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!imageFile) {
      setError('Image is required');
      return;
    }
   
    submitAccountInfo(imageFile)
    onNext();
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 mt-10">
      <form onSubmit={handleSubmit} className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-700">Upload Image</h2>

        {/* Drag and Drop Image Uploader */}
        <div
          {...getRootProps()}
          className={`flex flex-col items-center justify-center w-full h-64 p-4 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
            error ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
          }`}
        >
          <input
            {...getInputProps()}
            type="file"
            accept="image/*"
            className="hidden"
          />
          <CloudUploadIcon className="w-12 h-12 text-gray-500 mb-2" />
          <p className="text-gray-500">Drag & Drop files or Click to Upload</p>
          <p className="text-gray-400">up to 20 MB image size</p>
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}

        {/* Image Preview */}
        {preview && (
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Preview:</p>
            <img src={preview} alt="Preview" className="h-[100px] rounded-md" />
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-6">
          <button
            type="button"
            onClick={onPrevious}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Back
          </button>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountInfo;
