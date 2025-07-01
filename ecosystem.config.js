module.exports = {
  apps: [
    {
      name: 'deploy-to-ec2-by-github-ci-cd',
      script: 'docker',
      args: 'compose up --build',
      cwd: '/home/ubuntu/deploy-to-ec2-by-github-ci-cd/actions-runner/_work/deploy-to-ec2-by-github-ci-cd/deploy-to-ec2-by-github-ci-cd',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
