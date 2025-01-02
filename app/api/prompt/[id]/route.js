import { connectDB } from "@utils/db";
import Prompt from "@models/prompt";

export const GET = async (req, { params }) => {
  try {
    await connectDB();
    const { id } = await params;
    const prompts = await Prompt.findById({ id }).populate("creator");
    if (!prompts) {
      return new Response(JSON.stringify({ message: "Prompt not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(prompts), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 501,
    });
  }
};

export const PATCH = async (req, { params }) => {
  try {
    await connectDB();
    const { prompt, tag } = await params;

    const existingPrompt = await Prompt.findById(id);
    if (!existingPrompt) {
      return new Response(JSON.stringify({ message: "Prompt not found" }), {
        status: 404,
      });
    }

    existingPrompt.prompt = prompt;
    existingPrompt.tags = tag;

    await existingPrompt.save();

    return new Response(JSON.stringify(prompt), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 501,
    });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connectDB();
    const { id } = await params;
    const prompt = await Prompt.findById(id);
    if (!prompt) {
      return new Response(JSON.stringify({ message: "Prompt not found" }), {
        status: 404,
      });
    }
    await prompt.remove();
    return new Response(JSON.stringify({ message: "Prompt deleted" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 501,
    });
  }
};
