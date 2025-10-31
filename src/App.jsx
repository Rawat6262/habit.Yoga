import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from '../src/assets/LP-monday-14.webp'
import PhoneNumberInput from './Phone'
import logo2 from '../src/assets/Flame-icon.png'
import logo4 from '../src/assets/Stretch-2.png'
import logo3 from '../src/assets/Flower-icon.png'
import logo5 from '../src/assets/batchTimeUI.png'
import logo6 from '../src/assets/Bothra_lp.webp'
import logo7 from '../src/assets/chapp-landingpage.webp'
import logo8 from '../src/assets/media_covers.webp'
import logo9 from '../src/assets/WRU_logo.webp'
import logo10 from '../src/assets/LP_secure.svg'
import logo11 from '../src/assets/LP_clock.svg'
import logo12 from '../src/assets/LP_phone.svg'
import logo13 from '../src/assets/LP_secure.svg'
import TestimonialSlider from './Slider.jsx/Slider'
import ImageSlider from './Slider.jsx/Slider2'
function App() {

  return (
    <div className='h-auto w-auto   grid justify-center items-center'>
      <div className='h-full w-md  flex-col justify-center items-center  bg-white'>
        {/* image */}
        <div >
          <img src={logo}></img>
        </div>
        {/* ✅ Form Section */}
        <div className="flex flex-col gap-3 ">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-108 px-4 py-3 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-600 placeholder:text-lg m-2"
          />


          {/* Phone Input Row */}
          <div className="flex gap-2">
            <PhoneNumberInput />
            <input
              type="text"
              placeholder="WhatsApp Number"
              className="flex-1 px-4 py-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-500 mr-2"
            />
          </div>

          {/* Button */}
          <button className="w-full bg-[linear-gradient(to_right,_rgb(158,76,0),_rgb(206,92,0))] text-white font-bold py-3 rounded-3xl mt-2 hover:opacity-90 transition text-[20px]">
            Click to Join Free Challenge →
          </button>

          {/* Footer Text */}
          <p className="text-center text-teal-600  font-medium mt-2 mb-2 flex items-center justify-center">
            <p className='font-bold text-[18px]'>1,26,82,266+</p> already attended
          </p>
        </div>
        {/* burn fat */}
        <div className='w-md  h-38 grid justify-center items-center  '>
          <div className='w-80  h-25 flex justify-between'>
            <div className='h-25 w-15  grid  '>
              <div className='w-14 h-15 '>
                <img src={logo2} className='w-15 h-10' />
              </div>
              <div className='w-14 h-10  gird items-center'>
                <p className='text-[16px] font-medium text-center font-sans'>Burn</p>
                <p className='text-[16px] font-medium text-center font-sans'>Fat</p>
              </div>
            </div>
            <div className='h-25 w-15  grid  '>
              <div className='w-14 h-15 '>
                <img src={logo3} className='w-15 h-10' />
              </div>
              <div className='w-14 h-10  gird items-center'>
                <p className='text-[16px] font-medium text-center font-sans'>Be</p>
                <p className='text-[16px] font-medium text-center font-sans'>Calm</p>
              </div>
            </div>
            <div className='h-25 w-15  grid  '>
              <div className='w-14 h-15 '>
                <img src={logo4} className='w-15 h-10' />
              </div>
              <div className='w-14 h-10  gird items-center'>
                <p className='text-[16px] font-medium text-center font-sans'>Become</p>
                <p className='text-[16px] font-medium text-center font-sans'>Flexible </p>
              </div>
            </div>



          </div>
        </div>
        {/* schedule */}
        <div className='h-80 w-md  grid justify-center items-center   mb-4 p-3'>
          <img src={logo5} />
        </div>
        {/* trusted by members */}
        <div className='w-md h-125 mt-2'>
          <h2 className='text-orange-500 items-center flex justify-center font-bold text-[18px] mt-3 '>Welcome To Hubuild</h2>
          <div className='w-md  h-auto '>
            <h3 className='text-4xl font-bold items-center grid justify-center p-1'>
              <p className='w-md items-center flex justify-center'>Trusted by Members</p>
              <p className='w-md items-center flex justify-center'>Country-wide</p></h3>
          </div>
          <p className='text-lg text-gray-500 font-medium mt-3 text-center'>We blend the best of old-school knowledge with modern tricks to help you form long-lasting healthy habits.</p>
          <img className='p-3' src={logo6} />
        </div>
        {/* community Members */}
        <div className='grid w-md h-auto justify-center items-center '>
          <div className='w-103 h-30 mb-3 bg-[#FCEFD7] rounded-[3px] items-center flex justify-center  font-bold text-gray-600'>
            <p>Community Members</p>
          </div>
          <div className='flex w-auto h-35 justify-between '>
            <div className='w-50 h-34 mr-2 bg-[#D6F1ED] grid items-center justify-center'>
              <div className='h-20 w-30 grid items-center justify-center'>
                <p className='w-40 text-3xl font-bold text-center'>12 +</p>
                <p className='w-40 text-md font-bold text-center' >Years of Experience </p>
              </div>
            </div>
            <div className='w-50 h-34 mr-2 bg-[#eaf5f3] grid items-center justify-center'>
              <div className='h-20 w-30 grid items-center justify-center'>
                <p className='w-40 text-3xl font-bold text-center'>4.9/5</p>
                <p className='w-40 text-md font-bold text-center' >Google Rating </p>
              </div>
            </div>

          </div>
        </div>
        {/* Benefits */}
        <div className='h-auto w-md '>
          <p className='text-lg text-orange-500 w-md text-center mt-14 font-bold'>Benefits</p>
          <p className='text-3xl text-black w-md text-center  mb-8 font-bold'>Reason to Join Us</p>
          <div className='w-105 h-auto   m-4  border-amber-200 bg-[#FFF9F1] '>
            <div className="w-28 h-28 rounded-md flex flex-col items-center justify-center space-y-2">
              {/* Logo */}
              <div className="w-16 h-16  border-amber-200 rounded-md ">
                <img src={logo3} alt="Logo" className="w-12 h-12 object-contain" />
              </div>

              {/* Text */}
              <div className="text-center text-blue-950 mt-[-15px] ">
                <p className="text-[17px] font-semibold">Be Clam</p>
              </div>
            </div>

            <div className="bg-[#FFF9F1] p-4 rounded-md">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-semibold text-lg">✓</span>
                  <p className="font-medium text-gray-800">Reduce Stress</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-semibold text-lg">✓</span>
                  <p className="font-medium text-gray-800">Improve sleep quality</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-semibold text-lg">✓</span>
                  <p className="font-medium text-gray-800">Learn Powerful breathing techniques</p>
                </li>
              </ul>
            </div>

          </div>
          <div className='w-105 h-auto   m-4  border-amber-200 bg-[#F3FAFA] '>
            <div className="w-28 h-28 rounded-md flex flex-col items-center justify-center space-y-2">
              {/* Logo */}
              <div className="w-16 h-16  border-amber-200 rounded-md ">
                <img src={logo4} alt="Logo" className="w-12 h-12 object-contain" />
              </div>

              {/* Text */}
              <div className="text-center text-blue-950 mt-[-11px] ">
                <p className="text-[17px] font-semibold">Burn Fat</p>
              </div>
            </div>

            <div className="bg-[#F3FAFA] p-4 rounded-md">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-semibold text-lg">✓</span>
                  <p className="font-medium text-gray-800">Increase the flexibility of muscles</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-semibold text-lg">✓</span>
                  <p className="font-medium text-gray-800">Heal stiffness & tightness in the body</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-semibold text-lg">✓</span>
                  <p className="font-medium text-gray-800">Reduce Joint pains</p>
                </li>
              </ul>
            </div>

          </div>
          <div className='w-105 h-auto   m-4  border-amber-200 bg-[#F0FAFF] '>
            <div className="w-28 h-28 rounded-md flex flex-col items-center justify-center space-y-2">
              {/* Logo */}
              <div className="w-16 h-16  border-amber-200 rounded-md ">
                <img src={logo2} alt="Logo" className="w-12 h-12 object-contain" />
              </div>

              {/* Text */}
              <div className="text-center text-blue-950 mt-[-15px] ">
                <p className="text-[17px] font-semibold">Burn Fat</p>
              </div>
            </div>

            <div className="bg-[#F0FAFF] p-4 rounded-md">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-800 font-semibold text-lg">✓</span>
                  <p className="font-medium text-gray-800">Burn extra calories</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-800 font-semibold text-lg">✓</span>
                  <p className="font-medium text-gray-800">Learn techniques to maintain weight</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-800 font-semibold text-lg">✓</span>
                  <p className="font-medium text-gray-800">Get Stronger</p>
                </li>
              </ul>
            </div>

          </div>

          <h1 className='text-black font-bold text-4xl w-md text-center mt-8 mb-7'>Meet Your Trainer</h1>
          <p className='text-3xl text-gray-500 font-bold ml-2'>Yoga Everyday with</p>
          <p className='text-2xl text-blue-950 font-bold ml-2 '>Saurabh Bothra</p>

          <div className='w-md h-75  mt-5 mb-9'>
            <img src={logo7} />
          </div>
          <p className='w-md  font-semibold m-3 mb-4'><b>12+ yrs </b>of Yoga teaching to people </p>
          <p className='w-md text-gray-600 ml-2 font-semibold text-[16px] leading-loose'>Practical, impactful daily exercises and asanas create a thoughtful program for a healthy body and mind.</p>
        </div>
        <p className='w-md text-center text-orange-600 mt-16 text-[22px] font-semibold'>Testimonals</p>
        <p className='w-md text-center text-black  text-4xl mt-1 font-bold'>Our User Stories</p>
        <TestimonialSlider/>

        <div className='w-md h-auto bg-[#082F49] pb-16'>
          <p className='font-semibold text-[16px] ml-8 text-gray-200 mt-13 mb-4'>YOGA EVERYDAY</p>
          <p className='font-bold text-3xl ml-8 text-white'>One Step Closer to a</p>
          <p className='font-bold text-3xl ml-8 text-white'>Healthier You</p>
          <div className='w-md h-20 grid items-center justify-center mt-10'>

            <button className="w-95 bg-[#0FA2E9] hover:bg-[#0a8aca] text-white font-bold py-3 rounded-3xl  hover:opacity-90 transition text-[20px] ml-10">
            Click to Join Free Challenge →
          </button>
        <p className='text-sm text-[#50B1AC] font-semibold w-md text-center mt-5'><b >1,26,91,901+</b> already attended</p>
          </div>
        </div>
        <p className='text-3xl font-extrabold w-md text-center mt-13'>Media Coverage in 50+</p>
        <p className='text-3xl font-extrabold w-md text-center mt-1 mb-10'>Newspaper</p>
        <div className='w-md h-30 ml-3'>
          <img src={logo8}/>
        </div>
        <div className='w-md h-50    flex justify-center mt-15'>
          <ImageSlider/>
          
        </div>
        <div className='w-md h-80 flex justify-center items-center mt-14 bg-[#FEF8EE] mb-9'> 
          <div className='w-90 h-70'>
    <p className='w-full text-center font-bold text-orange-600 text-[16px] mt-2'>World Record Created on 21st June,2024</p>
    <p className='w-full text-center  font-bold text-black text-3xl mt-2 mb-4'>Biggest Online Yoga Session</p>
          <div className='h-20 w-40  ml-22 mb-8'>
            <img src={logo9}/>
          </div>
          <p className='w-full text-[16px] text-black text-center font-semibold'><b>5,99,162</b> People attended Live Togather</p>
          <p className='w-full text-[16px] text-black text-center font-semibold'>in a day</p>
          </div>
        </div>
        <p className='w-md text-orange-600 text-[18px] text-center font-semibold'>What INCLUDED?</p>
        <p className='w-md text-black text-center font-bold text-4xl'>Unlock Your Exclusive Benifits</p>
        <div className='w-md h-35  flex mt-12 ml-3 '>
          <div className='h-34 w-20 bg-white'>
            <div className='h-12 w-12  bg-[#CEF2FF] items-center flex justify-center rounded-md ml-2'>
              <img src={logo10}/>
            </div>
          </div>
          <div className='h-34 w-90 '>
            <p className='w-full  font-bold text-[18px] mb-4'>Accountability Support</p>
            <p className='w-full  text-gray-600  text-[16px] ml-[-3px] font-semibold '>Stay on track with regular check-ins and guidance to ensure you meet your wellness goals.</p>
          </div>
        </div>
        <div className='w-md h-35  flex mt-6 ml-3 '>
          <div className='h-34 w-20 bg-white'>
            <div className='h-12 w-12  bg-[#FFFFB7] items-center flex justify-center rounded-md ml-2'>
              <img src={logo11}/>
            </div>
          </div>
          <div className='h-34 w-90 '>
            <p className='w-full  font-bold text-[18px] mb-4'>Flexible Timings</p>
            <p className='w-full  text-gray-600  text-[16px] ml-[-3px] font-semibold '>Choose from various time slots to fit yoga seamlessly into your schedule.</p>
          </div>
        </div>
        <div className='w-md h-35  flex mt-6 ml-3 '>
          <div className='h-34 w-20 bg-white'>
            <div className='h-12 w-12  bg-[#CBFFD4] items-center flex justify-center rounded-md ml-2'>
              <img src={logo12}/>
            </div>
          </div>
          <div className='h-34 w-90 '>
            <p className='w-full  font-bold text-[18px] mb-4'>Easy Accessibility</p>
            <p className='w-full  text-gray-600  text-[16px] ml-[-3px] font-semibold '>Join sessions anytime, anywhere, with simple access across devices.</p>
          </div>
        </div>
        <div className='w-md h-35  flex mt-6 ml-3 '>
          <div className='h-34 w-20 bg-white'>
            <div className='h-12 w-12  bg-[#E8CCFF] items-center flex justify-center rounded-md ml-2'>
              <img src={logo13}/>
            </div>
          </div>
          <div className='h-34 w-90 '>
            <p className='w-full  font-bold text-[18px] mb-4'>Habit Tracking Reminders</p>
            <p className='w-full  text-gray-600  text-[16px] ml-[-3px] font-semibold '>Receive gentle nudges to build and maintain your healthy habits effortlessly.</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
