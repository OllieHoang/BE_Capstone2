const nodemailer = require('nodemailer');
const mailer_config = require('../configs/mailer.config');

const sendEmailUser = async (user, objectNeedSend) => {
   let transporter = nodemailer.createTransport({
       host: mailer_config.MAILER_HOST,
       port: mailer_config.MAILER_PORT,
       secure: mailer_config.MAILER_SECURE, 
       auth: {
           user: mailer_config.SCIS_USERNAME, 
           pass: mailer_config.SCIS_PASSWORD,
       },
   });

   let info = await transporter.sendMail(
       objectNeedSend(user)
   )
       .then(data => data)
       .catch(err => err);

   return info.messageId;
}

const sendVerifyMail = (user) => {
   console.log("gửi mail xác minh tài khoản")
   return {
         from: mailer_config.SCIS_USERNAME,
         to: user.email,
         subject: 'Xác minh tài khoản - SCIS',
         html:`
            Chào ${user.fullName},
            <p>Tôi là hệ thống SCIS từ website Smart card ID services. Tôi cần bạn xác minh email: </p>
            <span><nobr> Mã xác minh của bạn là: ${user.verificationCode}</span>
            <p>Cảm ơn bạn vì đã sử dụng hệ thống!</p>
            `
      };
   }
   const sendVerifyMailPassword = (user) => {
    console.log("Gửi mã code reset password ")
    return {
          from: mailer_config.SCIS_USERNAME,
          to: user.email,
          subject: 'Forgot password - SCIS',
          html:`
             Chào ${user.fullName},
             <p>Tôi là hệ thống SCIS từ website Smart card ID services.</p>
             <span><nobr> Mã xác minh đổi mật khẩu của bạn là: ${user.verificationCode}</span>
             <p>Cảm ơn bạn vì đã sử dụng hệ thống!</p>
             `
       };
    }

const sendVerifyRegister = async (user) => {
    const info = {
        fullName: user.fullName,
        email: user.email,
        verificationCode: user.verificationCode,
    }
    await sendEmailUser(info, sendVerifyMail);
}
const sendVerifyPassword = async (user) => {
    const info = {
        fullName: user.fullName,
        email: user.email,
        verificationCode: user.verificationCode,
    }
    await sendEmailUser(info, sendVerifyMail);
}


module.exports = { sendEmailUser, sendVerifyMail, sendVerifyRegister }

/* const info = await database.User.findOne({
      where: {
          email: value.email
      },
      raw: true
  });
  const sendInfo = {
      fullName: info.fullName,
      email: info.email,
  }
    await sendEmailUser(sendInfo, sendVerifyMail);
    */