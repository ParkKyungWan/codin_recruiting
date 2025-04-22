"use client"

interface RadiantBoxProps {
    children?: React.ReactNode;
}

const RadiantBox: React.FC<RadiantBoxProps> = ({children}) => {

  return (
    <div id="AngularGradientBorder" 
         className="relative p-[1px] rounded-4xl flex justify-center items-center overflow-hidden"
         style={{ boxShadow: '0 0 50px 24px rgba(66, 156, 247, 0.125)' }}>
        <div className="absolute rounded-full animate-[spin_3s_linear_infinite] w-[200%] aspect-[1] "
         style={{ background: `conic-gradient(from 0deg, rgba(13,153,255,0.5), rgba(86,183,255,0.5), rgba(188,239,255,0.5), rgba(247,235,255,0.5), rgba(132,202,255,0.5), rgba(62,173,255,0.5))`, filter: 'blur(21px)'}}/>
        
        <div id="ContentBox" 
             className="w-max h-max py-7 px-12 sm:py-15 sm:px-32 flex flex-col justify-center items-center rounded-4xl bg-[#0a0a0a] z-10"> {children} </div>

    </div>
  );
};

export default RadiantBox;