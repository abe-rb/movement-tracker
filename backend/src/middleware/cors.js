export function cors(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", process.env.ALLOWED_ORIGINS);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
}
