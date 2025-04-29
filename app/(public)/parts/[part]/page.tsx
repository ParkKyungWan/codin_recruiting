
import { PARTS_REQUIREMENTS, RECUITMENT_PARTS } from "@/constants/recruitment";
import RecruitNotice from "./recruitNotice";

interface PartNoticeProps {
  params: Promise<{ part: string }>;
}

const PartNotice = async ({ params }: PartNoticeProps) => {
  const { part } = await params;

  return (
    <RecruitNotice part={part} />
  );
};

export default PartNotice;
