import { useRef } from 'react'
import './App.css'
import pic1 from './assets/ChatGPT_Image1_icecream_in_a_forest.png'
import pic2 from './assets/ChatGPT _Image_icecream_in_a_forest_16_9.png'  

function HeadSection(){
  const sref = useRef()

  function searchClick(){
    sref.current.classList.toggle('top-[200%]')
    sref.current.classList.toggle('-top-[200%]')
    sref.current.classList.toggle('opacity-100')
  }

    return (<div className='sm2:w-[70%] h-auto flex justify-between items-center mx-auto px-5 relative sm2:after:w-full after:w-[90%] after:absolute after:h-[0.5px] after:bg-gray-400 after:bottom-[-8px] sm2:after:left-0 after:left-[6%]'>

        <div>
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" className='size-16' xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="oklch(0.707 0.165 254.624)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>

        <div className='text-white'>
            <ul className='list-none flex items-center'>
                <li title='search' className='mr-4 hover:scale-110  duration-200 translate-y-1'><button className='cursor-pointer' onClick={searchClick}>
                  <svg className='size-7' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button></li>
                <li title='home' className='mr-4 hover:scale-110 hover:-translate-y-0.5 duration-200'><a href="">
                <svg className='size-7' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 22L2 22" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M2 11L6.06296 7.74968M22 11L13.8741 4.49931C12.7784 3.62279 11.2216 3.62279 10.1259 4.49931L9.34398 5.12486" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M4 22V9.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M20 9.5V13.5M20 22V17.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393M9 22V17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z" stroke="white" stroke-width="1.5"/>
                </svg>
                </a></li>
                <li title='articles' className='mr-4 hover:scale-110 hover:-translate-y-0.5 duration-200'><a href="">
                <svg 
                className='size-6'
                viewBox="0 0 600 600"
                xmlns="http://www.w3.org/2000/svg">
                <g
                transform="matrix(0.95173205,0,0,0.95115787,13.901174,12.168794)">
                <path
                fill="#ffffff"
                strokeWidth="0.4"
                strokeLinecap="square"
                strokeLinejoin="round"
                paintOrder="stroke fill markers"
                d="m 116.82051,533.90848 c 0,-35.77923 -30.001428,-65.78273 -65.71225,-65.78274 -35.710867,10e-6 -65.714445,30.00351 -65.714445,65.78274 0,35.7791 30.003578,65.78265 65.714445,65.78265 35.710822,0 65.71225,-30.00355 65.71225,-65.78265 z"
                />
                <path
                  fill="#ffffff"
                  strokeWidth="0.4"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                  paintOrder="stroke fill markers"
                  d="m 116.82051,302.6125 c 0,-35.77918 -30.001428,-65.78266 -65.71225,-65.78267 -35.710867,1e-5 -65.714445,30.00349 -65.714445,65.78267 2.6e-5,35.77922 30.003597,65.78043 65.714445,65.78045 35.710806,-2e-5 65.71224,-30.00123 65.71225,-65.78045 z"
                />
                <path
                  fill="#ffffff"
                  strokeWidth="0.4"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                  paintOrder="stroke fill markers"
                  d="m 116.82051,71.313209 c 0,-35.779199 -30.001428,-65.7804582 -65.71225,-65.7804662 -35.710867,8e-6 -65.714445,30.0012672 -65.714445,65.7804662 0,35.779271 30.003578,65.782741 65.714445,65.782751 35.710822,-1e-5 65.71225,-30.00348 65.71225,-65.782751 z"
                />
              <path
                fill="#ffffff"
                strokeWidth="0.4"
                strokeLinecap="round"
                d="m 211.58808,21.527961 a 47.572886,49.785578 0 0 0 -47.57256,49.787552 47.572886,49.785578 0 0 0 47.57256,49.785227 H 568.24859 A 47.572886,49.785578 0 0 0 615.82336,71.315513 47.572886,49.785578 0 0 0 568.24859,21.527961 Z"
              />
              <path
                fill="#ffffff"
                strokeWidth="0.4"
                strokeLinecap="round"
                d="m 211.58808,252.82616 a 47.572886,49.785578 0 0 0 -47.57256,49.78524 47.572886,49.785578 0 0 0 47.57256,49.78523 h 356.66051 a 47.572886,49.785578 0 0 0 47.57477,-49.78523 47.572886,49.785578 0 0 0 -47.57477,-49.78524 z"
              />
              <path
                fill="#ffffff"
                strokeWidth="0.4"
                strokeLinecap="round"
                d="m 211.58808,484.1232 a 47.572886,49.785578 0 0 0 -47.57256,49.78523 47.572886,49.785578 0 0 0 47.57256,49.78524 h 356.66051 a 47.572886,49.785578 0 0 0 47.57477,-49.78524 47.572886,49.785578 0 0 0 -47.57477,-49.78523 z"
              />
              </g>
              </svg>
                </a></li>
                <li title='git' className='hover:scale-110 hover:-translate-y-0.5 duration-200'><a target='_blank' href="https://github.com/HasinRafid">
                <svg className='size-7' viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="#ffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265"/>
                </svg>
                </a></li>
            </ul>
        </div>

        <div ref={sref} className='sm2:w-[70%] w-[91%] bg-gradient-to-br from-cyan-500 to-cyan-950 shadow-lg absolute -top-[200%] sm2:left-[16%] z-50 opacity-0 rounded-xl overflow-hidden duration-300'>
          <div className='p-6 flex items-center justify-between relative'>
            <button onClick={searchClick} className='absolute right-2 -top-1 text-white text-2xl font-extralight'>x</button>
            <input type="text" className='basis-[80%] p-2 border-b border-white outline-0 text-white text-lg' placeholder='search...' />
              <a href="" className='hover:scale-105 duration-200 basis-[10%]'>
                <svg className='size-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
          </div>
        </div>
    </div>)
} 

