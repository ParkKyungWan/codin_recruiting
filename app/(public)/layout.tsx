import Header from "@/components/layout/header";
import { MAX_LAYOUT_WIDTH } from "@/constants/layout";

export default function PublicLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    <div className="flex flex-col items-center">    
        <Header/>
        <div className="flex-col mt-[68px] w-full" style={{maxWidth: MAX_LAYOUT_WIDTH}}>
            {children}
        </div>
    </div>
    );
  }
  