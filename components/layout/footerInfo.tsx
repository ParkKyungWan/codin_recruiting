"use client";
interface RecruitInfoProps {
    title? : string,
}
interface RecuitInfoItemProps{
    titleEN : string,
    titleKR : string,
    explain : string,
    iconPATH? : string,
    isActive? : boolean,
}

import { RECUITMENT_START_DATE, RECRUITMENT_END_DATE, RECUITMENT_PARTS } from "@/constants/recruitment";
import { useRouter } from "next/navigation";
import BackGroundBlur from "../common/backgroundBlur";
import { useState } from "react";
import Footer from "./footer";

const FooterInfoItem: React.FC<RecuitInfoItemProps> = ({titleEN, titleKR, explain, iconPATH, isActive}) =>{
    
    const [isHovered, setIsHovered] = useState(isActive);

    return(
        <button onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => setIsHovered(false)}
             id="RecuitInfoContainer" className="flex flex-col w-full justify-start items-center">
             
            <div id="RecuitInfoItem" className={"w-full rounded-4xl bg-[rgba(217,217,217,0.06)] border-2 border-[rgba(255,255,255,0.06)] transition-transform duration-500 "
                +(isHovered ? "bg-[rgba(217,217,217,0.24)] py-4 px-[24px]" : "py-4 px-10" )}
                 style={{ boxShadow: '0 4px 10px rgba(255, 255, 255, 0.06)' }}>
                
                <h1 id="RecuitPartName" className={"font-title font-light flex justify-center items-center "
                    + ((isHovered) ? "gap-[9px]":"gap-[6px]")}>
                    <span className="text-sub">{titleEN}</span>{" "}{titleKR}{" "}<img src={iconPATH} className={"w-[32px] h-[32px] "+ ((isHovered) ? "":"hidden")}/>
                </h1>

            </div>
            <p className={"font-subtitle font-light text-sub mt-0 mb-0 transition-all duration-500 delay-100 "+ (isHovered ? "mt-9 mb-4" : "max-h-0 opacity-0")}> {explain} </p>
        </button>
    )
}

const FooterInfo: React.FC<RecruitInfoProps> = ({title}) => {
  const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-start relative">

            <div className="flex flex-col items-center justify-center w-full h-[66vh] sm:h-screen absolute translate-y-[60%]">
                <BackGroundBlur/>
            </div> 


            <div className="flex justify-end items-center pr-[50%] mt-36 ">
                <img src="/images/recruitingDeco.png" className="hidden sm:block w-[327px] translate-x-[95%] opacity-0"/>
            </div>

            <div className="flex flex-col items-center mt-6 sm:mt-12">
                <p  id="mainInfoTitle" 
                    className="mt-9 font-titleMega font-medium font-gradient slow"
                    style={{ textShadow: '0 0 12px rgba(255, 255, 255, 0.33)' }}>{title}</p>
            </div>

            <div className="flex flex-col gap-4 mt-16 w-max z-10">
                { RECUITMENT_PARTS.map((part, index)=>(
                    <FooterInfoItem key={index} titleEN={part.titleEN} titleKR={part.titleKR} explain={part.explain} iconPATH={part.iconPATH} />
                ))}
            </div>
            <div className="w-full mt-52 sm:mt-82">
                <Footer/>
            </div>
        </div>
    );
  }
  
export default FooterInfo;