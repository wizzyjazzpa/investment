exports.home = async(req,res)=>{
      const locals={
           title:"Home - Globalincomeinvest"
      }
       res.render('Pages/index', locals)
}

exports.about = async(req,res)=>{
       const locals={
           title:"About- Globalincomeinvest"
      }
       res.render('Pages/about-us', locals)
}

exports.contact = async(req,res)=>{

         const locals={
           title:"Contact- Globalincomeinvest"
      }
       res.render('Pages/contact', locals)
}

