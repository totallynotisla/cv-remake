export async function POST(req: Request) {
    try {
        const { subject, email, message }: Partial<{ subject: string; email: string; message: string }> = await req.json();
        if (!subject || !email || !message) {
            return new Response(JSON.stringify({ status: "FAILED", message: "Missing required fields" }), { status: 400 });
        }

        // Send data using discord webhook
        const webhook = process.env.WEBHOOK;
        console.log(webhook);

        await fetch(webhook || "", {
            headers: {
                "Content-Type": "application/json",
            },
            referrerPolicy: "strict-origin",
            body: JSON.stringify({
                content: null,
                embeds: [
                    {
                        title: subject,
                        description: message,
                        color: 5814783,
                        author: {
                            name: email,
                        },
                        timestamp: new Date().toISOString(),
                    },
                ],
                attachments: [],
            }),
            method: "POST",
            mode: "cors",
            credentials: "omit",
        });

        return new Response(JSON.stringify({ status: "OK", message: "Message sent successfully" }), { status: 200 });
    } catch (err) {
        console.log(err);
        if (err instanceof Error) return new Response(JSON.stringify({ status: "FAILED", message: err.toString() }), { status: 500 });
    }
}
