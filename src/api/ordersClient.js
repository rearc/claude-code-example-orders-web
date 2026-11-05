// Calls orders-api. Field names follow orders-api's openapi.json (Order: id, item, quantity).
export async function listOrders(baseUrl, fetchImpl = fetch) {
  const res = await fetchImpl(`${baseUrl}/orders`);
  if (!res.ok) throw new Error(`listOrders failed: ${res.status}`);
  return res.json();
}

export async function createOrder(baseUrl, { item, quantity }, fetchImpl = fetch) {
  const res = await fetchImpl(`${baseUrl}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ item, quantity }),
  });
  if (!res.ok) throw new Error(`createOrder failed: ${res.status}`);
  return res.json();
}
