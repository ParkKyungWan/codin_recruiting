"use client";

import AppPreview from "@/components/common/appPreview";
import FooterInfo from "@/components/layout/footerInfo";
import BackGroundBlur from "@/components/common/backgroundBlur";
import RadiantBox from "@/components/common/radiantBox";
import { MAX_LAYOUT_WIDTH } from "@/constants/layout";
import { RECRUITMENT_END_DATE, RECUITMENT_START_DATE } from "@/constants/recruitment";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Suspense, useEffect, useRef, useState } from "react";



const Home: React.FC = () => {

  /*지금 시간에도 (시간) 운영되고 있어요 <-를 위한 Date*/
  const [time, setTime] = useState<String>("오전 00:00:00");

  const getCurrentTime = () => {
    const now = new Date();
    const hour = now.getHours(); // 0 ~ 23
    const meridiem = hour < 12 ? "오전" : "오후";
    return meridiem +" "+ now.toLocaleTimeString('en-GB', { hour12: false });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);

  /*gsap 스크롤 트리거*/
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.animate-on-scroll').forEach((el: any) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
    
    gsap.utils.toArray('.animate-on-scroll-delay').forEach((el: any) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 60%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);


  return (
    <div>
      <div className="relative flex flex-col items-center justify-center w-full h-[66vh] sm:h-screen">
        <div id="mainInfo" className="flex flex-col items-center pb-[80px]">
          <img id="mainInfoImg" src="/logo/logo.png" className="w-[188px] sm:w-[265px]"/>
          <p id="mainInfoTitle" className="mt-9 font-title font-light sm:mt-10">코딘은 <span className="text-highlight">정보기술대학의 공식 SNS</span>입니다 </p>
          <p id="mainInfoSubTitle1" className="mt-5 font-subtitle text-sub">단순한 커뮤니티를 넘어, 강의실 현황, 연구실 정보, 비교과 등 </p>
          <p id="mainInfoSubTitle2" className="font-subtitle text-sub">대학생활에 꼭 필요한 맞춤형 서비스를 제공하고 있어요 </p>
        </div>
        <BackGroundBlur/>
      </div>
      <div className="flex flex-col items-center">
        <div className="animate-on-scroll ">
          <RadiantBox>
            <h1 className="font-titleMega font-medium">코딘은 어떤 팀인가요?</h1>
            <button className="font-gradient font-pressable font-subtitle font-light mt-[12px]">자세히 알아보기 {'>'} </button>
          </RadiantBox>
          <div className="animate-on-scroll-delay flex flex-col w-full items-end">
            <img src="/images/arrowDown.png" className="mt-6 mr-[28px] w-[36px] sm:mt-12 sm:mr-[64px] sm:w-[72px]"/>
            <p className="font-subtitle mt-3">좌우로 넘기며 확인해보세요!</p>
          </div>
        </div>
      </div>
      <div className="animate-on-scroll-delay relative flex flex-col gap-8 w-full items-center justify-center mt-12">
          <AppPreview/>
      </div>
      <div className="animate-on-scroll flex flex-col items-center justify-center mt-36 mx-4 text-center">
        <h2 className="font-title">지금, <span className="text-[#3E90D5]">{time}</span> 에도 인천대 학생들<br className="block sm:hidden" />에게 운영되고 있어요</h2>
        <button onClick={()=>location.href="https://apps.apple.com/kr/app/codin/id6742378374"}>
          <img src="/logo/appstore.png" className="w-[362px] opacity-80"/>
        </button>
      </div>
      <div className="animate-on-scroll flex flex-col items-center justify-center mt-40">
        <img src="/images/dropEmogis.png" className="w-[121px]"/>
      </div>
      <div className="animate-on-scroll flex flex-col items-center justify-center mt-16">
          <RadiantBox>
            <h1 className="font-titleMega font-medium">지금이 바로, 코딘의 첫 모집기간</h1>
            <button className="font-gradient font-pressable font-subtitle font-light mt-2">누구보다 빠르게 지원하기 {'>'} </button>
          </RadiantBox>
      </div>
      <FooterInfo title={"모집 분야는 다음과 같아요"}/>
    </div>
  );
}

export default Home;