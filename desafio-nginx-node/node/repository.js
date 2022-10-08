const mysql = require('mysql');
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

async function query(sql) {
  const connection = mysql.createConnection(config);

  const queryPromise = new Promise((resolve, reject) => {
    connection.query(sql, function (error, results) {
      if (error) reject(error);

      resolve(results)
    })
  })

  const queryResults = await queryPromise;

  connection.end();
  return queryResults;
}

const Repository = {
  query
}

module.exports = { Repository }