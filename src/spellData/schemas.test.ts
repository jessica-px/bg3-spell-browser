import { spellSchema } from "./schemas";
import spellData from "./index";

test("JSON Schemas", () => {
  it("Spell JSONs pass validation", () => {
    spellData.forEach((json) => {
      const result = spellSchema.validate(json);
      expect(result.error).toEqual(undefined);
    });
  });
});
