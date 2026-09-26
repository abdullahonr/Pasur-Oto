const sharp = require('sharp');
const fs = require('fs');

async function processImage() {
    try {
        const inputPath = 'public/favicon.png';
        const metadata = await sharp(inputPath).metadata();
        const size = Math.min(metadata.width, metadata.height);

        const circleSvg = `<svg width="${size}" height="${size}"><circle cx="${size/2}" cy="${size/2}" r="${size/2}" /></svg>`;

        await sharp(inputPath)
            .resize(size, size)
            .composite([{ input: Buffer.from(circleSvg), blend: 'dest-in' }])
            .toFile('public/favicon_cropped.png');
        
        console.log('Image cropped successfully');
    } catch (err) {
        console.error(err);
    }
}
processImage();
