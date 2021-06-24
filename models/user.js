const Sequelize = require('sequelize');
const db = require('../models/index')

module.exports = (sequelize, Sequelize) => {
const User =  sequelize.define("users",{
        name:Sequelize.STRING,
        email:{
            type: Sequelize.STRING,
            defaultValue: "test@gmail.com"
        },
        gender:{
            type: Sequelize.STRING
        }
    });
    return User;
}

// get user with id
exports.deleteOneUser = (req,res) => {
    const id = req.params.id;
    userModel.destroy({
        where:{id:id}
    })
    .then(num => {
        if(num ==1 ){
            res.status(200).json({
                message:`User with id ${id} deleted successfully`
            })
        }
        else{
            res.send({
                message:`Cannot delete user with id ${id}`
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            message: err
        })
    })
}

