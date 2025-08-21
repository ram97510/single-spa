// api.js
const users = [
    { id: 1, username: 'admin', password: '12345' },
    // Add more users here
  ];
  
  const SECRET_KEY = 'your-secret-key';
  
  export function login(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      const token = jwt.sign({ sub: user.id }, SECRET_KEY, { expiresIn: '1h' });
      return token;
    }
    return null;
  }
  
  export function getUserFromToken(token) {
    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      const user = users.find(u => u.id === decoded.sub);
      return user;
    } catch (error) {
      return null;
    }
  }
  