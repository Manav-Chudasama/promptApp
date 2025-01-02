import { connectDB } from "@utils/db";
import Prompt from "@models/prompt";

export const GET = async (request, { params }) => {
  try {
    await connectDB();
    const { id } = await params;
    const prompts = await Prompt.find({ creator: id }).populate("creator");
    return new Response(JSON.stringify(prompts), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 501,
    });
  }
};
