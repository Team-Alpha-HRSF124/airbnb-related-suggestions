const config = require ('../config/');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.sequelize.dbName, config.sequelize.username, config.sequelize.password, {
  host: 'localhost',
  dialect: 'mysql'
});

// authentication
sequelize
  .authenticate()
  .then(() => {
    console.log('connection established!');
  }).catch((err) => {
    console.log('error encountered while authenticating...', err);
  });

// initializing
const Model = Sequelize.Model;

class Home extends Model{};
class Photo extends Model{};

Home.init({
  home_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true, 
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}, { sequelize, modelName: 'home' });

Photo.init({
  phone_id: {
    type: Sequelize.INTEGER,
  },
  photoURL: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  home_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Home,
      key: 'home_id',
    }
  }
}, { sequelize, modelName: 'photo' });

sequelize.sync({force: true});

console.log('db was run!');
// data base methods
let create = () => {
  console.log('nothing yet');
};


module.exports.create = create;