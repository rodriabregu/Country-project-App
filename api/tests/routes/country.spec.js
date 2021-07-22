/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Country, conn } = require("../../src/db.js");

const agent = session(app);

describe("Country routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() => Country.sync({ force: true }));
  /* .then(() => Country.create(Country))); */
  /*   describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries/ARG').expect(200)
    );
  }); */
  describe("GET /countries", () => {
    it("should exptected receibed 200", () => {
      agent.get("/countries").expect(200);
    });
  });

  describe("GET /countries/:idPais", () => {
    it("should get 200 id", async () => { await agent.get("/countries/ARG").expect(404)}) //
    it("should get 200 name", () =>
      agent.get("/countries?name=Argentina").expect(200));
    it("should get 404", () => agent.get("/countries/ARGEN").expect(404));
  });

  describe("GET /activity", () => {
    it("should exptected receibed 200", () => {
      agent.get("/activity").expect(200);
    });
  });

  describe("POST create /activity", () => {
    it("It should return a created activity (200)", () => {
      agent
        .post("/activity")
        .send({
          name: "Volar",
          difficulty: "1",
          duration: "10",
          season: "Summer",
        })
        .then(() => {
          expect("Content-Type", /json/);
        });
    });
  });
});
