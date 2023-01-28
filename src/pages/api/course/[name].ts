import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  description: string;
  q4: {
    name: string;
    duration: number;
    description: string;
    outline: { item: string; url?: string }[];
    projects: {
      item: string;
      url?: string;
    }[];
  };
  q5: {
    name: string;
    duration: number;
    description: string;
    outline: { item: string; url?: string }[];
    projects: {
      item: string;
      url?: string;
    }[];
  };
};

type Message = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Message>
) {
  let { name } = req.query;

  if (typeof name === "string") {
    name = name.toLowerCase();
  }

  switch (name) {
    case "metaverse":
      // res.status(200).json(metaverseCourse);
      break;

    default:
      res.status(404).json({ message: `Course ${name} not found` });
      break;
  }
}
