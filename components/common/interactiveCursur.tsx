'use client';

import { useEffect, useState } from 'react';

const InteractiveCursur: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isMouse = window.matchMedia('(pointer: fine)').matches;
    setEnabled(isMouse);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        setVisible(true);
        setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleEnter = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);
    const handleVisibilityChange = (e:MouseEvent) => {
        if (!e.relatedTarget && !(e as any).toElement) {
          setVisible(false);
        }
    };
    

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseout', handleVisibilityChange);

    const buttons = document.querySelectorAll('button');
    buttons.forEach((btn) => {
      btn.addEventListener('mouseenter', handleEnter);
      btn.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.addEventListener('mouseout', handleVisibilityChange);
      buttons.forEach((btn) => {
        btn.removeEventListener('mouseenter', handleEnter);
        btn.removeEventListener('mouseleave', handleLeave);
      });
    }
  }, []);
  if (!enabled) return null; 
  if (!visible) return null;
  return (
    <>
    {visible &&
        <div
            style={{
                position: 'fixed',
                left: position.x,
                top: position.y,
                width: '28px',
                height: '28px',
                backgroundColor: `${isClicking ? "rgba(255,255,255,0.18)" : isHovering? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.55)"}`,
                borderRadius: '50%',
                pointerEvents: 'none',
                transform: `translate(-50%, -50%) ${isClicking ? "scale(0.8)" : isHovering ? "scale(1.3)" : "scale(1)"}`,
                transition: 'transform 0.1s ease, background-color 0.1s ease',
                zIndex: 9999,
            }}
        />
    }
    </>

  );
};

export default InteractiveCursur;