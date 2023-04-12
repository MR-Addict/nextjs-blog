export default async function handler(req, res) {
  try {
    const response = await fetch("https://meme-api.com/gimme").then(res => res.json());
    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: false, message: "Cannot get nqdxx data" });
  }
}
