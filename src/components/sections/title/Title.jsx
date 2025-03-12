import React from "react";

const Title = () => {
    return (
        <button disabled={true} style={{ cursor: "default"}} className="relative text-transparent tracking-[30px] uppercase tracking-widest border-none bg-transparent cursor-pointer group z-10 text-6xl ">
            <span className="absolute inset-0 w-0 group-hover:w-full transition-all duration-1000 border-r-4 border-green-light hover:border-green-dark overflow-hidden bg-gradient-to-r from-green-light to-green-dark bg-clip-text text-transparent drop-shadow-[0_0_23px_#129435]">
                &nbsp;PHOSPHENE&nbsp;
            </span>
            <span className="relative -z-10 text-transparent group-hover:opacity-0 transition-all duration-1000"
                  style={{ WebkitTextStroke: "1px rgba(195, 195, 195, 0.6)" }}>
            &nbsp;PHOSPHENE&nbsp;
            </span>

        </button>
    );
};

export default Title;
