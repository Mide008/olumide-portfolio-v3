module.exports = function handler(req, res) {
  res.status(200).json({ ok: true, message: "Serverless functions are working." });
};