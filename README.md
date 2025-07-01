<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<p align="center">
  A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.
</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank">
    <img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" />
  </a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank">
    <img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" />
  </a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank">
    <img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" />
  </a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank">
    <img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" />
  </a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank">
    <img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord" />
  </a>
  <a href="https://opencollective.com/nest#backer" target="_blank">
    <img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" />
  </a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank">
    <img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" />
  </a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank">
    <img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate via PayPal" />
  </a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank">
    <img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us" />
  </a>
  <a href="https://twitter.com/nestframework" target="_blank">
    <img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter" />
  </a>
</p>

---

## 📦 Project Description

This repository provides a complete guide to deploying a NestJS application using GitHub Actions for CI/CD on an AWS EC2 instance.

---

## 🚀 Setup Instructions

### Step 1: Create and Connect to EC2 Instance

1. Launch an EC2 instance on AWS and download the key pair (`.pem` file).
2. Move the `.pem` file to your project root or local SSH directory.
3. Connect to the instance via SSH (e.g., using Termius).
4. Install required tools such as Docker and PostgreSQL.

```bash
# Check Ubuntu version
lsb_release -a

# Verify Docker installation
docker -v
```

### Step 2: Clone the Repository and Run the App

```
# Clone the GitHub repository
git clone https://github.com/ntthanh2603/deploy-to-ec2-by-github-ci-cd.git

# Navigate to the project directory
cd deploy-to-ec2-by-github-ci-cd

# Build the Docker image
sudo docker build -t nestjs-app .

# Run the Docker container
sudo docker run -d \
  --name nestjs-backend \
  -p 3000:3000 \
  --restart unless-stopped \
  nestjs-app

# Check running containers
sudo docker ps

# View container logs
sudo docker logs nestjs-backend
```

### Step 3: Open Port 3000 on EC2

1. Go to your EC2 dashboard.

2.Select the instance → "Security" tab → Click on the Security Group.

3. Under "Inbound Rules", click Edit Inbound Rules → Add rule:

- Type: Custom TCP
- Port Range: 3000
- Source: Anywhere (or restrict by IP)

4. Save the rule.

### Step 4: Set Up GitHub Actions Runner on EC2

```bash
# Create a directory for the runner
mkdir actions-runner && cd actions-runner

# Download the GitHub Actions runner
curl -o actions-runner-linux-x64-2.325.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.325.0/actions-runner-linux-x64-2.325.0.tar.gz

# (Optional) Verify checksum
echo "5020da7139d85c776059f351e0de8fdec753affc9c558e892472d43ebeb518f4  actions-runner-linux-x64-2.325.0.tar.gz" | shasum -a 256 -c

# Extract the runner
tar xzf ./actions-runner-linux-x64-2.325.0.tar.gz

# Configure the runner
./config.sh --url https://github.com/ntthanh2603/deploy-to-ec2-by-github-ci-cd --token YOUR_GENERATED_TOKEN_HERE

# Install and start the service (Option)
# sudo ./svc.sh install
# sudo ./svc.sh start

# You should use "tmux" to not lose the terminal when running:
sudo apt install tmux -y
tmux
./run.sh
# Press "Ctrl + b" then "d" to detach the tmux session (runner still runs in the background).
```

### Step 5: Install Node.js on the Server (Optional)

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl

# Install Node.js v20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node --version

```
