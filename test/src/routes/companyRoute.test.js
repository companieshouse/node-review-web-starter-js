
describe("routes/companyRoute", () => {
    let app = require(`${serverRoot}/app`);

    beforeEach(done => {
        sinon.reset();
        sinon.restore();
        done();
    });

    afterEach(done => {
        sinon.reset();
        sinon.restore();
        done();
    });

    it("should serve up the company create page", () => {
        let slug = "/company/create";
        return request(app)
            .get(slug)
            .then(response => {
                expect(response).to.have.status(200);
            });
    });

    it("should serve up the company details page", () => {
        let slug = "/company/details";
        return request(app)
            .get(slug)
            .then(response => {
                expect(response).to.have.status(200);
            });
    });

    it("should fail to serve up an invalid path", () => {
        let slug = "/invalid-route/invalid-path";
        return request(app)
            .get(slug)
            .then(response => {
                expect(response).to.have.status(404);
            });
    });
});
