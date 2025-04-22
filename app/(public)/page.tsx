import BackGroundBlur from "@/components/common/backgroundBlur";
import RadiantBox from "@/components/common/radiantBox";
import Header from "@/components/layout/header";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex flex-col items-center w-full h-[66vh] sm:h-screen">
        <div id="mainInfo" className="flex flex-col items-center">
          <img id="mainInfoImg" src="/logo/logo.png" className="w-[188px] mt-[136px] sm:w-[265px] sm:mt-[180px]"/>
          <p id="mainInfoTitle" className="mt-9 font-title font-light sm:mt-10">코딘은 <span className="text-highlight">정보기술대학의 공식 SNS</span>입니다 </p>
          <p id="mainInfoSubTitle1" className="mt-5 font-subtitle text-sub">단순한 커뮤니티를 넘어, 강의실 현황, 연구실 정보, 비교과 등 </p>
          <p id="mainInfoSubTitle2" className="font-subtitle text-sub">대학생활에 꼭 필요한 맞춤형 서비스를 제공하고 있어요 </p>
        </div>
        <BackGroundBlur/>
      </div>
      <div className="flex flex-col items-center">
        <RadiantBox>
          <h1 className="font-titleMega font-medium">코딘은 어떤 팀인가요?</h1>
        </RadiantBox>
      </div>
    </div>
  );
}

export default Home;