import React, { useState } from "react";

type QAProps = {
    question: string;
    answer: string;
};

const QA: React.FC<QAProps> = ({ question, answer }) => {
    const [showQA, setShowQA] = useState(false);

    return (
        <div className="py-6 px-4 sm:py-8 sm:px-6 my-4 sm:my-6 lg:my-8 max-w-2xl mx-auto border rounded-lg flex flex-col gap-4 sm:gap-6">
            <button
                className="flex flex-row items-center justify-between gap-4 font-medium text-left"
                onClick={() => setShowQA(!showQA)}
            >
                <span className="text-lg sm:text-xl">{question}</span>
                <span className="text-gray-500 text-lg sm:text-xl">
                    {showQA ? "↑" : "↓"}
                </span>
            </button>
            {showQA && <p className="text-base sm:text-lg ">{answer}</p>}
        </div>
    );
};

export default QA;