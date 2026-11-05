# orders-web

Browser client for orders-api. Plain JavaScript modules, no build step. Node 20+ for tests.

## Layout
- `src/api/ordersClient.js`: the only code that calls orders-api. Field names follow orders-api's `openapi.json`.
- `src/components/`: UI components. They take data as arguments and return HTML strings.
- `tests/`: `node --test`.

## Commands
- Test: `node --test`

## Conventions
- When orders-api's contract changes, update `ordersClient.js` first, then the components.
