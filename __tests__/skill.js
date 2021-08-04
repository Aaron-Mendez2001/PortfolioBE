const server = require('../server');
const request = require('supertest');
const db = require('../data/config');

beforeEach(async () => {
    await db.seed.run();
})

afterAll(async () => {
    await db.destroy();
})

describe('Testing skills endpoints', () => {
    it('GETs all skills', async () => {
        const res = await request(server).get('/skills')
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body.length).toBe(8)
    })
})