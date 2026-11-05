---
paths:
  - "src/components/**"
---
# Components
- Never call `fetch` from a component; go through `src/api/ordersClient.js`.
- Escape every value you put into HTML with `escapeHtml` from `src/components/html.js`.
