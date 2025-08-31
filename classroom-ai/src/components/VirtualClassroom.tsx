'use client';

import { useState } from 'react';

export default function VirtualClassroom() {
  const [activeTab, setActiveTab] = useState('whiteboard');

  return (
    <div className="min-h-screen bg-gray-50 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:20px_20px]">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Left Side - Tool Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={() => setActiveTab('whiteboard')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'whiteboard'
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span>Whiteboard</span>
            </button>
            <button
              onClick={() => setActiveTab('browser')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'browser'
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span>Browser</span>
            </button>
          </div>

          {/* Right Side - Time and Quiz */}
          <div className="flex items-center space-x-6">
            {/* Time Display */}
            <div className="text-right">
              <div className="text-sm text-gray-500">Remaining Time</div>
              <div className="text-2xl font-bold text-gray-800">18:23</div>
            </div>

            {/* Quiz Button */}
            <div className="flex flex-col items-center space-y-1">
              <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold hover:bg-blue-700 transition-colors duration-200">
                ?
              </button>
              <span className="text-xs text-gray-600 font-medium">Quiz</span>
            </div>

            {/* Download Arrow */}
            <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Content Frame */}
          <div className="relative bg-gray-100 border-4 border-blue-500 rounded-lg min-h-[500px] p-6">
            {/* Content Placeholder */}
            <div className="text-center text-gray-500 mt-20">
              <div className="text-4xl font-bold mb-4">Virtual Classroom</div>
              <p className="text-lg">Your content will appear here</p>
            </div>

            {/* Language/Communication Icon - Bottom Right */}
            <div className="absolute bottom-6 right-6">
              <div className="w-12 h-12 bg-white rounded-full border-2 border-blue-500 flex items-center justify-center shadow-lg">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">US</span>
                </div>
              </div>
            </div>

            {/* Download Icon - Top Right of Content Area */}
            <div className="absolute top-6 right-6">
              <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-white border-t border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Left Side - Subtitle */}
          <div className="flex-1 max-w-4xl">
            <div className="text-sm text-gray-500 mb-1">Subtitle:</div>
            <div className="text-gray-700 leading-relaxed">
              In physics, momentum is the product of an object's mass and its velocity, often...
            </div>
          </div>

          {/* Right Side - Raise Hand Button */}
          <div className="ml-6">
            <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
              RAISE HAND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
