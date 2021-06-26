const Database = require('../db/config');

module.exports = {
   async create(req, res) {
      const db = await Database();
      const pass = req.body.password;
      let roomID = '';

      for (let i = 0; i < 6; i++) {
         roomID += Math.floor(Math.random() * 10);
      }

      
      await db.run(`
         INSERT INTO rooms (
            id,
            pass
         ) VALUES (
            ${parseInt(roomID)},
            ${pass}
         )
      `);
      await db.close();

      res.redirect(`/room/${roomID}`);
   }
}