exports.register = async(req,res)=>{
        const locals ={
              title:"Globalincomeinvest- Register"
        }
        res.render('auth/register')
}
exports.login = async(req,res)=>{
       res.render('auth/login')
}