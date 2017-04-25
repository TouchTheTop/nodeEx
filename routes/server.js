const mysql = require('mysql');

let TEST_DATABASE = 'taokeunion';

let client = mysql.createConnection({
    user:'root',
    password:'123456',
});
client.connect();
client.query('use '+ TEST_DATABASE);
console.log('成功连接数据库！~~');

module.exports = client;