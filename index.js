const { create } = require('@adiwajshing/baileys');
const fs = require('fs');

async function generateQRCode() {
    const client = create();

    client.on('qr', qr => {
        // Save QR code to a file
        fs.writeFileSync('./qr_code.png', qr);
    });

    await client.connect();
}

generateQRCode().catch(console.error);
