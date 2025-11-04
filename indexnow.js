import fetch from 'node-fetch';

const DOMAIN = 'devsohaibali.netlify.app';
const KEY = '2763eaa281e76049f1a144f0e60c68b2';

await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    host: DOMAIN,
    key: KEY,
    urlList: [`https://${DOMAIN}/`],
  }),
});

console.log('IndexNow ping sent successfully.');
