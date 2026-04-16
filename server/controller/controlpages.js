exports.home = async(req,res)=>{
      const locals={
           title:"Home - Globalincomeinvest"
      }
       res.render('Pages/index', locals)
}