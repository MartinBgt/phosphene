const Blob = ({y, x, values, delay}) => {
    return (
        <div className={`absolute ${y} ${x} w-72 h-72 filter blur-xl opacity-80 animate-blob ${delay}`}>
            <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgb(45, 254, 101)" />
                        <stop offset="100%" stopColor="rgb(10, 123, 38)" />
                    </linearGradient>

                    {/* Filtre pour l'effet néon */}
                    <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    {/* Ombre portée pour renforcer l'effet lumineux */}
                    <filter id="dropShadow">
                        <feDropShadow dx="0" dy="0" stdDeviation="16" floodColor="rgb(18, 148, 53)" floodOpacity="0.8" />
                    </filter>
                </defs>
                <path fill="url(#gradient)" filter="url(#neonGlow) url(#dropShadow)">
                    <animate
                        attributeName="d"
                        dur="16s"
                        repeatCount="indefinite"

                        values={values}

                    >

                    </animate>
                </path>
            </svg>
        </div>
    )
}
export default Blob;