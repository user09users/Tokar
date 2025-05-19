const Spinner = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
                margin: "auto",
                background: "none",
                display: "block",
                shapeRendering: "auto",
            }}
            width="38px"
            height="38px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
        >
            {/* SVG contents here */}
            <g transform="rotate(0 50 50)">
                <rect
                    x="47"
                    y="24"
                    rx="3"
                    ry="6"
                    width="6"
                    height="12"
                    fill="#337ab7"
                >
                    <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.9167s"
                        repeatCount="indefinite"
                    />
                </rect>
            </g>
            {/* ... keep rest of the <g> elements unchanged ... */}
        </svg>
    );
};

export default Spinner;
