import React from 'react'
import loading from './loading.gif';

const Spinner = () =>  {
    return (
      <div className='h-screen flex justify-center items-center'>
        <img src={loading} className='w-20 pb-60' alt='loading'/>
      </div>
    )
}

export default Spinner
