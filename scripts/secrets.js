let correctPassphrase = "";

async function loadPassphrase() {
    const response = await fetch('ph.txt');
    correctPassphrase = await response.text();
}

function checkPassphrase() {
    const userInput = document.getElementById("passphrase").value;
    if (userInput === correctPassphrase.trim()) {
        document.getElementById("content").style.display = "block";
        document.getElementById("access").style.display = "none";
    } else {
        alert("Incorrect passphrase. Access denied.");
    }
}

loadPassphrase().then(() => {
    document.getElementById("submitBtn").addEventListener("click", checkPassphrase);
});