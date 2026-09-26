const https = require('https');
function search(q) {
  return new Promise((resolve) => {
    https.get('https://html.duckduckgo.com/html/?q=' + encodeURIComponent(q), (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        let match;
        const regex = /<img[^>]+src=\"\/\/(external-content\.duckduckgo\.com[^\"]+)\"/g;
        const urls = [];
        while ((match = regex.exec(data)) !== null) {
          urls.push('https://' + match[1]);
        }
        resolve(urls.slice(0, 3));
      });
    });
  });
}
async function run() {
  console.log('Taycan:', await search('Porsche Taycan wheels rims site:pinterest.com'));
  console.log('Verona:', await search('Volkswagen Verona jant'));
  console.log('Mallory:', await search('Volkswagen Mallory jant'));
  console.log('Mercedes:', await search('Mercedes AMG multi spoke rims site:pinterest.com'));
  console.log('Etron:', await search('Audi E-Tron GT rims site:pinterest.com'));
}
run();
