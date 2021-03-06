import houseImg from '../src/assets/travel-house.jpg'
import {ReactComponent as ReactLogo} from '../src/assets/airbnb-brands.svg'
import React from 'react';

function App() {

  const bgImageStyle = {
    backgroundImage: `url(${houseImg})`,
    backgroundSize: 'cover'
  }


  return (
    <div>
      
      {/* PAGE SECTION 1 */}
      <div className="text-white " style={bgImageStyle}>
        {/* GRADIENT BACKGROUND */}
        <div className='bg-gradient-to-r from-black'>
          {/* MAIN CONTAINER */}
          <div className="px-8 py-16 max-w-xl grid grid-cols-1 gap-8">
            <div className='w-12'>
              <ReactLogo className='fill-white '></ReactLogo>
            </div>
            
            <h2 className="text-xl uppercase font-bold">Become a Host</h2>
            <div className="text-5xl font-bold">Host your space, share your world</div>
            <p className="text-lg">
              The art of hosting is rooted in the thoughtful design. 
              Share your unique aesthetic with guests and extra income on a schedule that works for you.
            </p>
            <button className="bg-gradient-to-r from-purple-300 to-red-500 py-3 px-6 text-lg rounded-md w-48">Try hosting</button>
          </div> 
        </div>
        
      </div>

      
      
      {/* PAGE SECTION 2 */}
      <div className=" px-8 py-16">

        {/* CONTAINER for big main text */}
        <div className=" max-w-md mb-16">
          <h2 className="text-5xl">Your next chapter, made possible by Hosting</h2>
        </div>

        {/* CONTAINER for 2 columns */}
        <div className=" grid grid-cols-2 gap-4 text-slate-600">
          {/* COLUMN 1 */}
          <div className="">
            <h3 className="text-2xl font-bold mb-2">Share what you love</h3>
            <p className="text-lg">
              Indulge your love for design when you host Airbnb guests, who are drawn to authentic travel in creativelu curated
            </p>
          </div>
          {/* COLUMN 2 */}
          <div className="">
            <h3 className="text-2xl font-bold mb-2">Host how you want to</h3> 
            <p>
              Airbnb gives your the tools and support to earn extra income, be your own boss and invest in your passions
            </p>
          </div>
          
        </div>
        
        
      </div>
      
      
        
      

    </div>

  );
}

export default App;