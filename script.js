document.getElementById("symptomForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const symptoms = document.getElementById("symptoms").value;
  
  const res = await fetch("http://localhost:5000/recommend", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ symptoms })
  });
  
  const data = await res.json();
  document.getElementById("result").innerText = data.recommendation;
});
