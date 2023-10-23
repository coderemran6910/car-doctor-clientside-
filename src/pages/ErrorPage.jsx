import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = ({ errorMessage }) => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded shadow-md max-w-md">
        <h1 className="text-2xl font-bold mb-2">Oops! Something Went Wrong</h1>
        <p className="text-lg mb-2">We're sorry, but there was an error.</p>
        {errorMessage && (
          <p className="text-base mb-2">
            Error Message: <span className="font-bold text-red-700">{errorMessage}</span>
          </p>
        )}

       
      </div>
     <div>
     <Link to={'/'}> <button className='btn  btn-error'>Back to Home</button> </Link>
     </div>
    </div>
  );
};

export default ErrorPage;
