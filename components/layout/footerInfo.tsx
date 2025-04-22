"use client";
interface RecruitInfoProps {
    title? : string,
}
interface RecuitInfoItemProps{
    titleEN : string,
    titleKR : string,
    explain : string,
    iconPATH? : string,
}

import { RECUITMENT_START_DATE, RECRUITMENT_END_DATE } from "@/constants/recruitment";
import { useRouter } from "next/navigation";
import BackGroundBlur from "../common/backgroundBlur";

const FooterInfoItem: React.FC<RecuitInfoItemProps> = ({titleEN, titleKR, explain, iconPATH}) =>{
    return(
        <button id="RecuitInfoContainer" className="flex flex-col w-full justify-center items-center">
            <div id="RecuitInfoItem" className="py-4 px-10 w-full rounded-4xl bg-[rgba(217,217,217,0.06)] border-2 border-[rgba(255,255,255,0.06)]"
                 style={{ textShadow: '0 4 10px rgba(255, 255, 255, 0.06)' }}>

                <h1 id="RecuitPartName" className="font-title font-light">
                    <span className="text-sub">{titleEN}</span>{" "}{titleKR}{" "}
                </h1>

            </div> 
        </button>
    )
}

const FooterInfo: React.FC<RecruitInfoProps> = ({title}) => {
  const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-start">
            <div className="flex justify-end items-center pr-[50%] mt-36 ">
                <img src="/images/recruitingDeco.png" className="hidden sm:block w-[327px] translate-x-[95%] opacity-55"/>
            </div>

            <div className="flex flex-col items-center mt-6 sm:mt-12">
                <p  id="mainInfoTitle" 
                    className="mt-9 font-titleMega font-medium font-gradient slow"
                    style={{ textShadow: '0 0 12px rgba(255, 255, 255, 0.33)' }}>{title}</p>
            </div>

            <div className="flex flex-col gap-3 mt-16 w-max">
                <FooterInfoItem titleEN="Project Manager" titleKR="기획 및 총괄" explain="기획하는 직무" iconPATH="/icons/recuitParts/pmIcon.png" />
                <FooterInfoItem titleEN="UI/UX Designer" titleKR="디자이너" explain="디자인하는 직무" iconPATH="/icons/recuitParts/designerIcon.png"/>
                <FooterInfoItem titleEN="FE Developer" titleKR="프론트엔드 개발자" explain="개발하는 직무" iconPATH="/icons/recuitParts/developerIcon.png"/>
                <FooterInfoItem titleEN="BE Developer" titleKR="백엔드 개발자" explain="개발하는 직무" iconPATH="/icons/recuitParts/developerIcon.png"/>
            </div>

            <div className="relative flex flex-col items-center justify-center w-full h-[66vh] sm:h-screen -translate-y-[50%]">
                <BackGroundBlur/>
            </div>
        </div>
    );
  }
  
export default FooterInfo;