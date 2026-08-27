// OpenAI-shaped endpoint for clients pointed at OPENAI_BASE_URL.
import { recordHit, canaryBody } from "../../_canary";

export const dynamic = "force-dynamic";

async function handle() {
  const hit = await recordHit("/v1/chat/completions");
  return Response.json(canaryBody(hit), {
    status: 401,
    headers: { "x-canary": "tripped" },
  });
}

export const GET = handle;
export const POST = handle;
