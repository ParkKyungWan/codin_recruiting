"use client"
import {motion} from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface BackGroundBlurProps {

}

type Circle = {
    id: number,
    x: number,
    y: number,
    diameter: number,
    opacity: string,
    dx: number,
    dy: number,
}

const BackGroundBlur: React.FC<BackGroundBlurProps> = ({}) => {

    const randomSpeed = (baseNum :number) =>{
        const getPositiveValue = () => (Math.random()*baseNum + baseNum/2);  
        const getNegativeValue = () => -1* (Math.random()*baseNum + baseNum/2);  
        const result = Math.random() < 0.5 ? getPositiveValue() : getNegativeValue();
        return result;
    }

    const containerRef = useRef<HTMLDivElement | null>(null);;

    const [circles, setCircles] = useState<Circle[]>([]);

    const [dimensionW, setDimensionW] = useState(0);
    const [dimensionH, setDimensionH] = useState(0);

    useEffect(() => {

        const updateDimensions = () => {
            if (containerRef.current) {
                const nowW = containerRef.current.offsetWidth;
                const nowH = containerRef.current.offsetHeight;
                setDimensionW(nowW);
                setDimensionH(nowH);
                const smDiameter = containerRef.current.offsetWidth/1.2;
                const smRadius = smDiameter/2;
                const lgDiameter = containerRef.current.offsetWidth*1.5;
                const lgRadius = lgDiameter/2;
                const baseSpeed = smDiameter/4;
                const newCircles = [
                    { id: 1, x: -smRadius/1.7,        y: -smRadius/2,          diameter: smDiameter, opacity:"17", dx: randomSpeed(baseSpeed), dy: randomSpeed(baseSpeed) },
                    { id: 2, x: nowW/2-smRadius*1.2,  y: nowH/2-smRadius*0.7,  diameter: smDiameter, opacity:"17", dx: randomSpeed(baseSpeed), dy: randomSpeed(baseSpeed) },
                    { id: 3, x: nowW-smRadius*1.3,    y:nowH/2-smRadius,       diameter: smDiameter, opacity:"17", dx: randomSpeed(baseSpeed), dy: randomSpeed(baseSpeed) },
                    { id: 4, x: -lgRadius*1.2,        y: -lgRadius/1.5,          diameter: lgDiameter, opacity:"10", dx: randomSpeed(baseSpeed), dy: randomSpeed(baseSpeed) },
                    { id: 5, x: nowW-lgRadius*0.7,        y: nowH/2-lgRadius/1.2,          diameter: lgDiameter, opacity:"10", dx: randomSpeed(baseSpeed), dy: randomSpeed(baseSpeed) },
                    { id: 6, x: nowW/2-lgRadius*1.4,        y: nowH-lgRadius,          diameter: lgDiameter, opacity:"10", dx: randomSpeed(baseSpeed), dy: randomSpeed(baseSpeed) },
                ]
                setCircles(newCircles);
            }

        }

        updateDimensions();
        window.addEventListener("resize", updateDimensions);

        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
        
    }, []);

    return (
        <div ref={containerRef} className="absolute left-0 top-0 flex w-full h-full overflow-visible " style={{filter: `blur(50px)`}}>
            {circles.map((circle)=>(
                <motion.div
                    key={circle.id}
                    className="absolute rounded-full bg-white"
                    style={{
                        background: `radial-gradient(circle, rgba(65,156,247,0.${circle.opacity}) 0%, rgba(65,156,247,0) 50%, transparent)`,
                        width: circle.diameter, height: circle.diameter,
                    }}
                    
                    initial={{
                        x: circle.x,
                        y: circle.y,
                    }}
                    animate={{
                        /*x: [circle.x, circle.x + circle.dx],
                        y: [circle.y, circle.y + circle.dy], 성능이슈*/
                        x: circle.x,
                        y: circle.y,
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: 'mirror',
                    }}
                />   
            ))}
        </div>
    )

}

export default BackGroundBlur