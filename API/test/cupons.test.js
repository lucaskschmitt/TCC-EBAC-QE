const request = require('supertest');
const baseURL = 'http://lojaebac.ebaconline.art.br';
const user = 'admin_ebac'
const pass = '@admin!&b@c!2022'

describe('US-003 - API de cupons', () => {
    
it('Deve listar cupons', async () => {
    const response = await request(baseURL).get('/wp-json/wc/v3/coupons').auth(user, pass);
    console.log(response.status);
    console.log(response.body);
    });
})

it('Deve cadastrar cupom com dados pré-determinados', async () => {
    const novoCupomTeste = {
        "code": "novoCupomTeste",
        "amount": "10",
        "discount_type": "fixed_product",
        "description": "Cupom de desconto de teste"
    }
    const response = await request(baseURL).post('/wp-json/wc/v3/coupons').auth(user, pass).send(novoCupomTeste)
    console.log(response.status);
    console.log(response.body);
    expect(response.status).toBe(201)
});

it('Deve impedir cadastro de cupons com o mesmo código', async () => {
    const novoCupomTeste = {
        "code": "novoCupomTeste",
        "amount": "50",
        "discount_type": "fixed_product",
        "description": "Cupom de desconto de teste"
    }
    const response = await request(baseURL).post('/wp-json/wc/v3/coupons').auth(user, pass).send(novoCupomTeste)
    console.log(response.status);
    console.log(response.body);
    expect(response.status).toBe(400)
})
