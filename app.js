   function getUser(db, id) {
     return db.query("SELECT * FROM users WHERE id = " + id);
   }

   function divide(a, b) {
     return a / b;
   }

   module.exports = { getUser, divide };
// TODO: add input validation
