import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js';
import express from 'express';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

const elevenlabs = new ElevenLabsClient({
    apiKey: process.env.ELEVENLABS_API_KEY,
});

//jsCqWAovK2LkecY7zXl4

app.post('/api/tts', async (req, res) => {
    const { text, voice } = req.body;

    try {
        console.log('Received request for TTS:', { text, voice });
        const response = await elevenlabs.textToSpeech.convert(voice, {
            text: text,
            modelId: 'eleven_flash_v2_5'
        });

        // Convierte el stream a buffer:
        const audioBuffer = await streamToBuffer(response);

        // res.json({ response });
        res.set('Content-Type', 'application/json');
        res.send({
            audio: audioBuffer.toString('base64'),
            status: 'Success'
        });

    } catch (error) {
        console.error('Error generating TTS:', error);
        res.status(500).json({ status: 'Error', error: 'Failed to generate TTS', message: error.message });
    }
});

// Función utilitaria:
async function streamToBuffer(stream) {
    const chunks = [];
    for await (const chunk of stream) {
        chunks.push(chunk);
    }
    return Buffer.concat(chunks);
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});