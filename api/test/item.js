process.env.NODE_ENV = 'test';
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var expect = chai.expect;
const url = "http://localhost:3000";

var mongoose = require("mongoose");
var Item = require('../models/item')


describe('Items', function() {

  // Item.collection.drop()

  beforeEach(function(done) {
    mongoose.connect('mongodb://localhost/crud_item_category_test', function(){

      Item.collection.drop()

      Item.create({
        name:  'Sepatu',
        description:  'description',
        price: 120000,
        category: '5b54bbf7b8e59460f1ed31b2'
      }, function (err, item) {
        mongoose.disconnect()
        done()
      });
    })

  })

  afterEach(function(done) {
    mongoose.connect('mongodb://localhost/crud_item_category_test', function(){
      Item.collection.drop()
      mongoose.disconnect()
      done()
    })
  })

  it('GET /items should return all data items', function(done) {

    chai.request(url)
      .get('/items')
      .end(function(err, res) {
        expect(err).to.be.null;

        expect(res).to.have.status(200);

        expect(res.body).to.be.a('array')
        expect(res.body.length).to.equal(1)

        expect(res.body[0]).to.have.property('_id');
        expect(res.body[0]).to.have.property('name');
        expect(res.body[0]).to.have.property('description');
        expect(res.body[0]).to.have.property('price');
        expect(res.body[0]).to.have.property('category');

        expect(res.body[0].name).to.equal('Sepatu')

        done()
      })
  })

  it('POST /items should add new item', function(done) {
    chai.request(url)
      .post('/items')
      .send({
        name:  'item1',
        description:  'testing',
        price: 10000,
        category: '5b54bbf7b8e59460f1ed31b2'
      })
      .end(function(err, res) {
        expect(err).to.be.null;

        expect(res.body).to.be.a('object');
        expect(res).to.have.status(200);

        expect(res).to.have.property('_id')
        expect(res).to.have.property('name')

      })

      done()
  })

})
