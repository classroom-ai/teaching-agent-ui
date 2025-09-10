'use client';


import { useState } from 'react';
import ExcalidrawCanvas from './ExcalidrawCanvas'; // adjust path if needed

export default function VirtualClassroom() {
  const [activeTab, setActiveTab] = useState('whiteboard');

  return (
    <div className="bg-gray-50 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:20px_20px]">
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
            <div className="text-sm text-gray-500">Remaining Time:18:23</div>
          </div>
          <div className="relative bg-gray-100 border-4 border-blue-500 rounded-lg h-[65vh]">
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
          <div className="text-gray-700 leading-relaxed">
            In physics, momentum is the product of an object's mass and its velocity, often...
          </div>
          <div className="flex-1"></div>
          <button className="cursor-pointer mr-2.5 bg-black text-sm text-white px-4 py-1.5 rounded-lg font-semibold transition-colors duration-200">
            RAISE HAND
          </button>
        </div>
      </div>
      {/* Right Side - Raise Hand Button */}

    </div>


  );
}
