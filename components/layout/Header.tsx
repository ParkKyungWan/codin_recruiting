import { RECUITMENT_START_DATE, RECRUITMENT_END_DATE } from "@/constants/recruitment";
import { MAX_LAYOUT_WIDTH } from "@/constants/layout";

// components/Header.tsx
export default function Header() {
    return (
      <header className="fixed top-0 left-0 w-full flex justify-center items-center bg-[rgba(255,255,255,0.04)] py-4 px-4 sm:px-8">
        <div className="flex justify-center sm:justify-between items-center w-full gap-4" style={{ maxWidth: MAX_LAYOUT_WIDTH }}>
            <div id="LogoArea">
                <img src="/logo/logo_recuiting.png" className="min-w-[108px] sm:min-w-[162px]" width={162}/>
            </div>
            <div id="BtnsArea" className="text-sm font-medium flex gap-2 sm:gap-4 text-[rgba(255,255,255,0.70)]">
                <p id="모집기간" className="sm:flex items-center whitespace-nowrap hidden">{RECUITMENT_START_DATE} ~ {RECRUITMENT_END_DATE}</p>
                <button id="모집분야" className="flex items-center whitespace-nowrap w-max"><span>모집 분야</span> <img src="/icons/listdown.svg" width={24}/></button>
                <button id="지원하기" className="flex items-center whitespace-nowrap rounded-lg sm:rounded-xl bg-[rgba(255,255,255,0.25)] py-2 px-5 sm:py-3 sm:px-10 ">바로 지원하기</button>
            </div>
        </div>
      </header>
    );
  }
  