function FirstSection(){
  return (<div className='sm2:w-[65%] w-[80%] h-auto mx-auto sm2:flex justify-between items-center pt-11 sm2:pb-10 pb-14'>
    <div className='basis-[45%] text-white mb-14 sm2:mb-0'>
      <h1 className='capitalize font-semibold text-3xl'>discover a lot of coading tips to develop/level up your skill...<br/>and its free 😉 <span className='waveAni2 cursor-default'>👍</span></h1>
      <p className='text-[16px] mt-4'>Browse all the article you need to master your very own craft...</p>
    </div>

    <div className='basis-[35%]'>
      <div className='w-full h-[250px] overflow-hidden rounded-xl border-1 border-dashed border-gray-500 skew-4 cursor-pointer group' tabIndex={0}>
      <img src={pic1} alt="mountain_pic" className='object-cover w-full h-full rounded-xl p-1 -skew-2 mx-auto sm2:group-hover:w-[65%] group-focus:w-[65%] duration-500' />
      </div>
    </div>
  </div>)
}

function SecondSection(){
  return (<div className='sm2:w-[65%] w-[100%] h-auto mx-auto justify-center sm2:justify-normal sm2:pl-0 pl-[4%] flex flex-row flex-wrap'>
    {/* <div className='sm2:w-[65%] w-[100%] h-auto sm2:mx-auto sm2:pl-0 pl-[4%] flex flex-row flex-wrap'></div> */}
    <a href='' className='scndSctnBtn'>JavaScript</a>
    <a href='' className='scndSctnBtn'>React</a>
    <a href='' className='scndSctnBtn'>CSS</a>
    <a href='' className='scndSctnBtn'>HTML</a>
    <a href='' className='scndSctnBtn'>Python</a>
    <a href='' className='scndSctnBtn'>TypeScript</a>
    <a href='' className='scndSctnBtn'>C++</a>
    <a href='' className='scndSctnBtn'>Data Structure</a>
    <a href='' className='scndSctnBtn'>Algorithms</a>
    <a href='' className='scndSctnBtn arrowC'>
      Explore more 
      <svg className='size-6 inline' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#f3f4f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
  </div>)
}

