import React from 'react'

function AnnoucementBar() {
  return (
    <div className='w-full h-fit flex gap-2 bg-primary-800 items-center justify-center py-2'>
      <div className='flex items-center justify-center bg-primary-200 px-2 py-1 text-primary-800 text-[12px] rounded-full leading-none'>New</div>
      <span className='text-primary-100 text-sm'>Referral engine now built-in to your waitlist.</span>
    </div>
  )
}

export default AnnoucementBar
