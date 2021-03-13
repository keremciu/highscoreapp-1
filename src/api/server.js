import { createServer, Model } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
    },

    seeds(server) {
      server.db.loadData({
        scores: [
          { name: "Jane Doe", totalPoints: 157, clicks: 5 },
          { name: "Lily Allen", totalPoints: 234, clicks: 8 },
          { name: "John Smith", totalPoints: 390, clicks: 10 },
        ],
      });
    },

    routes() {
      this.namespace = "/highscoreapp";
      this.get("/score", (schema) => {
        return schema.scores.all();
      });

      this.post("/score", (schema, request) => {
        const score = JSON.parse(request.requestBody).data;
        return schema.db.scores.insert(score);
      });
    },
  });

  return server;
}
