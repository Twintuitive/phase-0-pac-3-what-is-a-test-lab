const { name, height, message } = require("../index.js");
const expect = require("chai").expect;

describe("what-is-a-test", () => {
  describe("Name", () => {
    it('returns "Susan"', () => {
      expect(name).to.equal("Susan");
    });
  });

  describe("Height", () => {
    it("is less than 40 and greater than 0", () => {
      expect(height).to.be.above(0);
      expect(height).to.be.below(40);
    });
  });

  describe("Message", () => {
    it("gives the name and height", () => {
      expect(message).to.include(name);
      expect(message).to.include(height);
    });
  });
});
