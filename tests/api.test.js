const expect = require('expect')
const request = require('supertest')

const app = require('../server')

describe('POST /convert', () => {
    it('should return status 200', (done) => {
        const numericString = '257'

        request(app)
            .post('/api/convert')
            .send({ numericString })
            .expect(200)
            .end(done)
    })
})
