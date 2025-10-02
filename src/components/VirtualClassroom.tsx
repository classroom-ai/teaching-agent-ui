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
    Qno: 1,
    Question: "Solve the System of Equations",
    SubQuestion: "Find the values of x and y that satisfy both equations:",
    Options: ["x=2, y=3", "x=3, y=2", "x=4, y=1"],
    CorrectAnswer: "x=2, y=3"
  },
  {
    Qno: 2,
    Question: "Solve the System of Equations. This is Q 2",
    SubQuestion: "Find the values of x and y that satisfy both equations:",
    Options: ["x=2, y=3", "x=3, y=2", "x=4, y=1"],
    CorrectAnswer: "x=2, y=3"
  },
  {
    Qno: 3,
    Question: "Solve the System of Equations, dddd",
    SubQuestion: "Find the values of x and y that satisfy both equations:",
    Options: ["x=2, y=3", "x=3, y=2", "x=4, y=1"],
    CorrectAnswer: "x=2, y=3"
  },
  {
    Qno: 4,
    Question: "Solve the System of Equationsnddkjjjd",
    SubQuestion: "Find the values of x and y that satisfy both equations:",
    Options: ["x=2, y=3", "x=3, y=2", "x=4, y=1"],
    CorrectAnswer: "x=2, y=3"
  },
  {
    Qno: 5,
    Question: "Solve the System of Equationsddddddddddddddd",
    SubQuestion: "Find the values of x and y that satisfy both equations:",
    Options: ["x=2, y=3", "x=3, y=2", "x=4, y=1"],
    CorrectAnswer: "x=2, y=3"
  },

]
export default function VirtualClassroom() {
  const [activeTab, setActiveTab] = useState('whiteboard');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [savedAnswers, setSavedAnswers] = useState<(number | null)[]>(Array(Quiz.length).fill(null));

  const currentQuestion = Quiz[currentQuestionIndex];

  const handleSelectOption = (index: number) => {
    setSelectedOptionIndex(index);
  };

  const handleNextQuestion = () => {
    const updatedAnswers = [...savedAnswers];
    updatedAnswers[currentQuestionIndex] = selectedOptionIndex;
    setSavedAnswers(updatedAnswers);

    if (currentQuestionIndex < Quiz.length - 1) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      setSelectedOptionIndex(updatedAnswers[nextIndex]);
    }
  };

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
                <span className='text-xs'style={{ fontFamily: 'var(--font-ubuntu)' }}>Whiteboard</span>
              </button>
              <button
                onClick={() => setActiveTab('Quiz')}
                className={`cursor-pointer flex py-1.5 items-center space-x-2 px-4 rounded-md font-medium transition-all duration-200 ${activeTab === 'Quiz'
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
              >
                <span className='text-xs'style={{ fontFamily: 'var(--font-ubuntu)' }}>Quiz</span>
              </button>
              <button
                onClick={() => setActiveTab('Browser')}
                className={`cursor-pointer flex py-1.5 items-center space-x-2 px-4 rounded-md font-medium transition-all duration-200 ${activeTab === 'Browser'
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
              >
                <span className='text-xs' style={{ fontFamily: 'var(--font-ubuntu)' }}>Browser</span>
              </button>
            </div>
            <div className="relative bg-gray-100 border-2 border-dashed border-[#CBCBCB] rounded-lg h-[end]">
              {/* Content Area */}
              {activeTab === 'whiteboard' && (
                <ExcalidrawCanvas />
              )}
              {activeTab === 'Quiz' && (
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 w-full mx-auto h-full">
                  <div className="flex items-center mb-4 flex-row mx-4">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={['fas', 'clipboard-list']} className="mr-2" />
                      <h2 className="text-md font-medium" style={{ fontFamily: 'var(--font-ubuntu)' }}>Linear Equations Quiz</h2>
                    </div>
                    <div className="ml-auto text-xs text-gray-500" style={{ fontFamily: 'var(--font-nunito)' }} >Question {currentQuestionIndex + 1} of {Quiz.length}</div>
                    <div className="ml-4 w-1/3 bg-gray-200 rounded-full h-3">
                      <div className="bg-green-500 h-full rounded-full" style={{ width: `${((currentQuestionIndex + 1) / Quiz.length) * 100}%` }}></div>
                    </div>
                  </div>



                  <div className="bg-blue-50 rounded-lg p-4 mb-6 mx-4">
                    <div className="flex items-center mb-2">
                      <div className="bg-black text-white rounded-full w-6 h-6 text-xs font-black flex items-center justify-center mr-2">
                        <span>{currentQuestionIndex + 1}</span>
                      </div>
                      <h3 className="text-sm font-medium "style={{ fontFamily: 'var(--font-ubuntu)' }}>{currentQuestion.Question}</h3>
                    </div>
                    <p className="text-xs mb-2"style={{ fontFamily: 'var(--font-nunito)' }}>{currentQuestion.SubQuestion}</p>
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <p className="font-mono text-xs">2x + 3y = 12</p>
                      <p className="font-mono text-xs">x - y = 3</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm mx-4" style={{ fontFamily: 'var(--font-ubuntu)' }}>
                    {currentQuestion.Options.map((option, index) => (
                      <label key={index} className="flex items-center p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="radio"
                          name="answer"
                          className="mr-3"
                          checked={selectedOptionIndex === index}
                          onChange={() => handleSelectOption(index)}
                        />
                        <span className="mr-2 font-medium">{String.fromCharCode(65 + index)}</span>
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                  <div className='mb-3'>
                  <button onClick={handleNextQuestion} disabled={selectedOptionIndex === null} className={`cursor-pointer bg-black text-sm text-white px-4 py-1.5 rounded-lg float-right inline-flex items-center ${selectedOptionIndex === null ? 'opacity-50 cursor-not-allowed' : ''}`}style={{ fontFamily: 'var(--font-rubik)' }}>
                    {currentQuestionIndex < Quiz.length - 1 ? 'Next Question' : 'Finish'} <FontAwesomeIcon className='ml-1 ' icon={['fas', 'arrow-right']} />
                  </button>
                  </div>
                </div>
              )}
              {activeTab === 'Browser' && (
                <div className="text-center text-gray-500 mt-20 h-[50vh]">
                  <div className="text-4xl font-bold mb-4">Browser</div>
                  <p className="text-lg">Your browser view will appear here</p>
                </div>
              )}
            </div>
          </div>
          <div className="flex w-full mt-2">
            <button className="cursor-pointer mr-2.5 bg-black text-sm text-white px-4 py-1.5 rounded-lg transition-colors duration-200"style={{ fontFamily: 'var(--font-rubik)' }}>
              Microphone
            </button>
            <button className="cursor-pointer mr-2.5 bg-black text-sm text-white px-4 py-1.5 rounded-lg transition-colors duration-200" style={{ fontFamily: 'var(--font-rubik)' }}>
              Notes
            </button>
            <div className="flex-1"></div>
            <button className="cursor-pointer mr-2.5 bg-black text-sm text-white px-4 py-1.5 rounded-lg transition-colors duration-200"style={{ fontFamily: 'var(--font-rubik)' }}>
              End Session
            </button>
          </div>
        </div>
        {/* Right Side - Raise Hand Button */}

      </div>
      <div className='w-80 bg-white border-l border-gray-300 p-4 flex flex-col mt-3 mx-1.5 rounded-xl shadow-lg'>
        <div className='' style={{ fontFamily: 'var(--font-ubuntu)', fontWeight: 500 }}>
          <h1>Live transcript</h1>

        </div>
        <div className=' bg-[#F9FAFB] p-3 rounded-lg mt-2'>
          <div className='mt-1'>
            <p className='text-blue-500 text-sm' style={{ fontFamily: 'var(--font-rubik)', fontWeight: 500 }}>Student</p>
            <p className='text-xs text-gray-600' style={{ fontFamily: 'var(--font-nunito)' }}> What is Newtons first Law of Motion</p>
          </div>
        </div>
        <div className=' bg-[#F9FAFB] p-3 rounded-lg mt-2'>
          <div className='mt-1'>
            <p className='text-blue-500 text-sm'style={{ fontFamily: 'var(--font-rubik)', fontWeight: 500 }}>Assisstant</p>
            <p className='text-xs text-gray-600' style={{ fontFamily: 'var(--font-nunito)' }}> Newtons first Law of Motion is a very unique law. it was introduced by Isaac Newton</p>
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
