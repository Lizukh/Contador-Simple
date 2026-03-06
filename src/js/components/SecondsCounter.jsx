import React from "react";

const SecondsCounter = ({ seconds }) => {
    const digits = String(seconds).padStart(6, '0').split('');

    return (
        <div className="d-flex justify-content-center">
            <div className="counter bg-dark text-white p-3 m-1 rounded">
                <i class="fa-regular fa-clock"></i>
            </div>
            {digits.map((seconds, counter) => (
                <div key={counter} className="counter bg-dark text-white p-3 m-1 rounded">
                    {seconds}
                </div>
            ))}
        </div>
    );
};

export default SecondsCounter;