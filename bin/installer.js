#! /usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

const repositoryUrl = 'https://github.com/rupomsoft/mern-x';
const destinationFolder = process.argv[2] || 'MERN-X';

// Define a function to create a spinner animation
function createSpinner() {
    const frames = ['-', '\\', '|', '/'];
    let index = 0;

    return setInterval(() => {
        process.stdout.write('\r' + frames[index++] + ' Creating...');
        index = index % frames.length;
    }, 100);
}

// Start the spinner animation
const spinner = createSpinner();

// Execute git clone command
const gitClone = spawn('git', ['clone', repositoryUrl, destinationFolder]);

gitClone.stdout.on('data', () => {}); // Do nothing with stdout

gitClone.stderr.on('data', (data) => {
    // Do nothing with stderr, you can add error handling if required
});

gitClone.on('close', (code) => {
    clearInterval(spinner); // Stop the spinner when cloning is completed
    if (code === 0) {
        console.log(`\nProject created into '${destinationFolder}' folder.`);
        const projectPath = path.join(process.cwd(), destinationFolder);
        process.chdir(projectPath); // Change current directory to project path
        console.log(`\nRunning 'npm install' in '${destinationFolder}' folder...`);
        const npmInstallRoot = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['install'], { stdio: 'inherit' });
        npmInstallRoot.on('close', (code) => {
            if (code === 0) {
                console.log('\nProject setup completed successfully!');
                // Navigate into the 'client' folder and execute 'npm install' there
                console.log(`\nRunning 'npm install' in '${destinationFolder}/client' folder...`);
                const clientFolderPath = path.join(projectPath, 'client');
                process.chdir(clientFolderPath);
                const npmInstallClient = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['install'], { stdio: 'inherit' });
                npmInstallClient.on('close', (code) => {
                    if (code === 0) {
                        console.log('\nClient dependencies installed successfully!');
                    } else {
                        console.error('\nAn error occurred during client npm install.');
                    }
                });
            } else {
                console.error('\nAn error occurred during npm install.');
            }
        });
    } else {
        console.error('\nAn error occurred while cloning the repository.');
    }
});
