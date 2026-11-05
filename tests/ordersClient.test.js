import { test } from "node:test";
import assert from "node:assert/strict";
import { listOrders } from "../src/api/ordersClient.js";
import { OrderList } from "../src/components/OrderList.js";

test("listOrders returns the API's orders", async () => {
  const fake = async () => ({ ok: true, json: async () => [{ id: "1", item: "widget", quantity: 2 }] });
  assert.deepEqual(await listOrders("http://api", fake), [{ id: "1", item: "widget", quantity: 2 }]);
});

test("OrderList escapes item names", () => {
  assert.match(OrderList([{ id: "1", item: "<b>", quantity: 1 }]), /&lt;b&gt;/);
});
