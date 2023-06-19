
const {knex} = require("./connection") 

//update airlines
const updateAirline = async (airline)=> {
    const rowsUpdate = await knex("airlines").where({Id : airline.Id}).update(airline)
    return rowsUpdate
}


//delete from airlines.
const deleteAirline = async(id) => {
    const result = await knex("airlines").where({Id: id}).del()
    return result
}

module.exports = {
    updateAirline,
    deleteAirline
}