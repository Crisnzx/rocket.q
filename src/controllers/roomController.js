const Database = require('../db/config');

module.exports = {
   async create(req, res) {
      const db = await Database();
      const pass = req.body.password;
      let roomID = '';
      let thereIs = true;

      do {
         roomID = '';
         // Gera o número da sala
         for (let i = 0; i < 6; i++) {
            roomID += Math.floor(Math.random() * 10);
         }
         
         const roomsIDsBD = await db.all(`SELECT id FROM rooms`);
         
         // Verificar se o número já existe
         thereIs = roomsIDsBD.some(roomIDBD => roomIDBD === parseInt(roomID));
         
      } while(thereIs);
      
         // Insere a sala no banco
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
   },

   async open(req, res) {
      
      const roomID = req.params.room;
      
      const db = await Database();
      const questions = await db.all(`
      SELECT * FROM questions WHERE room = ${roomID} and read = 0
      `);
      const questionsRead = await db.all(`
      SELECT * FROM questions WHERE room = ${roomID} and read = 1
      `);

      let isQuestions;

      res.render('room', {roomID, questions, questionsRead});
   },

   enter(req, res) {
      const roomID = req.body.roomID;

      res.redirect(`/room/${roomID}`);
   }
}