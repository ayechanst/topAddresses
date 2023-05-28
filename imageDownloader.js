const fs = require('fs');
const axios = require('axios');
const path = require('path');

// Function to download the image from a link and save it to the specified folder
async function downloadImage(link, folder) {
  try {
    const response = await axios.get(link, { responseType: 'arraybuffer' });
    const imageData = response.data;
    const fileName = path.basename(link);
    const fileExtension = path.extname(link);
    const filePath = path.join(folder, fileName);

    fs.writeFileSync(filePath, imageData);
    console.log(`Downloaded ${link} to ${filePath}`);
  } catch (error) {
    console.error(`Error downloading ${link}:`, error);
  }
}

// Read the JSON file
fs.readFile('mainnetData.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  try {
    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Iterate over each object in the JSON
    for (const obj of jsonData) {
      // Check if the object has a link property
      if (obj.link) {
        // Download the image from the link and save it to the "images" folder
        downloadImage(obj.link, 'images');
      }
    }
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
});
