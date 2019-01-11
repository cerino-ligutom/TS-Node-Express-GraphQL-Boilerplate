module.exports = {
  apps: [
    {
      name: 'EMERE-GraphQL',
      script: 'index.js',

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      autorestart: true,
      max_restarts: 1,
      min_uptime: 10000,
      watch: ['src/'],
      max_memory_restart: '1G'
    }
  ]

  // deploy: {
  //   production: {
  //     user: 'node',
  //     host: '212.83.163.1',
  //     ref: 'origin/master',
  //     repo: 'git@github.com:repo.git',
  //     path: '/var/www/production',
  //     'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
  //   },
  // },
};
