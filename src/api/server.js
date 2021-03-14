import { createServer, Model } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      score: Model,
    },

    seeds(server) {
      server.db.loadData({
        scores: [
          { name: "Jane Doe", totalPoints: 157, clicks: 5 },
          { name: "Lily Allen", totalPoints: 234, clicks: 8 },
          { name: "John Smith", totalPoints: 390, clicks: 10 },
          { name: "Jane Second", totalPoints: -12, clicks: 5 },
          { name: "Someone999", totalPoints: 23, clicks: 8 },
          { name: "John Smithy", totalPoints: 39, clicks: 3 },
          { name: "Im the best", totalPoints: 25, clicks: 5 },
          { name: "John The Loser", totalPoints: 39, clicks: 1 },
          { name: "Jane Third", totalPoints: -15, clicks: 5 },
          { name: "Lily Third", totalPoints: 25, clicks: 5 },
        ],
      });
    },

    routes() {
      this.namespace = "/highscoreapp";
      this.get("/score", (schema) => {
        return schema.db.scores;
      });

      this.post("/score", (schema, request) => {
        const score = JSON.parse(request.requestBody);
        return schema.db.scores.insert(score);
      });
    },
  });

  return server;
}
