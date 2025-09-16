'use client';


import { useState } from 'react';
import ExcalidrawCanvas from './ExcalidrawCanvas'; // adjust path if needed

export default function VirtualClassroom() {
  const [activeTab, setActiveTab] = useState('whiteboard');

  return (
    <div className='flex flex-row bg-amber-300'>
      <div className="bg-white w-full">
        {/* Top Navigation Bar */}


        {/* Main Content Area */}
        <div className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <div className='flex space-x-4 mb-1.5'>
              {/* Main Content Frame */}
              <button
                onClick={() => setActiveTab('whiteboard')}
                className={`flex py-1.5 items-center space-x-2 px-4 rounded-lg font-medium transition-all duration-200 ${activeTab === 'whiteboard'
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
              >
                <div className="w-2.5 h-2.5 bg-white rounded-full cursor-pointer"></div>
                <span className='text-xs'>Whiteboard</span>
              </button>
              <button
                onClick={() => setActiveTab('whiteboard')}
                className={`flex py-1.5 items-center space-x-2 px-4 rounded-lg font-medium transition-all duration-200 ${activeTab === 'whiteboard'
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
              >
                <div className="w-2.5 h-2.5 bg-white rounded-full cursor-pointer"></div>
                <span className='text-xs'>Browser</span>
              </button>
            </div>
            <div className="relative bg-gray-100 border-2 border-dashed border-[#CBCBCB] rounded-lg h-[65vh]">
              {/* Content Area */}
              {activeTab === 'whiteboard' ? (
                <ExcalidrawCanvas />
              ) : (
                <div className="text-center text-gray-500 mt-20">
                  <div className="text-4xl font-bold mb-4">Browser</div>
                  <p className="text-lg">Your browser view will appear here</p>
                </div>
              )}
            </div>
          </div>
          <div className="flex w-full mt-2">
            <button className="cursor-pointer mr-2.5 bg-black text-sm text-white px-4 py-1.5 rounded-lg transition-colors duration-200">
              Recording
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
      <div className='w-80 bg-white border-l border-gray-300 p-4 flex flex-col'>
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
