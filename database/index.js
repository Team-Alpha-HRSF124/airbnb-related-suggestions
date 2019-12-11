const config = require ('../config/');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Promise = require('bluebird');
const sequelize = new Sequelize(config.sequelize.dbName, config.sequelize.username, config.sequelize.password, {
  host: 'db',
  dialect: 'mysql'
});
console.log(config.sequelize);
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

// sequelize.sync();

// data base methods
let create = ({interiorPicLinks, price, review, title, type}, callback = ()=>{}) => {
  // create for home entry
  // followed by creation of photo entries
  sequelize.sync().then(() => {
    return Home.create({
      title: title,
      price: price,
      review: review,
      type: type
    });
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

// retrieve some number of listings and return them as object to be parsed
let findMultiple = (arrayOfRandomNumbers) => {
  const homeFindAll = Home.findAll({
                          where: {
                            home_id: {
                              [Op.or]: arrayOfRandomNumbers
                            }
                          }
                        });
  const photoFindAll = Photo.findAll({
                          where: {
                            home_id: {
                              [Op.or]: arrayOfRandomNumbers
                            }
                          }
                        });
  return Promise.all([homeFindAll, photoFindAll])
            .then((data) => {
              const homes = data[0];
              const photos = data[1];
              const resultArray = [];
              for (var home of homes) {
                const singleHomeInfo = {...home.dataValues};
                const interiorPicLinks = [];
                for (photo of photos) {
                  if (photo.dataValues.home_id === home.dataValues.home_id) {
                    interiorPicLinks.push(photo.dataValues.photoURL);
                  }
                }
                singleHomeInfo.interiorPicLinks = interiorPicLinks;
                resultArray.push(singleHomeInfo);
              }
              return resultArray;
            })
};

// just to make sure the database is synced with the models
let sync = () => {
  sequelize.sync();
};

module.exports.create = create;
module.exports.sync = sync;
module.exports.findMultiple = findMultiple;