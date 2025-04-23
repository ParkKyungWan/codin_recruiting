"use client";

import { RECUITMENT_START_DATE, RECRUITMENT_END_DATE } from "@/constants/recruitment";
import { MAX_LAYOUT_WIDTH } from "@/constants/layout";

const Footer: React.FC = () => {
    return (
      <footer className="w-full flex justify-between items-center px-4 sm:px-8 py-6">
        <div>
            
        </div>
        <div id="logoAndInfo" className="flex gap-4">
            <div id="Info" className="flex flex-col text-[12px] text-sub opacity-33 text-end">
                <p>Instagram. <b>@codin_inu</b></p>
                <p>DM으로 궁금하신 사항을 질문해주세요</p>
            </div>
            <img id="logo" src="/logo/inu.png" className="opacity-50 w-[80px] sm:w-[120px] object-contain"/>
        </div>
      </footer>
    );
  }
  
export default Footer;