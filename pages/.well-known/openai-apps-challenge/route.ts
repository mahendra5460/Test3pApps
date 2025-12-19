import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).setHeader("Content-Type", "text/plain");
  res.send("AIoP_R6STqSRPySYC-pSOB-88psw-p5ewTFN9Fj_SUU");
}
