import { JSX } from "react";

export const RECUITMENT_START_DATE = "25.04.00" as const;
export const RECRUITMENT_END_DATE = "25.05.00" as const;

/* 파트 별 정보 */
export const RECUITMENT_PARTS = [
    {
      simple: "기획/PM",
      titleEN: "Project Manager",
      titleKR: "기획 및 총괄",
      explain: "새로운 기능을 기획하고 팀을 운영해요",
      iconPATH: "/icons/recruitParts/pmIcon.png",
      link: "pm",
    },
    {
      simple: "디자이너",
      titleEN: "UI/UX Designer",
      titleKR: "디자이너",
      explain: "UI/UX, 레이아웃, 아이콘 등을 디자인해요",
      iconPATH: "/icons/recruitParts/designerIcon.png",
      link: "designer",
    },
    {
      simple: "프론트엔드",
      titleEN: "FE Developer",
      titleKR: "프론트엔드 개발자",
      explain: "디자인을 구현하고 인터랙션을 개발해요",
      iconPATH: "/icons/recruitParts/developerIcon.png",
      link: "frontend",
    },
    {
      simple: "백엔드",
      titleEN: "BE Developer",
      titleKR: "백엔드 개발자",
      explain: "데이터를 설계하고 서버 API를 구현해요",
      iconPATH: "/icons/recruitParts/developerIcon.png",
      link: "backend",
    },
] as const;


export interface Requirement {
  link: string;
  skill: string;
  requirements: JSX.Element[];
}

export const COMMON_REQUIREMENTS : Requirement = {
  link: "",
  skill: "",
  requirements: [
    <span><span className="text-sub">지원분야 관련</span> 협업 경험이 있으신 분</span>,
    <span><span className="text-sub">매 주</span> 화요일/금요일 22~23시 온라인 정기회의<span className="text-sub">에 참여 가능한 분</span></span>
  ],
}

export const JOINING_PROCESS : JSX.Element = <span className="text-sub">{"서류 지원 > 1차 합격 > 면접 진행 > 최종 합류 및 수습 기간"} </span>


export const PARTS_REQUIREMENTS : Requirement[] = [
  {
    link: "pm",
    skill: "",
    requirements: [
      <span></span>,
    ],
  },
  {
    link: "designer",
    skill: "",
    requirements: [
      <span></span>,
    ],
  },
  {
    link: "frontend",
    skill: "Next.js, ReactNative, Tailwind",
    requirements: [
      <span>Github를 활용한 협업<span className="text-sub">이 가능하신 분</span></span>,
      <span>React기반 프레임워크<span className="text-sub">에 익숙하신 분</span></span>,
      <span className="font-gradient">UI/UX, 인터랙션 구현에 관심 많으신 분</span>,
    ],
  },
  {
    link: "backend",
    skill: "",
    requirements: [
      <span></span>,
    ],
  },
  
];

