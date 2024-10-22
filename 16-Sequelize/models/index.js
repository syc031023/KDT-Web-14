const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')["development"];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
); // sequelize 객체 선언시 매개변수로 다음 정보들을 받음: 데이터베이스명, 사용자, 비밀번호, 정보전체

// models/Visitor.js에서 정의한 model이 DB 객체에 들어감
db.Visitor = require("./Visitor")(sequelize, Sequelize.DataTypes);
db.User = require("./User")(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
// db라는 객체를 내보냄
// sequelize에서 객체를 만들고, module로 내보내면 다른 파일에서 모두 같은 객체를 사용할 수 있게 됨
// 만약에 다른 파일에서 sequence 쓰고 싶으면 각각의 파일에서 다시 만들어야 함
// 그렇다면 각각의 파일에서 서로 다른 객체를 사용하고 있게 되는 것
