import React from 'react'

const text =`
Benefiting from our global trade expertise, we proficiently handle the supply of food, agricultural products and solid mineral products. Our focus is on ensuring safe transaction procedures and securing long-term contracts at the required quantity and price, guaranteeing optimal quality and value for our clients.
`
export default function ContactUsBanner() {
  return (
    <div className='bg-brand-500 flex flex-col md:flex-row justify-between items-center px-4 md:px-24 py-12 gap-4'>
        <div className='text-white flex-1 text-xl max-w-2xl'>
           {text} 
        </div>
        <div className='flex gap-4 justify-start w-full md:w-auto'>
            <button className='btn btn-outline'>Learn More</button>
            <button className='btn btn-primary'>Contact Us</button>
        </div>
    </div>
  )
}
