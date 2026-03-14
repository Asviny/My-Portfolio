import React from "react";

const TWEMOJI_BASE = "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/";

const Twemoji = ({ emoji, size = "1em" }) => {
    const codePoint = [...emoji]
        .filter((char) => char.codePointAt(0) > 255)
        .map((char) => char.codePointAt(0).toString(16))
        .join("-");

    return (
        <img
            src={`${TWEMOJI_BASE}${codePoint}.svg`}
            alt={emoji}
            style={{
                width: size,
                height: size,
                display: "inline-block",
                verticalAlign: "middle",
            }}
            draggable={false}
        />
    );
};

export default Twemoji;
