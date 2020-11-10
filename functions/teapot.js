exports.handler = async function (event, context) {
  return {
    statusCode: 418,
    body: JSON.stringify({ message: 'Je suis monsieur teapot' }),
  };
};
