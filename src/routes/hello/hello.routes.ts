module.exports = app => {
    const deals = require("../controllers/deal.controller.js");
  
    // Создание нового дела
    app.post("/greeting", deals.create);
  };
  