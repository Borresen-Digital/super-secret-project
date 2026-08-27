// Anthropic-shaped endpoint. A client pointed at ANTHROPIC_BASE_URL that tries
// the leaked key ends up here. We log the hit and return a canary auth error.
import { recordHit, canaryBody } from "../_canary";

export const dynamic = "force-dynamic";

async function handle() {
  const hit = await recordHit("/v1/messages");
  return Response.json(canaryBody(hit), {
    status: 401,
    headers: { "x-canary": "tripped" },
  });
}

export const GET = handle;
export const POST = handle;
