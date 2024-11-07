import supertest from 'supertest';
import app from '../server';


describe('GET /', () => {
    it('should send back some data', async () => {
        const response = await supertest(app).get('/');
        expect(response.body.message).toBe('Hello World!');
    });
});