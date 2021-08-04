const server = require('../server');
const request = require('supertest');
const db = require('../data/config');

beforeEach(async () => {
    await db.seed.run();
})

afterAll(async () => {
    await db.destroy();
})

describe('Testing the home endpoint', () => {
    it('GETS home page', async () => {
        const res = await request(server).get('/')
        expect(res.statusCode).toBe(200)
        expect(res.body.message).toBe('Welcome to my portfolio server!')
        expect(res.type).toBe('application/json')
    })
})