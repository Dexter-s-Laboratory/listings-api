var db = require ('../db')

module.exports = {
  getALL: async (product_id) => {
    let exampleQuery = 'SELECT * FROM listings WHERE product_id = $1'
    return await db.query(exampleQuery, product_id)
  },
  create: (data) => {
    const { name, address,  email, interests, auth } = data
    return await db.query(`
    INSERT INTO users (name, address,  email, interests, auth) VALUES($1, $2, $3, $4, $5)`,
    [name, address, email, interests, auth]);
  },
};