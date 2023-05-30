// import fs from 'fs';
// import fetch from 'node-fetch';
// import jsonArray from '../mainnetData.json' assert { type: 'json' };

// async function downloadImages() {
//   for (const item of jsonArray) {
//     const imageUrl = item.image;
//     const imageName = item.name;

//     try {
//       const response = await fetch(imageUrl);
//       const buffer = await response.buffer();

//       fs.writeFileSync(imageName, buffer);
//       console.log(`Image downloaded: ${imageName}`);
//     } catch (error) {
//       console.error(`Error downloading image for ${item.name}:`, error);
//     }
//   }
// }

// downloadImages();
import fs from 'fs';
import fetch from 'node-fetch';
import jsonArray from './mainnetData.json' assert { type: 'json' };
import path from 'path';

async function downloadImages() {
  for (const item of jsonArray) {
    const imageUrl = item.image;
    const imageName = `${item.name.replace(/\s/g, '_')}`;

    try {
      const response = await fetch(imageUrl);
      const buffer = await response.buffer();

      const fileExtension = path.extname(imageUrl); // Extract the file extension
      const filePath = `${imageName}${fileExtension}`; // Append the extension to the image name

      fs.writeFileSync(filePath, buffer);
      console.log(`Image downloaded: ${filePath}`);
    } catch (error) {
      console.error(`Error downloading image for ${item.name}:`, error);
    }
  }
}

downloadImages();
