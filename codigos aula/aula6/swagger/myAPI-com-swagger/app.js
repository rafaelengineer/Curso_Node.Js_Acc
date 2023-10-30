const express = require("express");
const app = express();
const port = 3000;
const userRoutes = require("./routes/userRoutes");

app.use(express.json());

app.use("/", userRoutes);

const sequelize = require('./models/userModel.js');

sequelize.sync().then(() => {
  console.log("Modelo sincronizado com o banco de dados");
}).catch((err) => {
  console.error("Erro na sincronização com o banco de dados:", err);
});

app.listen(port, () => {
  console.log(`\nServer is running on port http://localhost:${port}\n`);
});
