import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
               SignUp 
               <span className='text-indigo-900'> ChatApp</span>
            </h1>
            <form action="">
                <div>
                    <label>
                        <span className='text-base label-text text-gray-900'>Full Name</span>
                    </label>
                    <input 
                        type='text' 
                        placeholder='JAY PATEL' 
                        className='w-full input input-bordered h-10' 
                    />
                </div>
                <div>
                    <label>
                        <span className='text-base label-text text-gray-900'>Username</span>
                    </label>
                    <input 
                        type='text' 
                        placeholder='jaypatel' 
                        className='w-full input input-bordered h-10' 
                    />
                </div>
                <div>
                    <label>
                        <span className='text-base label-text text-gray-900'>Password</span>
                    </label>
                    <input 
                        type='password' 
                        placeholder='Enter password' 
                        className='w-full input input-bordered h-10' 
                    />
                </div>
                <div>
                    <label>
                        <span className='text-base label-text text-gray-900'>Confirm Password</span>
                    </label>
                    <input 
                        type='password' 
                        placeholder='Confirm password' 
                        className='w-full input input-bordered h-10' 
                    />
                </div>
                <GenderCheckBox />
                <a href="#" className='text-sm text-gray-900 hover:text-blue-600 mt-2 inline-block'>
                    Already have an account?
                </a>
                <div>
                <button className="btn btn-block btn-sm mt-2">Sign Up</button>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default SignUp
