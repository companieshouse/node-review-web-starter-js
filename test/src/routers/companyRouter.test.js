const app = require("./../../../src/app");

describe("routes/companyRouter", () => {
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
        const slug = "/company/create";
        return request(app)
            .get(slug)
            .then(response => {
                expect(response).to.have.status(200);
            });
    });

    it("should serve up the company details page", () => {
        const slug = "/company/details/abc123";
        return request(app)
            .get(slug)
            .then(response => {
                expect(response).to.have.status(200);
            });
    });

    it("should fail to serve up an invalid path", () => {
        const slug = "/invalid-route/invalid-path";
        return request(app)
            .get(slug)
            .then(response => {
                expect(response).to.have.status(404);
            });
    });
});
