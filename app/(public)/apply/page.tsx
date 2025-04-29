"use client";
import React, { useState } from "react";

const Introduction = () => {
  const [formData, setFormData] = useState({
    field: "",
    name: "",
    phone: "",
    email: "",
    school: "",
    degree: "",
    portfolioLink: "",
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const { field, name, phone, email, school, degree, portfolioLink } = formData;
    if (!field || !name || !phone || !email || !school || !degree || (!portfolioLink && !selectedFile)) {
      alert("필수 항목을 모두 입력해 주세요.");
      return;
    }
    alert("제출 완료!");
  };

  return (
    <div className="max-w-[600px] mx-auto py-20 px-6 text-white">
      <h1 className="text-4xl font-bold mb-16">지원서 작성</h1>

      {/* 지원 분야 */}
      <div className="mb-10">
        <label className="block font-semibold mb-3">
          지원 분야 <span className="text-sky-500">*</span>
        </label>
        <select name="field" value={formData.field} onChange={handleChange} className="appearance-none w-full bg-black border border-[rgba(224,241,254,0.5)] rounded-lg px-4 py-3">
          <option value="">선택하세요</option>
          <option>FE Developer 프로젝트</option>
        </select>
      </div>

      {/* 성함 / 연락처 / 이메일 */}
      <div className="mb-10">
        <label className="block font-semibold mb-3">
          성함 / 연락처 / 이메일 <span className="text-sky-500">*</span>
        </label>
        <input name="name" type="text" placeholder="홍길동" value={formData.name} onChange={handleChange} className="appearance-none w-full bg-black border border-[rgba(224,241,254,0.5)] rounded-lg px-4 py-3 mb-3" />
        <input name="phone" type="text" placeholder="010-1234-5678" value={formData.phone} onChange={handleChange} className="appearance-none w-full bg-black border border-[rgba(224,241,254,0.5)] rounded-lg px-4 py-3 mb-3" />
        <input name="email" type="email" placeholder="example@inu.ac.kr" value={formData.email} onChange={handleChange} className="appearance-none w-full bg-black border border-[rgba(224,241,254,0.5)] rounded-lg px-4 py-3" />
      </div>

      {/* 학교 / 최종 학력 */}
      <div className="mb-10">
        <label className="block font-semibold mb-3">
          학교 / 최종 학력 <span className="text-sky-500">*</span>
        </label>
        <input name="school" type="text" placeholder="코딩대학교" value={formData.school} onChange={handleChange} className="appearance-none w-full bg-black border border-[rgba(224,241,254,0.5)] rounded-lg px-4 py-3 mb-3" />
        <select name="degree" value={formData.degree} onChange={handleChange} className="appearance-none w-full bg-black border border-[rgba(224,241,254,0.5)] rounded-lg px-4 py-3">
          <option value="">선택하세요</option>
          <option>재학 중이에요</option>
        </select>
      </div>

      {/* 전공명 */}
      <div className="mb-10">
        <label className="block font-semibold mb-3">전공명</label>
        <input type="text" placeholder="컴퓨터공학부" className="appearance-none w-full bg-black border border-[rgba(224,241,254,0.5)] rounded-lg px-4 py-3" />
      </div>

      {/* 자기소개서 질문 3개 */}
      <div className="mb-10">
        <label className="block font-semibold mb-4">
          1. 대학 생활 중 가장 열정을 쏟았던 활동은 무엇이며, 어떤 역할을 맡았는지 서술해주세요. (500자 이내)
        </label>
        <textarea className="appearance-none w-full bg-black border border-[rgba(224,241,254,0.5)] rounded-lg px-4 py-3 h-40" />
      </div>

      <div className="mb-10">
        <label className="block font-semibold mb-4">
          2. 협업 과정에서, 갈등을 해결하기 위한 본인만의 방식이 있다면 서술해주세요 (500자 이내)
        </label>
        <textarea className="appearance-none w-full bg-black border border-[rgba(224,241,254,0.5)] rounded-lg px-4 py-3 h-40" />
      </div>

      <div className="mb-10">
        <label className="block font-semibold mb-4">
          3. 선택하신 분야에서 역량을 높이기 위해 노력하신 경험이 있다면 서술해주세요. (500자 이내)
        </label>
        <textarea className="appearance-none w-full bg-black border border-[rgba(224,241,254,0.5)] rounded-lg px-4 py-3 h-40" />
      </div>

      {/* 포트폴리오 */}
      <div className="mb-16">
        <label className="block font-semibold mb-4">
          포트폴리오 (최소 택 1) <span className="text-sky-500">*</span>
        </label>
        <p className="text-sm text-gray-400 mb-4">
          지원자 분의 경험이 드러나는 포트폴리오 파일, 혹은 링크를 첨부해주세요
        </p>
        <label className="inline-block w-full text-center bg-black border border-[rgba(224,241,254,0.5)] rounded-lg px-4 py-3 mb-2 cursor-pointer hover:bg-[rgba(255,255,255,0.05)] transition">
          파일 선택하기
          <input type="file" onChange={handleFileChange} className="hidden" />
        </label>
        {selectedFile && (
          <p className="text-sm text-gray-300 mb-4">첨부: {selectedFile.name}</p>
        )}
        <input name="portfolioLink" type="url" placeholder="https://example.sample.url ..." value={formData.portfolioLink} onChange={handleChange} className="appearance-none w-full bg-black border border-[rgba(224,241,254,0.5)] rounded-lg px-4 py-3" />
      </div>

      <button onClick={handleSubmit} className="w-full py-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-xl font-semibold hover:bg-sky-600 transition">
        제출하기
      </button>
    </div>
  );
};

export default Introduction;