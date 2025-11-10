// pages/api/extract.js
import Anthropic from '@anthropic-ai/sdk';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { pdfBase64, apiKey } = req.body;

    if (!pdfBase64 || !apiKey) {
      return res.status(400).json({ error: 'PDF und API Key erforderlich' });
    }

    // Anthropic Client erstellen
    const anthropic = new Anthropic({
      apiKey: apiKey,
    });

    // Claude API Call
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4000,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'document',
              source: {
                type: 'base64',
                media_type: 'application/pdf',
                data: pdfBase64,
              },
            },
            {
              type: 'text',
              text: `Analysiere diese Rechnung und extrahiere die wichtigsten Daten.

Gib die Daten in diesem einfachen Format zurück:

Rechnungsnummer: [Nummer]
Datum: [Datum]
Lieferant: [Name]
Adresse: [Adresse]
Netto-Betrag: [Betrag] €
USt-Betrag: [Betrag] €
Brutto-Betrag: [Betrag] €
USt-Satz: [Satz]
Zahlungsziel: [Datum/Tage]

Falls vorhanden, liste auch die wichtigsten Rechnungspositionen auf.

Antworte nur mit den extrahierten Daten, ohne zusätzliche Erklärungen.`,
            },
          ],
        },
      ],
    });

    const resultText = message.content[0].text;

    return res.status(200).json({
      success: true,
      data: resultText,
    });
  } catch (error) {
    console.error('Fehler:', error);
    return res.status(500).json({
      error: error.message || 'Ein Fehler ist aufgetreten',
    });
  }
}
