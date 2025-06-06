import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

function autenticacao(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        res.status(401).json({ message: 'Token Invalido' })
        return;
    }

    const [, token] = authHeader.split(" ");

    try {
        const dadosToken = verify(token, 'NAOPASSARNGM_20452156')
        console.log('dadosToken', dadosToken)

        next()
        return;
    } catch (error) {
        res.status(401).json({ message: "Token Invalido" })
        return;
    }
}

export default autenticacao