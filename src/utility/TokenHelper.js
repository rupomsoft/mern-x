const jwt=require('jsonwebtoken');

exports.EncodeToken=(email,user_id)=>{
    let KEY="123-ABC-XYZ";
    let EXPIRE={expiresIn: '30d'}
    let PAYLOAD={email:email, user_id:user_id}
    return jwt.sign(PAYLOAD,KEY,EXPIRE)
}

exports.DecodeToken=(token)=>{
    try {
        let KEY="123-ABC-XYZ";
        return jwt.verify(token,KEY)
    }
    catch (e) {
        return null
    }
}