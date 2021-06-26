const Database = require('./config');

const initDB = {
   async init() {
      const db = await Database();
      await db.exec();
   }
}

initDB.init();