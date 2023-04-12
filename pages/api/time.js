export default async function handler(req, res) {
  return res.status(200).json({ status: true, time: new Date() });
}
