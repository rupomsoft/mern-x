#! /usr/bin/env node
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

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
        const npmInstall = spawn('npm', ['install'], { stdio: 'inherit' });
        npmInstall.on('close', (code) => {
            if (code === 0) {
                spawn('rm', ['-rf', 'bin']);
                console.log('\nProject setup completed successfully!');
            } else {
                console.error('\nAn error occurred during npm install.');
            }
        });
    } else {
        console.error('\nAn error occurred while cloning the repository.');
    }
});
