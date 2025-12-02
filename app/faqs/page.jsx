import Button from '@/components/Button'
import ContactSection from '@/components/ContactForm'
import Faqs from '@/components/FAQS'
import { WEBSITE_CONTACT } from '@/routes/WebsiteRoutes'
import Link from 'next/link'
import React from 'react'

const faqsPage = () => {
    return (
        <div className='pt-25'>
            <Faqs />
            {/* Call to Action Footer */}
            <div className="mt-16 text-center max-w-3xl mx-auto bg-gradient-to-r from-lime-900/20 to-transparent p-8 rounded-3xl border border-green-900/30">
                <h3 className="text-2xl font-bold mb-4">Still have <span className='text-lime-500'>questions?</span></h3>
                <p className="text-gray-400 mb-8">
                    Can't find the answer you're looking for? Chat with me directly.
                </p>
                

                    <Link className='flex justify-center' href={WEBSITE_CONTACT}>
                        <Button type='button' text='Contact me!' />
                    </Link>
               
            </div>
            <ContactSection />
        </div>
    )
}

export default faqsPage