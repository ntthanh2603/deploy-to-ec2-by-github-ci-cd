<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

## Description

Instruct deploy Nestjs Github Action CI/CD + EC2

### All steps

#### Step 1: Create EC2 instance and copy file key pair ".pem" move in root folder. Connect intance in Termius and install docker, posgres ...

```bash
# Check server
lsb_release -a
# Check version docker
docker -v
```

#### Step 2: Clone repository

```bash
# Clone repository in github
git clone https://github.com/ntthanh2603/deploy-to-ec2-by-github-ci-cd.git

# Move to project
cd deploy-to-ec2-by-github-ci-cd

# Build image project
sudo docker build -t nestjs-app .

# Run container
sudo docker run -d \
  --name nestjs-backend \
  -p 3000:3000 \
  --restart unless-stopped \
  nestjs-app

# Check container running
sudo docker ps

# Show logs
sudo docker logs nestjs-backend
```

#### Step 3: Export public port:

-> Click this instance -> Click Security -> Click Security Group
-> Click Inbound rules -> Click Add rule -> Select Type=Custom TCP, Port range=3000
-> Click Save rules

#### Step 4: CI/CD with github and ec2, pm2

```bash
# Create a folder
$ mkdir actions-runner && cd actions-runnerCopied!
# Download the latest runner package
$ curl -o actions-runner-linux-x64-2.325.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.325.0/actions-runner-linux-x64-2.325.0.tar.gzCopied!
# Optional: Validate the hash
$ echo "5020da7139d85c776059f351e0de8fdec753affc9c558e892472d43ebeb518f4  actions-runner-linux-x64-2.325.0.tar.gz" | shasum -a 256 -cCopied!
# Extract the installer
$ tar xzf ./actions-runner-linux-x64-2.325.0.tar.gz
# Create the runner and start the configuration experience
$ ./config.sh --url https://github.com/ntthanh2603/deploy-to-ec2-by-github-ci-cd --token BK5GQLUHGIMFIO2UFQPUCRDIMPLY2

sudo ./svc.sh install

sudo ./svc.sh start

# Install Nodejs in server
sudo apt update
sudo apt upgrade
sudo apt install -y curl
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Check version Nodejs
node --version

# Install PM2
sudo npm install pm2 -g

# Create file ecosystem.config.js and run cli
pm2 start ecosystem.config.js
```
