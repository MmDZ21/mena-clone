import React from 'react'
import { contactUsBanner } from '@/content/home'

export default function ContactUsBanner() {
  return (
    <div className='bg-brand-500 flex flex-col md:flex-row justify-between items-center px-4 md:px-24 py-12 gap-4'>
        <div className='text-white flex-1 text-xl max-w-2xl'>
           {contactUsBanner.text}
        </div>
        <div className='flex gap-4 justify-start w-full md:w-auto'>
            <a className='btn btn-outline' href={contactUsBanner.primary.href}>{contactUsBanner.primary.label}</a>
            <a className='btn btn-primary' href={contactUsBanner.secondary.href}>{contactUsBanner.secondary.label}</a>
        </div>
    </div>
  )
}
