import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { BASE_URL, AUTH_DATA, ACCESS_TOKEN_KEY } from "@/utils/constants";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const { data } = await axios({
      method: "POST",
      url: BASE_URL + "/users/login/",
      data: AUTH_DATA,
    });
    res.setHeader("Set-cookie", `${ACCESS_TOKEN_KEY}=${data.access}; Path=/; `);
    return res.status(200).json(data);
  } catch (error: any) {
    return res.status(error.status || 500).json({ ...error });
  }
};
