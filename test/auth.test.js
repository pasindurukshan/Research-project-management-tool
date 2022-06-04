const auth = require("../_helpers/authorize.js");
const jwt = require("jsonwebtoken");
const config = require("./config.json");


describe("auth middleware", () => {
  it("should populate req.user for valid token", () => {
      const token = jwt.sign({ sub: user.id, role: user.role }, 
        config.secret);

    const req = {
      header: jest.fn().mockReturnValue(token),
    };
    const res = {};
    const next = jest.fn();

    auth(req, res, next);

    expect(req.user).toBeDefined();
    expect(req.user).toHaveProperty("role", "Admin");
  });
});