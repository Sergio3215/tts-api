import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js';
import express from 'express';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
// CORS: permite todos los orígenes (solo para pruebas)
// Para producción, reemplaza "*" por tu frontend real.
app.use(cors({ origin: "*" }));

app.use(express.json());

const elevenlabs = new ElevenLabsClient({
    apiKey: process.env.ELEVENLABS_API_KEY,
});

//jsCqWAovK2LkecY7zXl4

app.post('/api/v0.1/tts', async (req, res) => {
    const { text, voice, channel } = req.body;

    if (text.length < 480) {
        try {
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
    }
    else {

        try {

            if (channel == '' || channel == "Your-Channel") {
                throw new Error('Channel is not specified or is invalid.');
            }

            const msg = `El texto no puede superar los 2500 caracteres. El texto que intentaste enviar tiene ${text.length} caracteres.`;
            const ftch = await fetch('https://service-events-twitch-production.up.railway.app/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    channel: channel,
                    message: msg
                })
            });
        }
        catch (error) {

        }

        res.status(401).json({ status: 'Error', error: 'Limite de Caracter Alcanzado', message: 'El texto no puede superar los 2500 caracteres.' });
    }

});

const getInstructions = (voice) => {


    switch (voice) {
        case 'jlIgiDSr6st6wgbFwg6M':
            return {
                voice: 'ash',
                instructions: "masculino, voz gruesa, sexy pero casual, que al hablar stire las palabras como gatito, sensual, misterioso"
            };
        case 'XycthGC05N1kfJIb8PMg':
            return {
                voice: 'ash',
                instructions: "Argentine voice, of a 33 year old young man, with a serious touch. Ideal for documentary videos or narrations."
            };
        case 'vq5cuHPb1qXLvcxQ2G6R':
            return {
                voice: 'sage',
                instructions: "A warm and affectionate female voice with a soft and seductive touch."
            };
        case 'UAgSwRTuuMB0UcxqWTOG':
            return {
                voice: 'shimmer',
                instructions: "Colombiana, voz dulce, suave, penosa, timida y voz de angel"
            };
        default:
            return {
                voice: 'echo',
                instructions: "masculino, voz neutra y amigable"
            };
    }

}


//v0.2
app.post('/api/tts', async (req, res) => {
    const { text, voice = 'ash', channel } = req.body;

    if (text.length < 480) {

        let data = {
            voice: voice,
            instructions: "masculino, voz gruesa, sexy pero casual, que al hablar stire las palabras como gatito, sensual, misterioso"
        };

        if (voice != 'ash') {
            data = getInstructions(voice);
        }

        try {

            const response = await fetch('https://api.openai.com/v1/audio/speech', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + process.env.OPENAI_API_KEY,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: "gpt-4o-mini-tts",
                    input: text,
                    voice: data.voice,
                    instructions: data.instructions,
                    response_format: "mp3"
                }),
            });
            const arrayBuffer = await response.arrayBuffer();
            const audioBuffer = Buffer.from(arrayBuffer);

            res.set('Content-Type', 'application/json');
            res.send({
                audio: audioBuffer.toString('base64'),
                status: 'Success'
            });

            // Convierte el stream a buffer:
            // const audioBuffer = await streamToBuffer(response);

            // res.json({ response });
            // res.set('Content-Type', 'application/json');
            // res.send({
            //     audio: res.toString('base64'),
            //     status: 'Success'
            // });
        }
        catch (error) {
            console.error('Error generating TTS:', error);
            res.status(500).json({ status: 'Error', error: 'Failed to generate TTS', message: error.message });
        }
    }
    else {

        try {

            if (channel == '' || channel == "Your-Channel") {
                throw new Error('Channel is not specified or is invalid.');
            }

            const msg = `El texto no puede superar los 2500 caracteres. El texto que intentaste enviar tiene ${text.length} caracteres.`;
            const ftch = await fetch('https://service-events-twitch-production.up.railway.app/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    channel: channel,
                    message: msg
                })
            });
        }
        catch (error) {

        }

        res.status(401).json({ status: 'Error', error: 'Limite de Caracter Alcanzado', message: 'El texto no puede superar los 2500 caracteres.' });
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

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});