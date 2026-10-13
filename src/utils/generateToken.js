import jwt from 'jsonwebtoken';

const generateToken = (user) => {
  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
    role_id: user.role_id,
    is_active: user.is_active,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};

export default generateToken;
