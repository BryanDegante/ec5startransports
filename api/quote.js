import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    console.log('--- /api/quote Hit ---');

    if (!process.env.RESEND_API_KEY) {
        console.error('❌ RESEND_API_KEY is missing!');
        return res.status(500).json({
            error: 'Server misconfiguration: RESEND_API_KEY is missing',
        });
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const {
        firstName,
        lastName,
        email,
        phone,
        vehicles,
        origin,
        destination,
        pickupDate,
        pickupTime,
        dropoffDate,
        dropoffTime,
        transportType,
        comments,
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !pickupDate || !pickupTime || !dropoffDate || !dropoffTime) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Server-side validation: Drop-off must not be before pickup
    const pickupDateTime = new Date(`${pickupDate} ${pickupTime}`);
    const dropoffDateTime = new Date(`${dropoffDate} ${dropoffTime}`);

    if (dropoffDateTime < pickupDateTime) {
        return res.status(400).json({
            error: 'Drop-off date/time cannot be before pickup date/time.'
        });
    }

    console.log('Request body:', req.body);

    try {
        // Send email via Resend
        const result = await resend.emails.send({
            from: 'haulingservices@ec5startransports.com',
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
                <p><strong>Pickup Date:</strong> ${pickupDate}</p>
                <p><strong>Pickup Time:</strong> ${pickupTime}</p>
                <p><strong>Drop-off Date:</strong> ${dropoffDate}</p>
                <p><strong>Drop-off Time:</strong> ${dropoffTime}</p>
                <p><strong>Transport Type:</strong> ${transportType?.join(', ')}</p>
                <p><strong>Comments:</strong> ${comments}</p>
            `,
        });

        console.log('✅ Resend result:', result);

        return res.status(200).json({ success: true, result });
    } catch (err) {
        console.error('❌ Resend send error:', err);

        return res.status(500).json({
            error: 'Email failed',
            details: err.message || err.toString(),
        });
    }
}
