"use client";

import AppPreview from "@/components/common/appPreview";
import BackGroundBlur from "@/components/common/backgroundBlur";
import RadiantBox from "@/components/common/radiantBox";
import { MAX_LAYOUT_WIDTH } from "@/constants/layout";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Suspense, useEffect, useRef, useState } from "react";



const Home: React.FC = () => {
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
            start: 'top 80%',
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
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);


  return (
    <div className="flex flex-col items-center overflow-hidden pt-[68px]" >
      <div style={{maxWidth: MAX_LAYOUT_WIDTH}} >
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
          </div>

          <div className="animate-on-scroll-delay flex w-full justify-end">
            <img src="/images/arrowDown.png" className="mt-6 mr-[32px] w-[36px] sm:mt-12 sm:mr-[64px] sm:w-[72px]"/>
          </div>
        </div>

        <div className="animate-on-scroll-delay relative flex w-full items-center justify-center mt-6">
            <AppPreview/>
        </div>


        <div className="min-h-[500px]"/>
      </div>
    </div>
  );
}

export default Home;