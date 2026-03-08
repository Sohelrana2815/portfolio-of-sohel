"use server";

export async function sendToDiscord(
  prevState: { success: boolean; message: string },
  formData: FormData
) {
  const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

  if (!DISCORD_WEBHOOK_URL) {
    return { success: false, message: "Webhook URL not configured" };
  }

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  // Validate form data
  if (!name || !email || !subject || !message) {
    return { success: false, message: "All fields are required" };
  }

  // Formatting the message for a clean look in Discord
  const discordMessage = {
    embeds: [
      {
        title: `📩 New Message: ${subject}`,
        color: 16757760, // This is #FFB400 in decimal
        fields: [
          { name: "Name", value: name, inline: true },
          { name: "Email", value: email, inline: true },
          { name: "Message", value: message },
        ],
        timestamp: new Date().toISOString(),
      },
    ],
  };

  try {
    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(discordMessage),
    });

    if (response.ok) {
      return { success: true, message: "Message sent successfully! ✨" };
    }

    return { success: false, message: "Failed to send message. Please try again." };
  } catch (error) {
    console.error("Discord webhook error:", error);
    return { success: false, message: "An error occurred. Please try again." };
  }
}
