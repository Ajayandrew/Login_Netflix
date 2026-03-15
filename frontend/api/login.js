const USER = { email: "laddu@netflix.com", password: "Thangam@91" };

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, password } = req.body;

    if (email === USER.email && password === USER.password) {
      res.status(200).json({ success: true, message: "Login successful" });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid request body" });
  }
}