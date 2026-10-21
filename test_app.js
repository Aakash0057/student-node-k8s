const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
    it('should return welcome message', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        // This checks if the response contains any part of the text successfully
        expect(res.text).toContain('CI/CD'); 
    });
});

describe('GET /health', () => {
    it('should return healthy status JSON', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toEqual(200);
        expect(res.body.status).toEqual('healthy');
    });
});
