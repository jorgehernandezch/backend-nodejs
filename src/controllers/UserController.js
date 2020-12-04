const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const users = await connection('users').select('*');

        return response.json(users);
    },


    async create(request, response) {
      const { nome, email } = request.body;

      await connection('users').insert({
        nome,
        email
      })
      return response.json({ status : "User created"});
    }   
};