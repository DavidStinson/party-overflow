import jwt from 'jsonwebtoken'

const SECRET = process.env.SECRET

function decodeUserFromToken(req, res, next) {
    let token = req.get('Authorization') || req.query.token || req.body.token
    if (token) {
        token = token.replace('Bearer ', '')
        jwt.verify(token, SECRET, (err, decoded) => {
            if (err) {
                next(err)
            } else {
                req.user = decoded.user
                next()
            }
        })
    } else {
        next()
    }
}

export {
  decodeUserFromToken
}