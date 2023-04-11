import React from 'react';
import SocialMedia from "../../assets/Icons/Group 9969.png";
const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <div className='bg-gray-800'>
            <div className='p-8 md:w-[80%] md:mx-auto px-5 text-white mt-24'>
                {/* Logos and Links */}
                <div className='grid grid-cols-2 md:grid-cols-5 gap-5'>
                    <div>
                        <div className='pt-5'>
                            <h3 className='font-bold text-3xl'>Job Hunter</h3>
                            <p className=' text-slate-400'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        </div>
                        <div className='py-4'>
                            <img src={SocialMedia} alt="" />
                        </div>
                    </div>
                    <div>
                        <ul className='pt-5'>
                            <li className='font-bold'>Company</li>
                            <li className=' text-slate-400'>About Us</li>
                            <li className=' text-slate-400'>Work</li>
                            <li className=' text-slate-400'>Latest News</li>
                            <li className=' text-slate-400'>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='pt-5'>
                            <li className='font-bold'>Product</li>
                            <li className=' text-slate-400'>Prototype</li>
                            <li className=' text-slate-400'>Plan & Pricing</li>
                            <li className=' text-slate-400'>Customers</li>
                            <li className=' text-slate-400'>Integrations</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='pt-5'>
                            <li className='font-bold'>Support</li>
                            <li className=' text-slate-400'>Help Desk</li>
                            <li className=' text-slate-400'>Sales</li>
                            <li className=' text-slate-400'>Become a Partner</li>
                            <li className=' text-slate-400'>Developers</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='pt-5'>
                            <li className='font-bold'>Contact</li>
                            <li className=' text-slate-400'>524 Broadway , NYC</li>
                            <li className=' text-slate-400'>+1 777 - 978 - 5570</li>
                        </ul>
                    </div>
                </div>
                {/* Footer Last Part */}
                <hr />
                <div className='flex justify-between py-8'>
                    <div className=' text-slate-400'>
                        &copy;{year} CareerHub. All Rights Reserved
                    </div>
                    <div className=' text-slate-400'>
                        Powered by Eagl3Eyes
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
