const config = require ('../config/');
const Sequelize = require('sequelize');
const Promise = require('bluebird');
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
  },
  price: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  review: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: true,
  }
}, { sequelize, modelName: 'home' });

Photo.init({
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

// data base methods
let create = ({interiorPicLinks, price, review, title, type}, callback) => {
  // create for home entry
  // followed by creation of photo entries
  Home.create({
    title: title,
    price: price,
    review: review,
    type: type
  }).then((newlyCreatedRowForHome) => {
    var photoLinkInsertions = interiorPicLinks.map((singleLink) => (
      Photo.create({
        photoURL: singleLink,
        home_id: newlyCreatedRowForHome.home_id
      })
    ));
    return Promise.all(photoLinkInsertions);
  }).then(() => {
    console.log(`entry for ${title} created!`);
    callback();
  }).catch((err) => {
    console.log('error encountered during data insertion...', err);
  });
};


module.exports.create = create;