const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./js/data/wordlist.db', (error) => {
  if (error) {
    return console.error(error.message);
  }

  console.log('connected');
});

db.close((error) => {
  if (error) {
    return console.error(error.message);
  }

  console.log('close the database connection');
});
