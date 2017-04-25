import express from 'express';
const router = express.Router();
import server from './server';

let TEST_TABLE = 'users';
router.get('/', (req, res) => {
  server.query(
    'select * from '+TEST_TABLE,
    function selectCb(err, results, fields){
        if(err)
            throw err;
        if(results){
           console.log('成功查询用户表！~~~'+results.length);
           res.render("sessionValidate", { title: "Users",UsersLen:results.length});
        }
    }
    );

});

module.exports = router;