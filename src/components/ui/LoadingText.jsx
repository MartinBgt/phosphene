import { useState, useEffect, React } from "react";

const LoadingText = ({ texts, speed = 200, eraseSpeed = 100, delay = 1500 }) => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[index];

        if (isDeleting) {
            if (charIndex > 0) {
                setTimeout(() => setCharIndex((prev) => prev - 1), eraseSpeed);
            } else {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % texts.length);
            }
        } else {
            if (charIndex < currentText.length) {
                setTimeout(() => setCharIndex((prev) => prev + 1), speed);
            } else {
                setTimeout(() => setIsDeleting(true), delay);
            }
        }
    }, [charIndex, isDeleting, index, texts, speed, eraseSpeed, delay]);

    return (
        <div className="text-3xl font-mono bg-p-black p-4 rounded-lg">
        <span className="text-p-white">Comming </span>
      <span className="bg-gradient-to-r from-green-light via-green-light to-green-dark bg-clip-text text-transparent">
        {texts[index].substring(0, charIndex)}
      </span>
            <span className="opacity-0 text-transparent">|</span>
        </div>
    );
};

export default LoadingText;
