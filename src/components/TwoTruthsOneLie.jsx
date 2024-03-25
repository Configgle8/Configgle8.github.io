import React, { useState } from 'react';

const TwoTruthsOneLie = () => {
    const [answerStatus, setAnswerStatus] = useState(null);

    const checkAnswer = (answer) => {
        if (answer === 'I love all kinds of chocolate') {
            setAnswerStatus('incorrect');
        } else {
            setAnswerStatus('correct');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-12 ">
            <div id="question" className="mb-4 text-poppins-BI font-bold text-lg text-white">
                Two Truths One Lie!
            </div>
            <button
                className="quiz-button bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => checkAnswer('I have a passion for frontend development and working with a team')}
            >
                <h3 className='text-poppins-BI font-bold text-lg text-white'>I have a passion for frontend development and working with a team</h3>
            </button>
            <button
                className="quiz-button bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => checkAnswer('I love watching Mixed Martial Arts & the NBA')}
            >
                <h3 className='text-poppins-BI font-bold text-lg text-white'>I love watching Mixed Martial Arts & the NBA</h3>
            </button>
            <button
                className="quiz-button bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => checkAnswer('I love all kinds of chocolate')}
            >
               <h3 className='text-poppins-BI font-bold text-lg text-white'> I love all kinds of chocolate</h3>
            </button>
            {answerStatus && (
                <div className={`mt-4 ${answerStatus === 'correct' ? 'text-white bg-green-400 shadow-2xl border-r-green-700 border-r-8 border-b-green-700 border-opacity-50 border-b-8 p-4 rounded-full text-lg text-poppins-BI' : 'text-lg bg-red-400 shadow-2xl border-r-red-700 border-r-8 border-b-red-700 border-opacity-50 border-b-8 text-poppins-BI text-white p-4 rounded-full'}`}>
                    {answerStatus === 'correct' ? 'Truth!' : 'I actually do not like chocolate!'}
                </div>
            )}
        </div>
    );
};

export default TwoTruthsOneLie;
