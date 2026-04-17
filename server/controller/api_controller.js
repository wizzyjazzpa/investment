const { response } = require('express');
const UserModel = require('../models/users_model');
const bcrypt = require('bcryptjs');

const checkuserName = async (username) => {

    const userName = await UserModel.findOne({ Username: username })
    return userName;

}
const checkEmail = async (email) => {
    const userEmail = await UserModel.findOne({ Email: email });
    return userEmail;
}
exports.Register = async (req, res) => {
    const { Name, Username, Email, Phone, Gender, Country, Password, Account_Type } = req.body;
    try {
        const existingUser = await checkuserName(Username);
        if (existingUser){
                return res.json({ sucess: false, message: "Username already exsists", status:400 });
        } 

        const existingEmail = await checkEmail(Email);
        if (existingEmail){
                return res.json({ seccess: false, message: "Email Already exists", status:402 })
        } 

        const hashed = await bcrypt.hash(Password, 10);
        const user = await UserModel.create({ Name, Username, Email, Phone, Gender, Country, Password: hashed, Account_Type });
        if (user) {
            console.log(user)
            res.json({
                data: user,
                success: true
            })
        }


    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: err.message })
    }

}