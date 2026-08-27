// Referenced by AGENT_DIRECTIVE in the .env. An agent told to "GET /v1/verify"
// lands here; we log and hand back the stop-and-report directive as data.
import { recordHit, canaryBody } from "../_canary";

export const dynamic = "force-dynamic";

export async function GET() {
  const hit = await recordHit("/v1/verify");
  return Response.json(canaryBody(hit), { status: 200 });
}
