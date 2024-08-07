import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required:true,
    },
    profilePicture:{
        type: String,
        default: "https://images.search.yahoo.com/images/view;_ylt=Awr9zPAX4FlmZ78l4HeJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzE2NDU0NGIwOTc4NTdkMThjYTc4NWM4ZjdjNDc0MWE5BGdwb3MDMQRpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3DDefault%2BUser%2BProfile%2BPhoto%26type%3DE211US714G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Ars-algo-rel%26tab%3Dorganic%26ri%3D1&w=860&h=752&imgurl=www.kindpng.com%2Fpicc%2Fm%2F24-248253_user-profile-default-image-png-clipart-png-download.png&rurl=https%3A%2F%2Fwww.kindpng.com%2Fimgv%2Fiwoxbb_user-profile-default-image-png-clipart-png-download%2F&size=18.8KB&p=Default+User+Profile+Photo&oid=164544b097857d18ca785c8f7c4741a9&fr2=p%3As%2Cv%3Ai%2Cm%3Ars-algo-rel&fr=mcafee&tt=User+Profile+Default+Image+Png+Clipart+%2C+Png+Download+-+Default+User+Profile+Picture+Download+...&b=0&ni=90&no=1&ts=&tab=organic&sigr=psee422tOeph&sigb=uswxHnBTZfmC&sigi=WTFDXsvT5tMk&sigt=DxzyXl..nE.f&.crumb=XRoA1RTA/F2&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Ars-algo-rel&type=E211US714G0",
    },
    isAdmin: {
        type: Boolean,
        default: false,
      },
    }, {timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;