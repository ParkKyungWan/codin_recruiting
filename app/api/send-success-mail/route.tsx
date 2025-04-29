import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json(); // 보내는 데이터 받기
    const { name, email } = data;

    // 메일 서버 세팅 
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, 
        pass: process.env.GMAIL_PASS, 
      },
    });

    // 메일 내용
    await transporter.sendMail({
      from: `"코딘(Codin) 지원 담당자" <${process.env.GMAIL_USER}>`,
      to: email,  // 지원자가 쓴 이메일
      subject: "지원이 정상적으로 접수되었습니다!",
      text: `${name}님, 지원해주셔서 감사합니다.\n 되도록 빠른 시일 내, 메일과 문자를 통해 연락드릴게요. \n\n문의사항은 인스타그램 @codin_inu로 DM 부탁드립니다!`,
      html: `<br/> <img src="https://codin.inu.ac.kr/images/logo.png" style="width:130px;"/> <br/> <br/><p style="color:black"><strong>${name}</strong>님, 지원해주셔서 감사합니다. <br/> <span style="color:black"> 되도록 빠른 시일 내, 메일과 문자를 통해 연락드릴게요</span> <br/><br/> <span style="color:#3E83F9;">문의 사항, 인스타그램 @codin_inu </span> </p>`,
    });
    console.log("메일 전송 성공", email);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("메일 전송 실패:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
