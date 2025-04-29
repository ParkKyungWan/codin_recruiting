"use client";
import FooterInfo from "@/components/layout/footerInfo";
import { COMMON_REQUIREMENTS, JOINING_PROCESS, PARTS_REQUIREMENTS, RECUITMENT_PARTS, } from "@/constants/recruitment";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface RecuitNoticeProps {
  part: string;
}

gsap.registerPlugin(ScrollTrigger);

const RecruitNotice = ({part} : RecuitNoticeProps) => {
  const router = useRouter();

  const REQUIREMENT = PARTS_REQUIREMENTS.find((item) => item.link === part);
  const PART_DATA = RECUITMENT_PARTS.find((item) => item.link === part);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [initialScroll, setInitialScroll] = useState(0);

  useEffect(() => {
    if (!buttonRef.current || !wrapperRef.current) return;

    const button = buttonRef.current;
    const wrapper = wrapperRef.current;

    const mm = gsap.matchMedia();
    const translateLimit = wrapper.offsetHeight - button.offsetHeight;

    mm.add(
      "(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: wrapper,
          start: "bottom bottom",
          end: "bottom 50%",
          scrub: true,
          onUpdate: (self) => {
            if (initialScroll === 0) {
              setInitialScroll(self.scroll());
            }
            const scrollAmount = self.scroll() - initialScroll;
            button.style.transform = `translateY(${scrollAmount > translateLimit ? translateLimit : scrollAmount > 0 ? scrollAmount : 0}px)`;
          },
        });
      }
    );

    mm.add(
      "(max-width: 1023px)", () => {
        ScrollTrigger.create({
          trigger: wrapper,
          start: "top bottom ",
          end: "bottom 50%",       // wrapper가 화면 상단을 넘어 사라질 때
          onEnter: () => {
            gsap.to(button, { autoAlpha: 1, duration: 0.3 });
          },
          onLeave: () => {
            gsap.to(button, { autoAlpha: 0, duration: 0.3 });
          },
          onEnterBack: () => {
            gsap.to(button, { autoAlpha: 1, duration: 0.3 });
          },
          onLeaveBack: () => {
            gsap.to(button, { autoAlpha: 0, duration: 0.3 });
          },
        });
      }
    )
    

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

    return (
      <motion.div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center lg:items-start justify-center w-full px-4 sm:w-[80%] lg:w-max py-8 md:py-25">
          
          <motion.div className="relative w-full lg:max-w-[88%] p-[1px] rounded-xl bg-[conic-gradient(from_0deg,_rgba(45,166,255,0.5)_2%,_rgba(13,153,255,0.5)_14%,_rgba(86,183,255,0.5)_31%,_rgba(147,209,255,0.5)_48%,_rgba(207,235,255,0.5)_65%,_rgba(132,202,255,0.5)_80%,_rgba(62,173,255,0.5)_96%)]"
            initial={{ x: -120, y: -200, scale: 1.2, opacity: 0 }} animate={{ x: 0, y: 0, scale: 1, opacity: 1, boxShadow: "0 0 50px 24px rgba(66, 156, 247, 0.125)" }} transition={{ type: "spring", stiffness: 200, damping: 15, boxShadow:{delay:0.3}}}>
          <div className="bg-[#0a0a0a] w-full flex flex-col gap-3 h-full py-8 px-8 md:px-12 border-1 border-[rgba(0,0,0,1)] rounded-xl">
            <h3 className="font-titleMega font-bold">{PART_DATA?.titleEN} <br className="sm:hidden"/> {PART_DATA?.titleKR}</h3>
            <p className="font-subtitle whitespace-nowrap"><span className="hidden sm:inline pr-2">사용하는 기술</span><span className="font-gradient slow">{REQUIREMENT?.skill}</span></p>
          </div>
          </motion.div>
  
          <motion.div className="flex flex-col sm:flex-row items-start justify-between w-full lg:w-max mt-10 sm:mt-12 md:mt-24 gap-6 "
            layout initial={{ opacity: 0 }} animate={{ opacity: 1, x:0, y: 0, transition: { delay: 0.2, duration: 0.3, ease: 'easeOut' }} }>
            {/* 내용 */}
            <div ref={wrapperRef} className="flex px-2 sm:px-0 flex-col gap-12 text-sm leading-relaxed">
              {/* 공통 조건 */}
              <div>
                <div className="flex items-center gap-2 mb-2 font-title">
                  ✅ <h4 className="font-medium">공통 조건</h4>
                </div>
                <ul className="pl-6 list-disc font-light list-inside text-[16px] whitespace-normal sm:whitespace-nowrap">
                  {COMMON_REQUIREMENTS?.requirements?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
  
              {/* 바라는 점 */}
              <div>
                <div className="flex items-center gap-2 mb-2 font-title">
                  👨‍💻 <h4 className="font-medium">{PART_DATA?.titleEN}에게 바라는 점</h4>
                </div>
                <ul className="pl-6 list-disc font-light list-inside text-[16px] whitespace-normal sm:whitespace-nowrap">
                  {REQUIREMENT?.requirements?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
  
              <hr className="w-[108px] h-[1px]"/>
              {/* 합류 절차 */}
              <div>
                <div className="flex items-center gap-2 mb-2 font-title">
                  🚀 <h4 className="font-medium">합류 절차</h4>
                </div>
                <ul className="pl-6 list-disc font-light list-inside text-[16px] whitespace-normal sm:whitespace-nowrap">
                  {JOINING_PROCESS}
                </ul>
              </div>
            </div>
  
            {/* 지원하기 버튼 */}
            <motion.div className="w-full relative"
              initial={{ opacity: 0 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.3, ease: 'easeOut' } }}>
              <button ref={buttonRef} onClick={()=>{router.push(`/apply?part=${PART_DATA?.titleKR}`)}} className="w-[90%] sm:w-[80%] bg-gradient-to-r from-blue-400 to-blue-500 font-medium rounded-2xl px-8 py-3 shadow-lg lg:static fixed bottom-8 left-1/2 transform -translate-x-1/2 lg:translate-x-8 whitespace-nowrap lg:w-[230px]">
                지원하러 가기
              </button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div className="w-full"
          initial={{ opacity: 0 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.3, ease: 'easeOut' } }}>
          <FooterInfo title="다른 분야의 공고도 확인해보세요"/>
        </motion.div>
      </motion.div>
    );
}

export default RecruitNotice
