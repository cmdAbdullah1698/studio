export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  console.log('New Contact Form Submission:', { name, email, message });

  // Optional: send to email, database, or third-party service here

  return res.status(200).json({ message: 'Message received! Thank you.' });
}
