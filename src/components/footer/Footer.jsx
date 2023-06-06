import React from 'react'
import {IoLocationOutline,IoSendSharp} from 'react-icons/io5';
import {FiPhone} from 'react-icons/fi';
import {FaFacebookF,FaInstagram,FaTwitter} from 'react-icons/fa';


const Footer = () => {
  return (
          <div className="bg-[#071822] lg:grid flex flex-col lg:items-center  grid-cols-12 bg-b1 py-10 xl:px-[118px] px-5" >

          {/* Logo Section Start */}
           <div className='col-start-1 col-end-3 space-y-10' >
            
             {/* Nav Logos */}
             <div className='flex flex-col space-y-10  text-white' >
              <h4 className='w-max text-white text-lg font-bold font-reg' >Our Companies</h4>
              <div className='space-y-5' >
              <img className='w-32 h-12' src="/logo.svg" alt="logo2" />
              <p className='text-[10px] w-max text-white/60 font-reg' >Shop Austin's #1 Local Discount Appliance Outlet</p>
              </div>
             </div>
            
             {/* Nav Logo 2 */}
             <div className='flex flex-col space-y-2 mt-5 text-white' >
              <img className='w-32 h-12' src="/logo.svg" alt="logo2" />
              <p className='text-[10px] w-max text-white/60 font-reg' >Shop Discount Appliance Repair Parts</p>
             </div>
    
             {/* Nav Logo 3 */}
             <div className='flex flex-col space-y-2 mt-5 text-white' >
              <img className='w-32 h-12' src="/logo.svg" alt="logo3" />
              <p className='text-[10px] w-64 text-white/60 font-reg' >Wholesale Supply Distributor of Bulk Scratch and Dent Appliances to Appliance Vendor's across the Country</p>
             </div>
    
           </div>
          {/* Logo Section End */}
          
           {/* Quick Links Section Start */}
            <div className='col-start-4 lg:mt-0 mt-5' >
            <h4 className='w-max text-white text-lg font-bold font-reg' >Quick Links</h4>
             <div className='flex flex-col text-white/60 text-sm space-y-5 w-max mt-3 hover:[&>a]:underline hover:[&>a]:cursor-pointer' >
              <a>Shop Now</a>
              <a>Shop On Sale</a>
              <a>Live Inventory</a>
              <a>Virtual Showroom</a>
              <a>Financing</a>
              <a>Discount Appliances in Stock</a>
              <a>Austin Appliance Liquidation</a>
              <a>Used Appliances</a>
              <a>Appliance Repair</a>
              <a>Helpful Appliance Tips</a>
             </div>
            </div> 
           {/* Quick Links Section End */}
    
           {/* Quick Links Section 2 Start */}
           <div className='col-start-7 lg:mt-0 flex flex-col text-white/60 text-sm space-y-5 w-max mt-10 hover:[&>a]:underline hover:[&>a]:cursor-pointer' >
              <a>Our Brands</a>
              <a>Delivery</a>
              <a>Appliance Measuring Guide</a>
              <a>Do i have Electric or Gas?</a>
              <a>Our Products</a>
              <a>FAQ</a>
              <a>Contact</a>
              <a>Terms</a>
              <a>Refund</a>
              <a>Privacy Policy</a>
             </div>
           {/* Quick Links Section 2 End */}
    
           {/* Quick Links Section 2 Start */}
           <div className='col-start-10 lg:mt-0 mt-10 flex flex-col text-white text-sm w-max' >
            {/* Email Address */}
            <div>
             <h4 className='font-bold text-lg' >Get Latest Discount Offers</h4>
             <div className='col-start-4 col-end-8 mt-3 flex items-center bg-b2 h-10 px-2 rounded-lg space-x-2 w-full ' ><input type="Email" placeholder='Email Address' className="bg-[#FFFFFF14] bg-opacity-10 w-[300px] h-[40px] rounded-md pl-4 text-xs text-white/90 outline-none" /><IoSendSharp className='text-white' /></div>
            </div>
            {/* Follow Us */}
            <div className='flex flex-col lg:items-start items-center space-y-3 mt-5' >
             <h4 className='font-bold text-lg' >Follow Us</h4>
             <div className='flex space-x-2' >
              <span className='flex items-center justify-center bg-[#FFFFFF14] bg-opacity-10 rounded-full w-10 h-10 rounded-full bg-b2' ><FaFacebookF/></span>
              <span className='flex items-center justify-center bg-[#FFFFFF14] bg-opacity-10 rounded-full w-10 h-10 rounded-full bg-b2' ><FaInstagram/></span>
              <span className='flex items-center justify-center bg-[#FFFFFF14] bg-opacity-10 rounded-full w-10 h-10 rounded-full bg-b2' ><FaTwitter/></span>
             </div>
            </div>
            {/* Contact Us */}
            <div className='flex flex-col mt-10 lg:items-start items-center space-y-3 lg:mt-5' >
             <h4 className='font-bold text-lg' >Contact Us</h4>
             <div className='flex flex-col space-y-5' >
              <div className='flex items-center space-x-2' ><span className='flex items-center justify-center w-9 h-9 rounded-full bg-b2' ><FiPhone/></span><span className='text-sm' >(512) 992-2714</span></div>
              <div className='flex items-center space-x-2' ><span className='flex items-center justify-center w-9 h-9 rounded-full bg-b2' ><IoLocationOutline/></span><span className='text-sm' >123 N Loop Blvd E, Austin, TX 78751</span></div>
              <div class="mapouter"><div class="gmap_canvas"><iframe title="map" className='rounded-xl' width="300" height="150" id="gmap_canvas" src="https://maps.google.com/maps?q=Austin&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br/></div></div>
             </div>
            </div>
    
           </div>
           {/* Quick Links Section 2 End */}
           
    
          </div>
  )
}

export default Footer