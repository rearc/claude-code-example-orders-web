---
name: add-api-call
description: Call a new or changed orders-api endpoint from orders-web. Use when the API contract changes or a component needs new data.
---
# Add an API call
1. Read the endpoint and schema in orders-api's `openapi.json` (ask for it if the repo isn't loaded).
2. Add or change the function in `src/api/ordersClient.js`; keep field names as the contract has them.
3. Add a test in `tests/` with a stubbed `fetch`.
4. Update the components that use it, then run `node --test`.
