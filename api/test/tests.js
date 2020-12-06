const User = require("../../db/schema/userSchema");

const server = require("../../db/server");

//To allow testing with sessions
const mockSession = require("mock-session");
const request = require("supertest");

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe('/GET user', () => {
    it('it should fail to GET user (unauthorized)', (done) => {
      chai.request(server)
          .get('/users')
          .end((err, res) => {
                res.should.have.status(401);
            done();
          });
    });
});

describe('/login', () => {
    it('it should not login (wrong password)', (done) => {
        let user = {
            user: {
                username: "David Chen",
                password: " ",
            }
        }
      chai.request(server)
          .post('/login')
          .send(user)
          .end((err, res) => {
                res.should.have.status(401);
            done();
          });
    });
});

describe('/login', () => {
    it('it should login correctly', (done) => {
        let user = {
            user: {
                username: "David Chen",
                password: "password",
            }
        }
      chai.request(server)
          .post('/login')
          .send(user)
          .end((err, res) => {
                res.should.have.status(200);
            done();
          });
    });
    it('it should logout correctly', (done) => {
      chai.request(server)
          .get('/logout')
          .end((err, res) => {
                res.should.have.status(200);
            done();
          });
    });
});

describe('/GET users', () => {
    let agent = request.agent(server);

    beforeEach(function(done) {
        let user = {
            user: {
                username: "David Chen",
                password: "password",
            }
        }
        agent.post('/login') 
            .send( user )
            .end(function(err, res) {
                expect(res.statusCode).to.equal(200);
                done();
            });
    });
    
    it('it should return all users', (done) => {
      
      let cookie = mockSession('my-session', 'my-secret', {"count":1});


      chai.request(server)
          .get('/users')
          .set('cookie', [cookie])
          .end((err, res) => {
                res.should.have.status(200);
            done();
          });
    });
});