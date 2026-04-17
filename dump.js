const hashed = await bcrypt.hash(Password, 10);
        const user = await UserModel.create({ Name,Username,Email,Phone,Gender,Country, Password: hashed, Account_Type });
        if (user) {
            console.log('worked')
            res.json({
                data: user,
                success: true
            })
        }