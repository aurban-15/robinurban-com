import { createHmac } from "crypto";

export async function POST(request) {
  const rawBody = await request.text();
  const signature = request.headers.get("x-signature");

  const expected = createHmac("sha256", process.env.LEMONSQUEEZY_WEBHOOK_SECRET)
    .update(rawBody)
    .digest("hex");

  if (signature !== expected) {
    return new Response("Invalid signature", { status: 400 });
  }

  const payload = JSON.parse(rawBody);
  const eventName = payload.meta?.event_name;

  if (eventName === "order_created") {
    console.log("order_created", payload.data);
  }

  return new Response("OK", { status: 200 });
}