function ThirdSection(){
  return (<div className='sm2:w-[65%] w-[90%] h-auto mx-auto sm2:mt-2 mt-8 sm2:mb-20 mb-14'>
    <h1 className='text-white font-semibold sm2:text-left text-center'>All Popular Articles</h1>
    <div className='w-full h-auto mt-6 mb-16 grid sm2:grid-cols-2 sm2:gap-x-6 gap-y-7'>
      <div className='break-words relative hover:-translate-y-1 duration-300 hover:shadow-xl p-2 group'>
        <a href="#" className='absolute w-full h-full z-50'></a>
        <img src={pic2} alt="pic" className='w-full h-[200px] object-center object-cover rounded-lg' />
        <p className='text-gray-300 text-xs mt-4 mb-3'>WebDev - September 07, 2025</p>
        <h1 className='text-white text-2xl group-hover:text-indigo-300 duration-300'>How the hell do I center a div in CSS ? Is it even possible...?</h1>
        <p className='text-white mt-2'>Learn how to exactly center a div. Really this is very easy and if this tutorial cannot help you then none can. Just admit that you are dump.</p>
      </div>

      <div className='break-words relative hover:-translate-y-1 duration-300 hover:shadow-xl p-2 group'>
        <a href="#" className='absolute w-full h-full z-50'></a>
        <img src={pic2} alt="pic" className='w-full h-[200px] object-center object-cover rounded-lg' />
        <p className='text-gray-300 text-xs mt-4 mb-3'>WebDev - September 07, 2025</p>
        <h1 className='text-white text-2xl group-hover:text-indigo-300 duration-300'>How the hell do I center a div in CSS ? Is it even possible...?</h1>
        <p className='text-white mt-2'>Learn how to exactly center a div. Really this is very easy and if this tutorial cannot help you then none can. Just admit that you are dump.</p>
      </div>

      <div className='break-words relative hover:-translate-y-1 duration-300 hover:shadow-xl p-2 group'>
        <a href="#" className='absolute w-full h-full z-50'></a>
        <img src={pic2} alt="pic" className='w-full h-[200px] object-center object-cover rounded-lg' />
        <p className='text-gray-300 text-xs mt-4 mb-3'>WebDev - September 07, 2025</p>
        <h1 className='text-white text-2xl group-hover:text-indigo-300 duration-300'>How the hell do I center a div in CSS ? Is it even possible...?</h1>
        <p className='text-white mt-2'>Learn how to exactly center a div. Really this is very easy and if this tutorial cannot help you then none can. Just admit that you are dump.</p>
      </div>

      <div className='break-words relative hover:-translate-y-1 duration-300 hover:shadow-xl p-2 group'>
        <a href="#" className='absolute w-full h-full z-50'></a>
        <img src={pic2} alt="pic" className='w-full h-[200px] object-center object-cover rounded-lg' />
        <p className='text-gray-300 text-xs mt-4 mb-3'>WebDev - September 07, 2025</p>
        <h1 className='text-white text-2xl group-hover:text-indigo-300 duration-300'>How the hell do I center a div in CSS ? Is it even possible...?</h1>
        <p className='text-white mt-2'>Learn how to exactly center a div. Really this is very easy and if this tutorial cannot help you then none can. Just admit that you are dump.</p>
      </div>      
    </div>

    <div className='text-center hover:-translate-y-0.5 duration-200'><a href='' className='bg-gradient-to-br from-cyan-600 text-gray-100 p-3 text-[18px] font-normal rounded-sm hover:text-indigo-200 duration-200 arrowC'>
      Explore All Articles 
      <svg className='size-6 inline' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#f3f4f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
    </div>
  </div>)
}

function ForthSection(){
  return (<div className='sm2:w-[70%] w-[80%] mx-auto pb-6'>
      <hr className='text-gray-400 mb-5' />

      <div className='flex sm2:flex-row flex-col sm2:justify-between mb-14'>
        <div className='sm2:basis-[50%] text-white sm2:mb-0 mb-8'>Hi ! there <span className='waveAni cursor-default'>🖐</span> I am Rafid, A Professional Front-End Develpoer. As a hobby I make clone of other website from the internet. This is also a dummy page. I only develop the front-end. It is quite fun and also a great practic for me to sharpen my skill. Feel free to take a tour to my <a target='_blank' href="https://github.com/HasinRafid" className='underline underline-offset-3 text-amber-500'>Github</a> profile to see more of my work and practices.<br /> The Images on this page was generated by ChatGPT. So these images are copyright free.<br /> This page is cloned/inspaired from this <a target='_blank' href="https://www.30secondsofcode.org" className='underline underline-offset-3 text-amber-500'>site</a>...</div>

        <div className='sm2:basis-[40%]'>
          <h1 className='text-xl font-semibold text-white'>Sitemap</h1>
          <div className='w-full mt-2 grid grid-cols-2 gap-x-10'>
            <ul className='text-white text-[16px]'>
              <li><a href="" className='hover:text-blue-600 duration-200'>Home</a></li>
              <li><a href="" className='hover:text-blue-600 duration-200'>Articles</a></li>
              <li><a href="" className='hover:text-blue-600 duration-200'>Collections</a></li>
            </ul>
            <ul className='text-white text-[16px]'>
              <li><a href="" className='hover:text-blue-600 duration-200'>About</a></li>
              <li><a href="" className='hover:text-blue-600 duration-200'>Updates</a></li>
              <li><a href="" className='hover:text-blue-600 duration-200'>RSS</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='text-center text-gray-200 text-sm'>
        <p>Powered by Hasin Rafid</p>
        <p>©HasinRafid 2025 - ∞ || All Right Reserved</p>
      </div>
  </div>)
}

export {HeadSection, FirstSection, SecondSection, ThirdSection, ForthSection}