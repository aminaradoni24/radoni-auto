// /functions/single-product.js
exports.handler = async function (event, context, cb) {
  console.log(event.queryStringParameters)
  const { id } = event.queryStringParameters
  if (id) {
    return {
      statusCode: 200,
      body: "single product",
    }
  }
  return {
    statusCode: 400,
    body: "please provide product id",
  }
}
