const Database = require('better-sqlite3');
const db = new Database('sqlite.db');
const table = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='user';").get();
console.log(table ? 'User table exists' : 'User table missing');
