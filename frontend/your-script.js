async function getRecommendation() {
    const mood = document.getElementById('mood').value;
    const res = await fetch('http://localhost:3000/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mood })
    });
    const data = await res.json();
    document.getElementById('result').innerText = data.suggestion;
}