const themeService = require("../services/theme.service")


const themeController ={
    getAll: async(req, res) => {

    },
    createTheme: async (req, res)=>{
        try {
            const {color, background, box, border} = req.body
        await themeService.createTheme({color, background, box, border})

        res.status(201).json({
            message: 'success',
            error: 0,
        })

        } catch (error) {
            res.status(400).json({
                message: `Có lỗi xảy ra! ${error.message}`,
                error: 1,
            })
        }
        
    }
}

module.exports = themeController
