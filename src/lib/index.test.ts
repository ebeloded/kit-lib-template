import { describe, expect, it } from "vitest";
import { hello } from "./index";

describe("suite", () => {
  it("serial test", async () => {
    expect(hello).toBe("world");
  });
});
