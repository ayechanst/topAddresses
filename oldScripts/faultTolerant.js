const { exec } = require('child_process');

function runCommand() {
  const command = 'node index.js';
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Command failed`);
      setTimeout(runCommand, 100); // re-execute after 5 seconds
      return;
    }

    console.log(`Command output: ${stdout}`);
    console.error(`Command error: ${stderr}`);
  });
}

runCommand();
