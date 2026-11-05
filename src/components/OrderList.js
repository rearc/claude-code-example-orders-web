import { escapeHtml } from "./html.js";

export function OrderList(orders) {
  const rows = orders
    .map((o) => `<li>${escapeHtml(o.item)} x ${escapeHtml(o.quantity)}</li>`)
    .join("");
  return `<ul class="orders">${rows}</ul>`;
}
