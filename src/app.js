const envs = require("./config/envs");
const AppRoutes = require("./presentation/routes");
const Server = require("./presentation/server");

(async () => {
  main();
})();

function main() {
  const server = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  });

  server.start();
}
