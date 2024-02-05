const helper = require('./helper');

async function inviteApi(baseUrl, config, method, params) {
  const url = new URL(baseUrl);
  const auth = Buffer.from(`${config.username}:${config.apiKey}`).toString(
    'base64'
  );
  const authHeader = `Basic ${auth}`;
  const options = { method, headers: { Authorization: authHeader } };
  if (method === 'POST') {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }
  const response = await helper.fetch(url.href, options);
  try {
    return response.json();
  } catch (e) {
    if (e instanceof SyntaxError) {
      // We probably got a non-JSON response from the server.
      // We should inform the user of the same.
      let message = 'Server Returned a non-JSON response.';
      if (response.status === 404) {
        message += ` Maybe endpoint: ${method} ${response.url.replace(
          config.apiURL,
          ''
        )} doesn't exist.`;
      } else {
        message += ' Please check the API documentation.';
      }
      const error = new Error(message);
      error.res = response;
      throw error;
    }
    throw e;
  }
}

module.exports = inviteApi;
