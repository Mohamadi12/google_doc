import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='flex min-h-screen justify-center items-center'>
      Click <Link href="/documents/${documentId}"><span className='text-blue-500 underline'>&nbsp;here&nbsp;</span></Link> to go 
    </div>
  )
}

export default Home