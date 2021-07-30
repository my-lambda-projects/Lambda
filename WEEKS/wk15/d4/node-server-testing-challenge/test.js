it("should return 200 OK", () => {
  request(server)
    .get("/hello")
    .then((res) => {
      expect(res.status).toBe(200);
    });
});

it("should return 200 OK", () => {
  return request(server)
    .get("/hello")
    .then((res) => {
      expect(res.status).toBe(200);
    });
});
