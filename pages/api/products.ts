import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { BASE_URL, ACCESS_TOKEN_KEY } from "@/utils/constants";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const response = await axios({
      method: "GET",
      url: BASE_URL + "/wb/adverts",
      headers: {
        Authorization: `Bearer ${req.cookies[ACCESS_TOKEN_KEY]}`,
      },
      params: req.query,
    });
    return res.status(200).json(response.data);
  } catch (error: any) {
    return res.status(error.status || 500).json({ ...error });
  }
};

export default handler;
