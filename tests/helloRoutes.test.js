const request = require('supertest');
const app = require('../app');

describe('GET /api/hello', () => {
    it('should return hello message', async () => {
        const res = await request(app).get('/api/hello');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({ message: 'hello' });
    });
});

