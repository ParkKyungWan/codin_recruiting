// app/(public)/apply/page.tsx  ← 이 파일에서!

import { Suspense } from "react";
import ApplyForm from "./applyForm";

const ApplyPage = () => {
  return (
    <Suspense>
      <ApplyForm />
    </Suspense>
  );
}

export default ApplyPage;