const request = require('supertest');
const baseURL = 'http://lojaebac.ebaconline.art.br';
const user = 'admin_ebac'
const pass = '@admin!&b@c!2022'
const contrato = require('../cuponsContrato/cuponsContrato')

describe('US-003 - API de cupons (Contrato)', () => {
    
    it('Deve validar lista de cupons disponíveis', async () => {
        const response = await request(baseURL).get('/wp-json/wc/v3/coupons').auth(user, pass);
        await contrato.validateAsync(response.body)
    })
});    
