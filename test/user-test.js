var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://localhost:3000");

describe("SAMPLE unit test",function(){

    // Index function check
    it("should return 404 error", function(done){
        server
        .get('/')
        .expect(404)
        .end(function(err, res){
            res.status.should.equal(404)
            res.body.status.should.equal(404)
            done()
        })
    })
    
    // GET user request
    it("should return user details",function(done){
        server
            .get("/users")
            // .expect("Content-type",/json/)
            .expect(200) // THis is HTTP response
            .end(function(err,res){
                res.status.should.equal(200);
                res.body.status.should.equal(200);
        done()
      })
    })

    // POST user data
    it("should create user ", (done) =>{
        server
        .post("/user")
        .send({name: "de", email:"de@gmail.com"})
        .expect(200)
        .end((err, res) =>{
            res.status.should.equal(200)
            res.body.status.should.equal(200)
            done()
        })
    })

});