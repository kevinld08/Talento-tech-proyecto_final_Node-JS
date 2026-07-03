import jwt from "jsonwebtoken";

export const login = (req, res) => {
  try {
    const { user, password } = req.body || {};

    if (!user || !password) {
      return res.status(400).json({ error: "Faltan datos" });
    }

    if (user === "admin" && password === "1234") {
      const token = jwt.sign(
        { user },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      return res.json({ token });
    }

    return res.status(401).json({ error: "Credenciales inválidas" });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};