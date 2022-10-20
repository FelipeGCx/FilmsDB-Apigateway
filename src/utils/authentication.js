const { ApolloError } = require("apollo-server");
const serverConfig = require("../server");
const fetch = require("node-fetch");

const authentication = async ({ req }) => {
  const token = req.headers.authorization || "";
  if (token == "") return { user: null };
  else {
    try {
      let requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
        // redirect: 'follow'
      };
      // console.log("option", requestOptions);
      let response = await fetch(
        `${serverConfig.films_api_url}/auth/verifytoken`,
        requestOptions
      );
      //   console.log("the response", await response.json());
      if (response.status != 200) {
        throw new ApolloError(
          `SESION INACTIVA - ${401}` + response.status,
          401
        );
      }
      response = await response.json();
    //   console.log("the response", response.data);
      return { user: response.data };
    } catch (error) {
      throw new ApolloError(`TOKEN ERROR: ${500}: ${error}`, 500);
    }
  }
};
module.exports = authentication;
