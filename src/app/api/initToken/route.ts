import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { botId, appId, appSecret, uid, bpid } = await request.json();

  console.log(botId);

  const res = await fetch(`https://data-dev.rbdialog.co.kr/api/client/auth/v1/init-token/${botId}`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      appId,
      appSecret,
      uid,
      bpid,
      serviceProfile: "LIVE",
    }),
  });

  console.log(res);

  return res;
}
