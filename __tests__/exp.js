const server = require('../server');
const request = require('supertest');
const db = require('../data/config');

beforeEach(async () => {
    await db.seed.run();
})

afterAll(async () => {
    await db.destroy();
})

describe('Testing experience endpoints', () => {
    it('GETs all experience', async () => {
        const res = await request(server).get('/experience')
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body.length).toBe(5)
    })
})