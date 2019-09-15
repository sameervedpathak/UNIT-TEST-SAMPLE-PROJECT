const expect = require('chai').expect;
const request = require('request');

/* Indivisual test case

it('Default API content', (done)=>{
    request('http://localhost:4000', function(err, res, req){
        expect(req).to.equal('Default API calling !!');
        done();
    })
});

it('Default API status', (done) => {
    request('http://localhost:4000', function(err, res, req){
        expect(res.statusCode).to.equal(200);
        done();
    })
});

it('about page content', (done) => {
    request('http://localhost:4000/about', (err,res,req) => {
        expect(res.statusCode).to.equal(404);
        done();
    })
});

**/

/** Grouping test case **/

/*
describe('Status and content', ()=>{
    describe('main page' , ()=>{
        it('main API content', (done)=>{
            request('http://localhost:4000', (err, res, req) => {
              expect(req).to.equal('Default API calling !!');
              done();
            })
        })

        it('main API status', (done)=>{
            request('http://localhost:4000', (err,res,req) => {
                expect(res.statusCode).to.equal(200);
                done();
            })
        })
    });

    describe('about page', () => {
        it('About page content', (done) => {
            request('http://localhost:4000/aboutus', (err,res,req) => {
                expect(res.statusCode).to.equal(404);
                done();
            })
        })
    })
})*/