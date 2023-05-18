app.test.js

const request = require('supertest');
const app = require('./app');

describe('GET /getById/:myid', () => {
  test('returns the correct cast object with status 200', async () => {
    const response = await request(app).get('/getById/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ id: 1, name: 'rivka', emele: 'r548468129', pone: '0548468129', dob: new Hebcal.HDate(new Date('1990-01-01')) });
  });

  test('returns 404 error if cast object is not found', async () => {
    const response = await request(app).get('/getById/100');
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: 'Cast not found' });
  });
});
// const request = require('supertest');
// const app = require('./app');
const castModule = require('./controlercast');

describe('DELETE /delete/:id', () => {
  test('returns the correct response with status 200', async () => {
    // Mock the removeItem function to always return true
    castModule.removeItem = jest.fn().mockReturnValue(true);

    const response = await request(app).delete('/delete/1');
    expect(response.status).toBe(200);
    expect(response.text).toBe('true');
    expect(castModule.removeItem).toHaveBeenCalledWith('1');
  });

  test('returns the correct response with status 404', async () => {
    // Mock the removeItem function to always return false
    castModule.removeItem = jest.fn().mockReturnValue(false);

    const response = await request(app).delete('/delete/100');
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: 'Cast not found' });
    expect(castModule.removeItem).toHaveBeenCalledWith('100');
  });
});
