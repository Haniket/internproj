import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
const FileInput = ({ handleInputState }) => {
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');
  const [upload, setUpload] = useState(false);
  const uploadImage = () => {
    setUpload(true);
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'intern231');
    data.append('cloud_name', 'dwitxlwve');
    fetch('  https://api.cloudinary.com/v1_1/dwitxlwve/image/upload', {
      method: 'post',
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
        setUrl(data.url);
      })
      .then(async () => {
        const urlback = 'http://localhost:8000/api/image';
        const { data: res } = await axios.post(urlback, { img: url });
        console.log(res);
        // setUpload(false);
        alert("success");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="m-5">
        <h3 className="flex flex-col items-center  text-4xl font-bold text-purple-600 capitalize mr-32">
        Please upload Image here
        </h3>
      </div>
      <div class="flex justify-center items-center w-full">
        <label
          for="dropzone-file"
          class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              class="mb-3 w-10 h-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          ></input>
          <button
            className="inline-block float-right justify-end text-end bg-green-600 rounded-full py-3 px-5 my-4"
            onClick={uploadImage}
          >
            Upload
          </button>
        </label>
        <button className="inline-block float-right justify-end text-end bg-black text-white rounded-full py-3 px-5 my-4">
          <Link to="/dashboard">Back</Link>
        </button>
      </div>
    </>
  );
};
export default FileInput;
