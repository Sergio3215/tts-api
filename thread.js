export async function enviarMensaje(openai, threadId, assistantId, mensajeUsuario) {
    await openai.beta.threads.messages.create(threadId, {
        role: 'user',
        content: mensajeUsuario
    });

    const run = await openai.beta.threads.runs.create(threadId, {
        assistant_id: assistantId
    });
    return run;
}

export async function GenerarRespuesta(openai, run) {
    const threadId = run.thread_id;
    const messages = await openai.beta.threads.messages.list(threadId);
    // const respuesta = messages.body.data[0].content[0].text.value;
    const respuesta = messages.body.data[0].content[0].text.value;
    return respuesta;
}