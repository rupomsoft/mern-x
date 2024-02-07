#!/usr/bin/env node

import { spawn } from 'child_process';
import path from 'path';
import { rm } from 'fs/promises'; // Import the rm function to delete directories

const repositoryUrl = 'https://github.com/rupomsoft/mern-x';
const destinationFolder = process.argv[2] || 'MERN-X';

// Define a function to create a spinner animation
const createSpinner = () => {
    const frames = ['-', '\\', '|', '/'];
    let index = 0;

    return setInterval(() => {
        process.stdout.write('\r' + frames[index++] + ' MERN-X creating project skeleton...');
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
        console.log(`\nMERN-X created into '${destinationFolder}' folder.`);
        const projectPath = path.join(process.cwd(), destinationFolder);
        process.chdir(projectPath); // Change current directory to project path
        console.log(`\nMERN-X cooking application back end...`);
        const npmInstallRoot = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['install'], { stdio: 'inherit' });

        npmInstallRoot.on('close', (code) => {
            if (code === 0) {
                console.log('\nMERN-X setup completed successfully!');

                // Delete the bin folder before starting the client setup
                const binFolderPath = path.join(projectPath, 'bin');
                rm(binFolderPath, { recursive: true, force: true }).then(() => {
                    console.log('\nMERN-X Clean successfully.');

                    // Proceed with setting up the client
                    console.log(`\nMERN-X cooking application front end...`);
                    const clientFolderPath = path.join(projectPath, 'client');
                    const npmInstallClient = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['install'], { stdio: 'inherit', cwd: clientFolderPath });

                    npmInstallClient.on('close', (code) => {
                        if (code === 0) {
                            console.log(`\nMERN-X Running...`);
                            const npmStart = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['start'], { stdio: 'inherit' });

                            npmStart.on('close', (code) => {
                                if (code === 0) {
                                    console.log('\nMERN-X Start Successfully! browse localhost:4000');
                                } else {
                                    console.error('\nAn error occurred during npm start.');
                                }
                            });
                        } else {
                            console.error('\nAn error occurred during client npm install.');
                        }
                    });
                }).catch((error) => {
                    console.error('\nError deleting bin folder:', error);
                });
            } else {
                console.error('\nAn error occurred during npm install.');
            }
        });
    } else {
        console.error('\nAn error occurred while cloning the repository.');
    }
});
