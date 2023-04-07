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
            <p>Tôi là hệ thống SCIS từ website Smart card ID services.</p>
            <span><nobr>Tôi cần bạn xác minh tài khoản: vui lòng ấn <a href="http://localhost:8000/api/user/verify?id=${user.verificationCode}
            ">vào đây</a> để xác minh</span>
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

   const sendVerifyMailPassword = (user) => {
    console.log("xác minh email đổi mật khẩu mới ")
    return {
          from: mailer_config.SCIS_USERNAME,
          to: user.email,
          subject: 'Forgot password - SCIS',
          html:`
             Chào ${user.fullName},
             <p>Tôi là hệ thống SCIS từ website Smart card ID services.</p>
             <span><nobr> Vui lòng ấn <a href="http://localhost:8000/api/user/forgot?id=${user.userId}
            ">vào đây</a> để đổi mật khẩu mới</span>
            <p>Cảm ơn bạn vì đã sử dụng hệ thống!</p>
            `
       };
    }

const sendMailPassword = async (user) => {
    const info = {
        fullName: user.fullName,
        email: user.email,
        userId: user.userId,
    }
    await sendEmailUser(info, sendVerifyMailPassword);
}


module.exports = { sendEmailUser, sendVerifyMail, sendVerifyRegister, sendMailPassword }

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