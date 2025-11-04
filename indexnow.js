import fetch from 'node-fetch';

const DOMAIN = 'devsohaibali.netlify.app';
const KEY = '2763eaa281e76049f1a144f0e60c68b2';

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    host: DOMAIN,
    key: KEY,
    urlList: [`https://${DOMAIN}/`],
  }),
});

if (response.ok) {
  console.log('IndexNow ping sent successfully.');
  console.log('Status:', response.status, response.statusText);
} else {
  const text = await response.text();
  console.log('Failed to send IndexNow ping.');
  console.log('Status:', response.status, response.statusText);
  console.log('Response:', text);
}
