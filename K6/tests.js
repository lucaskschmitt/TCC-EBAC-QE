import http from 'k6/http';
import { check, sleep } from 'k6';
import { users } from './data.js';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/latest/dist/bundle.js' 

export function handleSummary(data) {
  return {
    'results.html': htmlReport(data),
  }
}

export let options = {
    vus: 20,
    stages: [
        { duration: '20s', target: 20 },
        { duration: '1m40s', target: 20 },
    ],
};

function getRandomUser() {
    return users[Math.floor(Math.random() * users.length)];
}

export default function () {
    const user = getRandomUser();

// -- Teste 1: Login --    

    let loginResponse = http.post('http://lojaebac.ebaconline.art.br/', {
        username: user.username,
        password: user.password,
    });

    check(loginResponse, {
        'login status 200': (r) => r.status === 200,
    });

    sleep(1);

// -- Teste 2 Busca de produto --

    let searchResponse = http.get('http://lojaebac.ebaconline.art.br/?product_cat=&s=hoodie&post_type=product');

    check(searchResponse, {
        'search status 200': (r) => r.status === 200,
    });

    sleep(1);
}