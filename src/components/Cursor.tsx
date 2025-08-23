import { useEffect, useState } from "react";

const Cursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: pos.y,
        left: pos.x,
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: "rgba(255,255,255,0.8)",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        transition: "transform 0.1s ease-out",
        zIndex: 50,
      }}
    />
  );
};

export default Cursor;
