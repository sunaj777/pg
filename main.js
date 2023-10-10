const pg = require("pg");

async function main() {
  const client = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "12345",
    port: 5432,
  });

  await client.connect();

  const res = (await client.query("SELECT * from new")).rows;

  console.log(res);
}

main();   