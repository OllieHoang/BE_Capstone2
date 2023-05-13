const themeService = require('../services/theme.service');

const themeController = {
   getTheme: async(req,res) => {
      try{
         const theme = await themeService.getTheme();
         if(theme) {
            return res.status(200).json({
               message: 'success',
               error: 0,
               theme
            })
         }
      }catch{
         return res.status(500).json({message: err.message, error: 1})
      }
   },

   postTheme: async(req,res) => {
      try{

         const data = req.body
         const theme = await themeService.postTheme(data)
         if(theme) {
            return res.status(200).json({
               message: 'success',
               error: 0,
               theme
            })
         }
      }catch (err){
         return res.status(500).json({message: err.message, error: 1})
      }
   },
   updateTheme: async(req,res) => {
      try{
         const themeId = req.params;
         const themeUpdate = req.body;
         const { avatar: { publicId } } = await userService.getById(userId)
         if  (publicId) {
            await cloudinary.uploader.destroy(publicId)
        }
         const newTheme = await themeService.updateTheme(themeId,{ themeUpdate });
         if(newTheme) {
            return res.status(200).json({
               message: 'success',
               error: 0,
               newTheme
           })
         }
      }catch(err) {
         res.status(500).json({message: err.message, error: 1})
      }
   }
}

module.exports = themeController;

