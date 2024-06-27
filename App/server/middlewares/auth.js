import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (authHeader) {
            const token = authHeader.split(" ")[1];
            let decodeData = jwt.verify(token, process.env.JWT_SECRET);
            req.userId = decodeData?.id;
            next();
        } else {
            // Handle the lack of authorization header
            return res.status(401).json({ message: "No authorization token provided." });
        }
    } catch (error) {
        console.log(error);
        // Respond with the appropriate error message and status code
        return res.status(401).json({ message: "Invalid or expired token." });
    }
};

export default auth;
