import { useState } from 'react'
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
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Yoga() {
 
  let [whatsapp_number, setnumber] = useState("");
let [data, setdata] = useState({});
let [name, setname] = useState("");
const navigate = useNavigate();

const handleWhatsappSubmit = async () => {
  try {
    const response = await axios.post("/api/signup", {
      whatsapp_number,
      name,
    });

    console.log("Response:", response.data);

    // ✅ Save full response if needed
    setdata(response.data);

    // ✅ Navigate using DIRECT response, not state
    const userId = response.data?.result?._id;

    alert("Signup successful!");

    if (userId) {
      navigate(`/profile/${userId}`);
    } else {
      console.error("User ID not found in response");
    }

  } catch (error) {
    console.error("Error:", error);

    const msg =
      error?.response?.data?.message ||
      error?.message ||
      "Something went wrong!";

    alert(msg); // ✅ fixed (you had alert.error)
  }
};

  return (
    <div className="flex justify-center w-full bg-white">
      {/* Center wrapper */}
      <div className="max-w-md w-full mx-auto text-center p-6">

        {/* Image */}
        <div>
          <img src={logo} alt="hero" className="mx-auto w-full object-cover rounded-md" />
        </div>

        {/* Form Section */}
      <div className="flex flex-col gap-3 mt-4">
  {/* ✅ NAME FIELD */}
  <div className="flex flex-col gap-1">
    <input
      type="text"
      value={name}
      onChange={(e) => setname(e.target.value)}
      placeholder="Enter Your Name"
      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 
        ${
          name.length === 0 || name.length >= 2
            ? "border-gray-300 focus:ring-black"
            : "border-red-500 focus:ring-red-500"
        } 
        placeholder-gray-600 placeholder:text-lg`}
    />

    {/* ✅ Name Validation Message */}
    {name.length > 0 && name.length < 2 && (
      <p className="text-sm text-red-500">Name must be at least 2 characters</p>
    )}
  </div>

  {/* ✅ WHATSAPP NUMBER FIELD */}
  <div className="flex flex-col gap-1 w-full">
    <div className="flex gap-2 w-full">
      <PhoneNumberInput />

      <input
        type="tel"
        inputMode="numeric"
        pattern="[0-9]*"
        maxLength={10}
        value={whatsapp_number}
        onChange={(e) => {
          const onlyNumbers = e.target.value.replace(/\D/g, "");
          if (onlyNumbers.length <= 10) {
            setnumber(onlyNumbers);
          }
        }}
        placeholder="WhatsApp Number (10 digits)"
        className={`flex-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 
          ${
            whatsapp_number.length === 10 || whatsapp_number.length === 0
              ? "border-gray-300 focus:ring-black"
              : "border-red-500 focus:ring-red-500"
          } 
          placeholder-gray-500`}
      />
    </div>

    {/* ✅ WhatsApp Validation Message */}
    {whatsapp_number.length > 0 && whatsapp_number.length < 10 && (
      <p className="text-sm text-red-500">
        WhatsApp number must be exactly 10 digits
      </p>
    )}
  </div>

  {/* ✅ SUBMIT BUTTON WITH FULL FORM VALIDATION */}
  <button
    disabled={!(name.length >= 2 && whatsapp_number.length === 10)}
    className={`w-full text-white font-bold py-3 rounded-3xl mt-2 text-[20px] transition
      ${
        name.length >= 2 && whatsapp_number.length === 10
          ? "bg-[linear-gradient(to_right,_rgb(158,76,0),_rgb(206,92,0))]"
          : "bg-gray-400 cursor-not-allowed"
      }`}
    onClick={handleWhatsappSubmit}
  >
    Click to Join Free Challenge →
  </button>

  <p className="text-teal-600 font-medium mt-2 mb-2 flex justify-center items-center">
    <span className="font-bold text-[18px]">1,26,82,266+</span>&nbsp;already attended
  </p>
</div>


        {/* Burn/BeCalm/Flexible section */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          {[{ img: logo2, t1: "Burn", t2: "Fat" }, { img: logo3, t1: "Be", t2: "Calm" }, { img: logo4, t1: "Become", t2: "Flexible" }].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={item.img} alt="icon" className="w-12 h-12" />
              <p className="text-[15px] font-medium">{item.t1}</p>
              <p className="text-[15px] font-medium">{item.t2}</p>
            </div>
          ))}
        </div>

        {/* Schedule */}
        <div className="mt-6">
          <img src={logo5} alt="schedule" className="mx-auto w-full object-contain" />
        </div>

        {/* Trusted Section */}
        <div className="mt-10">
          <h2 className="text-orange-500 font-bold text-[18px]">Welcome To Habuild</h2>
          <h3 className="text-3xl md:text-4xl font-bold leading-tight mt-2">Trusted by Members<br />Country-wide</h3>
          <p className="text-lg text-gray-500 mt-3">We blend the best of old-school knowledge with modern tricks to help you form long-lasting healthy habits.</p>
          <img src={logo6} alt="trusted" className="mt-4 mx-auto w-40 h-auto" />
        </div>

        {/* Community Members */}
        <div className="mt-10">
          <div className="bg-[#FCEFD7] py-3 font-bold text-gray-600 rounded">Community Members</div>

          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="bg-[#D6F1ED] p-4 rounded">
              <p className="text-3xl font-bold">12+</p>
              <p className="font-bold">Years of Experience</p>
            </div>
            <div className="bg-[#eaf5f3] p-4 rounded">
              <p className="text-3xl font-bold">4.9/5</p>
              <p className="font-bold">Google Rating</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-14">
          <p className="text-orange-500 font-bold">Benefits</p>
          <p className="text-2xl font-bold mb-6">Reason to Join Us</p>

          {/* Three Benefit Boxes */}
          <div className="space-y-4">
            <div className="bg-[#FFF9F1] p-4 rounded-md">
              <div className="flex flex-col items-center mb-2">
                <img src={logo3} alt="icon" className="w-12 h-12" />
                <p className="text-[17px] font-semibold">Be Calm</p>
              </div>
              <ul className="space-y-2 text-left">
                <li className="flex items-start gap-2"><span className="text-orange-600 font-semibold">✓</span><span>Reduce Stress</span></li>
                <li className="flex items-start gap-2"><span className="text-orange-600 font-semibold">✓</span><span>Improve sleep quality</span></li>
                <li className="flex items-start gap-2"><span className="text-orange-600 font-semibold">✓</span><span>Learn breathing techniques</span></li>
              </ul>
            </div>

            <div className="bg-[#F3FAFA] p-4 rounded-md">
              <div className="flex flex-col items-center mb-2">
                <img src={logo4} alt="icon" className="w-12 h-12" />
                <p className="text-[17px] font-semibold">Become Flexible</p>
              </div>
              <ul className="space-y-2 text-left">
                <li className="flex items-start gap-2"><span className="text-blue-600 font-semibold">✓</span><span>Increase flexibility</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-semibold">✓</span><span>Heal stiffness</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-semibold">✓</span><span>Reduce joint pains</span></li>
              </ul>
            </div>

            <div className="bg-[#F0FAFF] p-4 rounded-md">
              <div className="flex flex-col items-center mb-2">
                <img src={logo2} alt="icon" className="w-12 h-12" />
                <p className="text-[17px] font-semibold">Burn Fat</p>
              </div>
              <ul className="space-y-2 text-left">
                <li className="flex items-start gap-2"><span className="text-blue-800 font-semibold">✓</span><span>Burn extra calories</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-800 font-semibold">✓</span><span>Maintain weight</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-800 font-semibold">✓</span><span>Build strength</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trainer */}
        <h1 className="text-3xl font-bold mt-10">Meet Your Trainer</h1>
        <p className="text-gray-500 text-lg font-semibold mt-2">Yoga Everyday with</p>
        <p className="text-blue-950 text-xl font-bold">Saurabh Bothra</p>

        <img src={logo7} alt="trainer" className="mt-5 mx-auto w-full rounded-md" />
        <p className="font-semibold mt-4">12+ yrs of Yoga teaching</p>
        <p className="text-gray-600 text-[16px] leading-loose mt-2">Practical, impactful daily exercises and asanas create a thoughtful program for a healthy body and mind.</p>

        {/* Testimonials */}
        <p className="text-orange-600 text-[18px] font-semibold mt-10">Testimonials</p>
        <p className="text-2xl font-bold mt-1">Our User Stories</p>
        <div className="mt-4">
          <TestimonialSlider />
        </div>

        {/* CTA */}
        <div className="bg-[#082F49] w-full py-8 mt-8 rounded-md text-left px-6">
          <p className="font-semibold text-gray-200 text-[14px]">YOGA EVERYDAY</p>
          <p className="text-white text-2xl font-bold mt-2">One Step Closer to a</p>
          <p className="text-white text-2xl font-bold">Healthier You</p>

          <button className="bg-[#0FA2E9] w-full py-3 text-white font-bold rounded-3xl mt-6 text-[18px]">
            Click to Join Free Challenge →
          </button>
          <p className="text-[#50B1AC] font-semibold mt-4 text-center"><b>1,26,91,901+</b> already attended</p>
        </div>

        {/* Media Coverage */}
        <p className="text-2xl font-extrabold text-center mt-8">Media Coverage in 50+ Newspaper</p>
        <div className="mt-4">
          <img src={logo8} alt="media" className="mx-auto w-full object-contain" />
        </div>

        <div className="mt-6">
          <ImageSlider />
        </div>

        {/* World Record */}
        <div className="mt-8 bg-[#FEF8EE] p-6 rounded-md">
          <p className="text-orange-600 text-[16px] text-center font-semibold">World Record Created on 21st June, 2024</p>
          <p className="text-black text-2xl text-center font-bold mt-2">Biggest Online Yoga Session</p>
          <div className="mt-4 flex justify-center">
            <img src={logo9} alt="wr" className="w-36 h-auto" />
          </div>
          <p className="text-center text-[16px] font-semibold mt-3"><b>5,99,162</b> People attended Live Together</p>
        </div>

        {/* Included section */}
        <div className="mt-8">
          <p className="text-orange-600 text-[18px] text-center font-semibold">What INCLUDED?</p>
          <p className="text-black text-center font-bold text-2xl mt-2">Unlock Your Exclusive Benefits</p>

          <div className="space-y-4 mt-6 text-left">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-md">
                <img src={logo10} alt="secure" className="w-10 h-10" />
              </div>
              <div>
                <p className="font-bold text-[18px]">Accountability Support</p>
                <p className="text-gray-600 text-[15px]">Stay on track with regular check-ins and guidance to ensure you meet your wellness goals.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-md">
                <img src={logo11} alt="clock" className="w-10 h-10" />
              </div>
              <div>
                <p className="font-bold text-[18px]">Flexible Timings</p>
                <p className="text-gray-600 text-[15px]">Choose from various time slots to fit yoga seamlessly into your schedule.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-md">
                <img src={logo12} alt="phone" className="w-10 h-10" />
              </div>
              <div>
                <p className="font-bold text-[18px]">Easy Accessibility</p>
                <p className="text-gray-600 text-[15px]">Join sessions anytime, anywhere, with simple access across devices.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-md">
                <img src={logo13} alt="track" className="w-10 h-10" />
              </div>
              <div>
                <p className="font-bold text-[18px]">Habit Tracking Reminders</p>
                <p className="text-gray-600 text-[15px]">Receive gentle nudges to build and maintain your healthy habits effortlessly.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-sm text-gray-600">
          <div className="border-t pt-6">
            <div className="flex flex-col gap-2">
              <div className="font-semibold">Habit Yoga</div>
              <div>© {new Date().getFullYear()} Habit Yoga</div>
              <div className="flex gap-4 justify-center mt-3">
                <a href="#" className="hover:text-teal-600">Privacy Policy</a>
                <a href="#" className="hover:text-teal-600">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  )
}

export default Yoga
