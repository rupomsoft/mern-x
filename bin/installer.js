#!/usr/bin/env node

import { spawn } from 'child_process';
import path from 'path';

const repositoryUrl = 'https://github.com/rupomsoft/mern-x';
const destinationFolder = process.argv[2] || 'MERN-X';

// Define a function to create a spinner animation
const createSpinner = () => {
    const frames = ['-', '\\', '|', '/'];
    let index = 0;

    return setInterval(() => {
        process.stdout.write('\r' + frames[index++] + ' Creating...');
        index = index % frames.length;
    }, 100);
};

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
                console.log(`\nRunning 'npm start' in '${destinationFolder}' folder...`);
                const npmStart = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['start'], { stdio: 'inherit' });
                npmStart.on('close', (code) => {
                    if (code === 0) {
                        console.log('\nMERN-X Start Successfully!');
                    } else {
                        console.error('\nAn error occurred during npm start.');
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
