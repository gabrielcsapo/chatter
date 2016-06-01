var assert = require('chai').assert;
var request = require('supertest');

var now = Date.now();

describe('chatter', function() {
    var app = require('../index.js');

    describe('routes', function() {

        it('should give a status of 200 on /', function(done) {
            request(app)
                .get('/')
                .expect(200)
                .end(function(err, res) {
                    if (err) throw err;
                    done();
                });
        });

    });

    var object = {
        username: now,
        email: 'test'+now+'@test.com',
        password: 'testing123'
    };

    describe('register', function() {

        it('should get back a 302 response for register', function(done) {
            request(app)
                .post('/register')
                .send(object)
                .expect(302)
                .end(function(err, res) {
                    done();
                });
        });

    });

    describe('login', function() {

        it('should get a 302 response for login', function(done) {
            request(app)
                .post('/login')
                .send(object)
                .expect(302)
                .end(function(err, res) {
                    object.cookies = res.headers['set-cookie'];
                    done();
                });
        });

        it('should be able to get to the profile page', function(done) {
            request(app)
                .get('/profile')
                .set('cookie', object.cookies)
                .expect(200)
                .end(function(err, res) {
                    if (err) throw err;
                    done();
                });
        });

    });
});
