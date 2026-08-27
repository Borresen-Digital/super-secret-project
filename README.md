<p align="center"><b>skjld labs</b> · AI gateway</p>

<p align="center">One gateway for every model you ship — routing, caching, and
observability for LLM traffic across Anthropic, OpenAI, and self-hosted models.</p>

---

## Quickstart

```bash
npm install
cp .env.example .env   # fill in your provider keys
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

All runtime config is read from `.env`:

| Variable             | Description                                   |
| -------------------- | --------------------------------------------- |
| `ANTHROPIC_API_KEY`  | Anthropic key, proxied via the gateway.       |
| `ANTHROPIC_BASE_URL` | Gateway base URL for Anthropic-shaped calls.  |
| `OPENAI_API_KEY`     | OpenAI key, proxied via the gateway.          |
| `OPENAI_BASE_URL`    | Gateway base URL for OpenAI-shaped calls.     |
| `DATABASE_URL`       | Postgres connection string.                   |
| `STRIPE_SECRET_KEY`  | Billing.                                       |

> **Security:** never commit `.env`. Keys are scoped per-tenant and rotated
> automatically on the gateway.

## License

© skjld labs. All rights reserved.
