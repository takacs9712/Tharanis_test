export const validateEmail = (email: string): string | null => {
  if (!email) {
    return "Email megadása kötelező";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    return "Érvénytelen email formátum";
  }
  return null;
};

// Minimalistic validation

export const validatePassword = (password: string): string | null => {
  if (!password) {
    return "Jelszó megadása kötelező";
  } else {
    if (password.length < 8) {
      return "A jelszónak legalább 8 karakter hosszúnak kell lennie";
    }
    if (!/[a-z]/.test(password)) {
      return "A jelszónak tartalmaznia kell kisbetűt";
    }
    if (!/[A-Z]/.test(password)) {
      return "A jelszónak tartalmaznia kell nagybetűt";
    }
    if (!/[0-9]/.test(password)) {
      return "A jelszónak tartalmaznia kell számot";
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return "A jelszónak tartalmaznia kell speciális karaktert";
    }
  }
  return null;
};
