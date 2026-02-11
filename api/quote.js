import { Resend } from 'resend';

export const config = {
    runtime: 'nodejs',
};

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const {
            firstName,
            lastName,
            email,
            phone,
            vehicles,
            origin,
            destination,
            date,
            time,
            transportType,
            comments,
        } = req.body;

        if (!firstName || !lastName || !email) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        await resend.emails.send({
            from: 'haulingservices@ec5startransports.com', // MUST be verified in Resend
            to: 'haulingservices@ec5startransports.com',
            reply_to: email,
            subject: `New Quote Request - ${firstName} ${lastName}`,
            html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Vehicles:</strong> ${vehicles}</p>
        <p><strong>Origin:</strong> ${origin}</p>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Transport Type:</strong> ${Array.isArray(transportType)
                    ? transportType.join(', ')
                    : transportType || 'N/A'
                }</p>
        <p><strong>Comments:</strong> ${comments || 'None'}</p>
      `,
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Resend Error:', error);
        return res.status(500).json({ error: 'Email failed to send' });
    }
}
