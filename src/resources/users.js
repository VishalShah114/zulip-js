const api = require('../api');
const inviteApi = require('../inviteApi');

function users(config) {
  return {
    retrieve: (params) => {
      const url = `${config.apiURL}/users`;
      return api(url, config, 'GET', params);
    },
    create: (params) => {
      const url = `${config.apiURL}/users`;
      return api(url, config, 'POST', params);
    },
    invites: {
      save: (params) => {
        const url = `${config.apiURL}/invites`;
        return inviteApi(url, config, 'POST', params);
      },
      retrieve: (params) => {
        const url = `${config.apiURL}/invites`;
        return inviteApi(url, config, 'GET', params);
      },
      resend: (params) => {
        const url = `${config.apiURL}/invites/${params.id}/resend`;
        return inviteApi(url, config, 'GET', params);
      },
      rewoke: (params) => {
        const url = `${config.apiURL}/invites/${params.id}`;
        return inviteApi(url, config, 'DELETE', params);
      }
    },
    me: {
      pointer: {
        retrieve: (params) => {
          const url = `${config.apiURL}/users/me/pointer`;
          return api(url, config, 'GET', params);
        },
        update: (id) => {
          const url = `${config.apiURL}/users/me/pointer`;
          return api(url, config, 'POST', { pointer: id });
        },
      },
      getProfile: () => {
        const url = `${config.apiURL}/users/me`;
        return api(url, config, 'GET');
      },
      subscriptions: {
        add: (params) => {
          const url = `${config.apiURL}/users/me/subscriptions`;
          return api(url, config, 'POST', params);
        },
        remove: (params) => {
          const url = `${config.apiURL}/users/me/subscriptions`;
          return api(url, config, 'DELETE', params);
        },
      },
      alertWords: {
        retrieve: (params) => {
          const url = `${config.apiURL}/users/me/alert_words`;
          return api(url, config, 'GET', params);
        },
      },
    },
  };
}

module.exports = users;
