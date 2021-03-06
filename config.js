var Private = {
  server: {port: '61440'}, // Port is overriden by env var 'WWW_PORT'
  security: {
    authorizedIps: [
      '127.0.0.1',
      'localhost'
    ],
    bitbucketIps: [
		'131.103.20.160/27',
		'165.254.145.0/26',
		'104.192.143.0/24'
    ],
    githubIps: [
      '207.97.227.253',
      '50.57.128.197',
      '204.232.175.75',
      '108.171.174.178'
    ],
    githubAuthorizedSubnets: [
      '204.232.175.64/27',
      '192.30.252.0/22'
    ]
  },
  repository: {
    branch: 'master'
  },
  action: {
    exec: {
      github: '/home/node-cd/github.sh',
      bitbucket: './bitbucket.sh',
      contentful: './contentful.sh'
    }
  }
}

module.exports = Private
