const { Country, Activity, conn } = require('../../src/db.js');
const { expect } = require('chai');


describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Country.create({ name: 'Argentina' });
      });
      it('Should return error if a null season', (data) => {
        Activity.create({
          name: "Nadar con tiburones",
          difficulty: "1",
          duration: "10",
          season: null,
        })
        .then(() => data(new Error('Requires a valid property (season).')))
        .catch(() => data());
      });
      it('Should return error if a null name', (data) => {
        Activity.create({
          name: null,
          difficulty: "1",
          duration: "10",
          season: "Summer",
        })
        .then(() => data(new Error('Requires a valid property (name).')))
        .catch(() => data());
      });
    });
  });
});
