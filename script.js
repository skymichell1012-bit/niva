console.log("Ніва тут!");
const apiKey = "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxx";
async function askNiva(question) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: question }]
    })
  });
  const data = await response.json();
  return data.choices[0].message.content;
}

window.onload = async () => {
  const answer = await askNiva("Привіт, Ніва!");
  alert(answer);
};

// Тут пізніше можна додати анімації кліпання очима, рухів рук і т.
