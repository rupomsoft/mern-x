#! /usr/bin/env node
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs').promises; // Use promises for better error handling

const repositoryUrl = 'https://github.com/rupomsoft/mern-x';
const destinationFolder = process.argv[2] || 'MERN-X';

// Start the process by cloning the repository
cloneRepository();

async function cloneRepository() {
    console.log(`Cloning '${repositoryUrl}' into '${destinationFolder}'...`);
    const gitClone = spawn('git', ['clone', repositoryUrl, destinationFolder]);

    gitClone.on('close', async (code) => {
        if (code === 0) {
            console.log(`\nProject cloned into '${destinationFolder}'.`);
            await deleteBinFolder();
        } else {
            console.error('\nFailed to clone the repository.');
        }
    });
}

async function deleteBinFolder() {
    const projectPath = path.join(process.cwd(), destinationFolder);
    const binPath = path.join(projectPath, 'bin');
    console.log(`Checking for 'bin' folder at '${binPath}'...`);

    try {
        await fs.access(binPath);
        console.log(`'bin' folder exists. Deleting...`);
        await fs.rm(binPath, { recursive: true, force: true });
        console.log('\nDeleted the bin folder successfully.');
        await installDependenciesRoot(projectPath);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log(`'bin' folder does not exist, proceeding with installation.`);
            await installDependenciesRoot(projectPath);
        } else {
            console.error('\nFailed to delete the bin folder:', error);
        }
    }
}

async function installDependenciesRoot(projectPath) {
    console.log(`\nRunning 'npm install' in project root...`);
    process.chdir(projectPath);
    const npmInstall = spawn('npm', ['install'], { stdio: 'inherit' });

    npmInstall.on('close', async (code) => {
        if (code === 0) {
            console.log('\nFinished npm install in project root.');
            await installDependenciesClient(projectPath);
        } else {
            console.error('\nFailed npm install in project root.');
        }
    });
}

async function installDependenciesClient(projectPath) {
    const clientPath = path.join(projectPath, 'client');
    console.log(`\nRunning 'npm install' in client directory...`);
    process.chdir(clientPath);
    const npmInstallClient = spawn('npm', ['install'], { stdio: 'inherit' });

    npmInstallClient.on('close', (code) => {
        if (code === 0) {
            console.log('\nFinished npm install in client directory.');
            console.log('\nProject setup completed successfully!');
        } else {
            console.error('\nFailed npm install in client directory.');
        }
    });
}
