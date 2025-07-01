module.exports = {
  apps: [
    // {
    //   name: 'deploy-to-ec2-by-github-ci-cd',
    //   script: 'docker',
    //   args: 'compose up --build -d',
    //   cwd: '/home/ubuntu/deploy-to-ec2-by-github-ci-cd/',
    //   instances: 1,
    //   autorestart: true,
    //   watch: false,
    //   max_memory_restart: '1G',
    //   env: {
    //     NODE_ENV: 'production',
    //   },
    // },
    {
      name: 'deploy-to-aws',
      script: 'npm',
      args: 'run start:dev',
      cwd: '/home/ubuntu/deploy-to-ec2-by-github-ci-cd/',
      watch: false,
      autorestart: true,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
