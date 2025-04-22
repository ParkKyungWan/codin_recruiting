import Header from "@/components/layout/header";
import { MAX_LAYOUT_WIDTH } from "@/constants/layout";

export default function PublicLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    <div className="flex flex-col items-center overflow-visible">    
        <Header/>
        <div className="flex-col w-full overflow-visible">
            {children}
        </div>
    </div>
    );
  }
  