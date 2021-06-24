const Sequelize = require('sequelize')
const { sequelize } = require('./index')
const db = require('./index')

module.exports = (sequelize, Sequelize)=>{
    const Manager = sequelize.define("managers",{
        name:{
            type:Sequelize.STRING
        },
        dept: Sequelize.STRING
    })
    return Manager;
}