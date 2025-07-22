const form = document.getElementById('input-form');
const inputText = document.getElementById('input-text');
const aiOutput = document.getElementById('ai-output');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const message = inputText.value;
    
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        aiOutput.textContent = data.reply;

    } catch (error) {
        console.error('Error:', error);
        aiOutput.textContent = 'Failed to get response from server.';
    }
});
