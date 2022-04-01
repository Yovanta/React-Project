import React from 'react'

export const AboutApp = () => {
  return (
    <div className='about'>
        <h1 className='mb-4 pl-10 text-5xl'>About the App</h1>
        <p className='p-10 desc'>In the app, you can add, delete, submit, and edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will perist your data in the browser local storage. SO whether you reload, close your app or recpened it, you still have access to your todos items</p>
    </div>
  )
}

export const AboutAuthor = () => {
  return (
    <div className='about'>
      <h1 className='mb-4 pl-10 text-5xl'>About the Author</h1>
      <p className='p-10 desc'>This app was developed by someone, a self-taught eb developer and technical writer.</p>
    </div>
  )
}
