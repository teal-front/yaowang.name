module.exports = {
  apps: [{
    "name": "app",
    "cwd": "/data/main/yaowang.name",
    "script": "app.js",
    "instances": 1,
    "exec_mode": "fork",
    "max_memory_restart": "500M",
    "max_restarts": 10,
    "error_file": "/dev/null",
    "log_file": "/dev/null",
    "out_file": "/dev/null",
    "merge_logs": true,
    "watch": true,
    "log_date_format": "YYYY-MM-DD HH:mm:ss Z",
    "env_production": {
      NODE_ENV: 'production'
    }
  }, ],
  deploy: {
    production: {
      key: '~/.ssh/google_teal',
      user: 'teal',
      host: '35.201.140.94',
      ref: 'origin/master',
      repo: 'git@github.com:teal-front/yaowang.name.git',
      path: '/data/main/yaowang.name',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    },
  }
};
