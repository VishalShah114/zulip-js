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
    deactivate: (params) => {
      const url = `${config.apiURL}/users/${params.id}`;
      return api(url, config, 'DELETE', params);
    },
    update: (params) => {
      const url = `${config.apiURL}/users/${params.id}`;
      return api(url, config, 'PATCH', params);
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
        return inviteApi(url, config, 'POST', params);
      },
      revoke: (params) => {
        const url = `${config.apiURL}/invites/${params.id}`;
        return inviteApi(url, config, 'DELETE', params);
      },
    },
    groups: {
      retrieve: (params) => {
        const url = `${config.apiURL}/user_groups`;
        return api(url, config, 'GET', params);
      },
      create: (params) => {
        const url = `${config.apiURL}/user_groups/create`;
        return api(url, config, 'POST', params);
      },
      update: (params) => {
        const url = `${config.apiURL}/user_groups/${params.id}`;
        return api(url, config, 'PATCH', params);
      },
      delete: (params) => {
        const url = `${config.apiURL}/user_groups/${params.id}`;
        return api(url, config, 'DELETE', params);
      },
      members: {
        upsate: (params) => {
          const url = `${config.apiURL}/user_groups/${params.id}/members`;
          return api(url, config, 'POST', params);
        },
        status: (params) => {
          const url = `${config.apiURL}/user_groups/${params.id}/members/${params.memberId}`;
          return api(url, config, 'GET', params);
        },
        retrieve: (params) => {
          const url = `${config.apiURL}/user_groups/${params.id}/members`;
          return api(url, config, 'GET', params);
        },
      },
      updateSubgroups: (params) => {
        const url = `${config.apiURL}/user_groups/${params.id}/subgroups`;
        return api(url, config, 'POST', params);
      },
      getSubgroups: (params) => {
        const url = `${config.apiURL}/user_groups/${params.id}/subgroups`;
        return api(url, config, 'GET', params);
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
      delete: (params) => {
        const url = `${config.apiURL}/users/me##CAREFUL##`;
        return api(url, config, 'DELETE', params);
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
