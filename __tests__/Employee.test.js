/* __tests__/queries.js */
const app = require("../server");
const supertest = require("supertest");
 
const request = supertest(app);

 
test("fetch employees", async (done) => {
  request
    .post("/graphql")
    .send({
      query: "{ employees{ edges { node { id, name } } } }",
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) return done(err);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.data.employees.edges.length).toEqual(20);
      done();
    });
});

test("fetch employee by ID", async (done) => {
    request
      .post("/graphql")
      .send({
        query: "{ employee(id: 1){ id, name } }",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.body).toBeInstanceOf(Object);
        expect(res.body.data.employee.id).toEqual(1);
        expect(res.body.data.employee.name).toEqual('Luke Skywalker');
        done();
      });
  });

test("fetch employee by first and after parameter", async (done) => {
    request
      .post("/graphql")
      .send({
        query: "{ employees(first: 5, after: 0){ edges { node { id, name } } } }",
      })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) return done(err);
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.data.employees.edges.length).toEqual(5);
      done();
    });
});

