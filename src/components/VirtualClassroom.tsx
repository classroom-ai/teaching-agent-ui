// VirtualClassroom.tsx
'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)
import { useState } from 'react';
import ExcalidrawCanvas from './ExcalidrawCanvas'; // adjust path if needed


const Quiz = [
  {
    Qno:1,
    Question:"Solve the System of Equations",
    SubQuestion:"Find the values of x and y that satisfy both equations:",
    Options:["x=2, y=3", "x=3, y=2", "x=4, y=1"],
    CorrectAnswer:"x=2, y=3"
  },
  {
    Qno:2,
    Question:"Solve the System of Equations. This is Q 2",
    SubQuestion:"Find the values of x and y that satisfy both equations:",
    Options:["x=2, y=3", "x=3, y=2", "x=4, y=1"],
    CorrectAnswer:"x=2, y=3"
  },
  {
    Qno:3,
    Question:"Solve the System of Equations, dddd",
    SubQuestion:"Find the values of x and y that satisfy both equations:",
    Options:["x=2, y=3", "x=3, y=2", "x=4, y=1"],
    CorrectAnswer:"x=2, y=3"
  },
  {
    Qno:4,
    Question:"Solve the System of Equationsnddkjjjd",
    SubQuestion:"Find the values of x and y that satisfy both equations:",
    Options:["x=2, y=3", "x=3, y=2", "x=4, y=1"],
    CorrectAnswer:"x=2, y=3"
  },
  {
    Qno:5,
    Question:"Solve the System of Equationsddddddddddddddd",
    SubQuestion:"Find the values of x and y that satisfy both equations:",
    Options:["x=2, y=3", "x=3, y=2", "x=4, y=1"],
    CorrectAnswer:"x=2, y=3"
  },

]
export default function VirtualClassroom() {
  const [activeTab, setActiveTab] = useState('whiteboard');

  return (
    <div className='flex flex-row bg-[#F9FAFB]'>
      <div className="bg-white rounded-xl mx-1.5 mt-3 w-full h-[85vh]">



        {/* Main Content Area */}
        <div className="flex-1 p-6 shadow-lg">
          <div className="max-w-6xl mx-auto">
            <div className='flex space-x-4 mb-1.5'>
              {/* Main Content Frame */}
              <button
                onClick={() => setActiveTab('whiteboard')}
                className={`cursor-pointer flex py-1.5 items-center space-x-2 px-4 rounded-md font-medium transition-all duration-200 ${activeTab === 'whiteboard'
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
              >
                <span className='text-xs'>Whiteboard</span>
              </button>
              <button
                onClick={() => setActiveTab('Quiz')}
                className={`cursor-pointer flex py-1.5 items-center space-x-2 px-4 rounded-md font-medium transition-all duration-200 ${activeTab === 'Quiz'
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
              >
                <span className='text-xs'>Quiz</span>
              </button>
              <button
                onClick={() => setActiveTab('Browser')}
                className={`cursor-pointer flex py-1.5 items-center space-x-2 px-4 rounded-md font-medium transition-all duration-200 ${activeTab === 'Browser'
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
              >
                <span className='text-xs'>Browser</span>
              </button>
            </div>
            <div className="relative bg-gray-100 border-2 border-dashed border-[#CBCBCB] rounded-lg h-[end]">
              {/* Content Area */}
              {activeTab === 'whiteboard' && (
                <ExcalidrawCanvas />
              )}
              {activeTab === 'Quiz' && (
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 max-w-3xl mx-auto h-full">
                  <div className="flex items-center mb-4 flex-row">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={['fas', 'clipboard-list']} className="mr-2" />
                      <h2 className="text-md font-medium">Linear Equations Quiz</h2>
                    </div>
                    <div className="ml-auto text-xs text-gray-500">Question 2 of 5</div>
                    <div className="ml-4 w-1/3 bg-gray-200 rounded-full h-3">
                      <div className="bg-green-500 h-full rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>



                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center mb-2">
                      <div className="bg-black text-white rounded-full w-6 h-6 text-xs font-black flex items-center justify-center mr-2">
                        <span>2</span>
                      </div>
                      <h3 className="text-sm font-medium">Solve the System of Equations</h3>
                    </div>
                    <p className="text-xs mb-2">Find the values of x and y that satisfy both equations:</p>
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="font-mono text-xs">2x + 3y = 12</p>
                      <p className="font-mono text-xs">x - y = 3</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <label className="flex items-center p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input type="radio" name="answer" className="mr-3" />
                      <span className="mr-2 font-medium">A</span>
                      <span>{Quiz[1].Options[0]}</span>
                    </label>

                    <label className="flex items-center p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input type="radio" name="answer" className="mr-3" />
                      <span className="mr-2 font-medium">B</span>
                      <span>{Quiz[1].Options[1]}</span>
                    </label>

                    <label className="flex items-center p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input type="radio" name="answer" className="mr-3" />
                      <span className="mr-2 font-medium">C</span>
                      <span>{Quiz[1].Options[2]}</span>
                    </label>
                  </div>
            <button className="cursor-pointer bg-black text-sm text-white px-4 py-1.5 rounded-lg float-right my-3">
              Notes
            </button>
                </div>
              )}
              {activeTab === 'Browser' && (
                <div className="text-center text-gray-500 mt-20">
                  <div className="text-4xl font-bold mb-4">Browser</div>
                  <p className="text-lg">Your browser view will appear here</p>
                </div>
              )}
            </div>
          </div>
          <div className="flex w-full mt-2">
            <button className="cursor-pointer mr-2.5 bg-black text-sm text-white px-4 py-1.5 rounded-lg transition-colors duration-200">
              Microphone
            </button>
            <button className="cursor-pointer mr-2.5 bg-black text-sm text-white px-4 py-1.5 rounded-lg transition-colors duration-200">
              Notes
            </button>
            <div className="flex-1"></div>
            <button className="cursor-pointer mr-2.5 bg-black text-sm text-white px-4 py-1.5 rounded-lg transition-colors duration-200">
              End Session
            </button>
          </div>
        </div>
        {/* Right Side - Raise Hand Button */}

      </div>
      <div className='w-80 bg-white border-l border-gray-300 p-4 flex flex-col mt-3 mx-1.5 rounded-xl shadow-lg'>
        <div className=''>
          <h1>Live transcript</h1>

        </div>
        <div className=' bg-[#F9FAFB] p-3 rounded-lg mt-2'>
          <div className='mt-1'>
            <p className='text-blue-500 text-sm'>Student</p>
            <p className='text-xs text-gray-600'> What is Newtons first Law of Motion</p>
          </div>
        </div>
        <div className=' bg-[#F9FAFB] p-3 rounded-lg mt-2'>
          <div className='mt-1'>
            <p className='text-blue-500 text-sm'>Assisstant</p>
            <p className='text-xs text-gray-600'> Newtons first Law of Motion is a very unique law. it was introduced by Isaac Newton</p>
          </div>
        </div>
        <div className='mt-auto w-full'>
          <h1 className='text-sm'>Action buttons</h1>
          <div className='flex flex-wrap text-xs'>
            <div className='w-1/2 border-1 border-[#DADADA] rounded-sm py-1.5 px-1 mb-1'>Repeat</div>
            <div className='w-1/2 border-1 border-[#DADADA] rounded-sm py-1.5 px-1 mb-1'>Simplify</div>
            <div className='w-1/2 border-1 border-[#DADADA] rounded-sm py-1.5 px-1 mb-1'>Examples</div>
            <div className='w-1/2 border-1 border-[#DADADA] rounded-sm py-1.5 px-1 mb-1'>Diagram</div>
            <div className='w-1/2 border-1 border-[#DADADA] rounded-sm py-1.5 px-1 mb-1'>Samarize</div>
            <div className='w-1/2 border-1 border-[#DADADA] rounded-sm py-1.5 px-1 mb-1'>Quiz</div>
          </div>
        </div>
      </div>
    </div>

  );
}
