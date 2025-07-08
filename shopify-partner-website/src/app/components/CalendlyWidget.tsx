'use client'
import { useEffect, useState } from "react";

export default function CalendlyWidget() {
  const [height, setHeight] = useState(700);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Responsive height
    function updateHeight() {
      setHeight(window.innerWidth < 500 ? 900 : 700);
    }
    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  return (
    <div className="flex justify-center w-full">
      <div
        className="calendly-inline-widget w-full"
        data-url="https://calendly.com/abrahamgue02/new-meeting"
        style={{ minWidth: 0, width: "100%", maxWidth: 600, height }}
      ></div>
    </div>
  );
}
