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
    it('Triggers GET by id error', async () => {
        const res = await request(server).get('/experience/15')
        expect(res.statusCode).toBe(400)
        expect(res.type).toBe('application/json')
        expect(res.body.message).toBe('Invalid ID')
    })
    it('GETs exp by id', async () => {
        const res = await request(server).get('/experience/1')
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body.name).toBe('Farm Fresh Produce')
    })
})