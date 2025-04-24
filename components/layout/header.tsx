"use client";

import { RECUITMENT_START_DATE, RECRUITMENT_END_DATE, RECUITMENT_PARTS } from "@/constants/recruitment";
import { MAX_LAYOUT_WIDTH } from "@/constants/layout";
import { motion } from 'framer-motion';
import { useRouter } from "next/navigation";
import { useState } from "react";

const PartsDropDown: React.FC = () => {
  const router = useRouter();
  const parentsVariants = {
    hidden: {
      height: 0,
      opacity: 0,
    },
    show: {
      height: 'auto',
      opacity: 1,
      transition: {
        height: { duration: 0.2, ease: 'easeInOut' },
        opacity: { duration: 0.2, ease: 'easeInOut' },
        staggerChildren: 0.05, 
      },
    },
  };

  const childrenVariants = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  }

  return (
    <div className="absolute z-[150] left-0 top-10.5 -translate-x-5 text-[15px]">
      <div id="dropDownList" className="w-full flex flex-col items-center justify-center mb-0.5 rounded-lg bg-[rgba(0,0,0,0.88)] backdrop-blur-md border shadow-[0_0_24px_rgba(255,255,255,0.08)] border-white/10 px-4 py-3 gap-4"> 
        <button className="font-gradient" onClick={()=>{router.push("/introduction")}}>
          Codin 코딘
        </button>

        <motion.div id="dropDownList" className="w-full flex flex-col items-center justify-center gap-3"
          layout variants={parentsVariants} initial="hidden" animate="show"
        > 
          { RECUITMENT_PARTS.map((part, index)=>(
            <motion.div key={index} variants={childrenVariants}>
              <button onClick={()=>{router.push(`/recuitmentParts/${part.link}`)}} className="text-sub hover:text-white font:font-bold">{part.simple}</button>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}

const Header: React.FC = () => {
  const router = useRouter();
  const handleLogoClick = () =>{
    router.push("/");
  }
  const [dropDownHovered, setdropDownHovered] = useState<boolean>(false)
  
    return (
      <header className="fixed top-0 left-0 z-100 w-full flex justify-center backdrop-blur-md items-center px-4 sm:px-8 h-[68px] max-h-[68px]">
        <div className="flex justify-between items-center w-full gap-4 py-4" style={{ maxWidth: MAX_LAYOUT_WIDTH }}>
            <button id="LogoArea" onClick={()=>{handleLogoClick()}}>
                <img src="/logo/logo_recuiting.png" className="min-w-[102px] sm:min-w-[162px]" width={162}/>
            </button>
            <div id="BtnsArea" className="text-sm font-medium flex gap-2 sm:gap-4 text-[rgba(255,255,255,0.70)]">
                <p id="모집기간" className="sm:flex items-center whitespace-nowrap hidden">{RECUITMENT_START_DATE} ~ {RECRUITMENT_END_DATE}</p>
                <div id="모집분야" className="flex items-center whitespace-nowrap w-max relative"
                  onMouseEnter={()=>setdropDownHovered(true)} onMouseLeave={()=>setdropDownHovered(false)}>
                  <button className="flex items-center justify-center" onClick={()=>{setdropDownHovered((prev)=>!prev)}}> 
                    모집 분야 
                    <img src="/icons/listdown.svg" width={24}/> 
                  </button>
                  { dropDownHovered && <PartsDropDown/>} 
                </div>
                <button id="지원하기" className="flex items-center whitespace-nowrap rounded-lg sm:rounded-xl bg-[rgba(255,255,255,0.25)] py-2 px-4 sm:py-3 sm:px-10">바로 지원하기</button>
            </div>
        </div>
      </header>
    );
  }
  
export default Header;