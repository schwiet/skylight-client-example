import fetch from "node-fetch";
import argv from "./args.js";

const args = argv.parse();

fetch(`http://${args.remote}/sklt/status/`)
  .then((resp) => {
    if (resp.ok) {
      return resp.json();
    }
    return Promise.reject(`${resp.status} ${resp.statusText}`);
  })
  .then(
    (result) => {
      console.log("STATUS", result);
    },
    (err) => {
      console.error("ERROR:", err);
    }
  );
