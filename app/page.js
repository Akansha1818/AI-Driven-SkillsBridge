import React from 'react'
import Admin from './auth/login/page'

const page = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 text-center">
        <Admin />
      </div>
    </main>
  )
}

export default page