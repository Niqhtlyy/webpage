document.getElementById("passwordForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const enteredPassword = document.getElementById("passwordInput").value;
    
    const correctPasswordHash = "dd9bfd8bd682e98a360fa1ee1ed660538bfe8a001be06be2d54bff09f9cfaf4a";
    const enteredPasswordHash = await hashPassword(enteredPassword);

    if (enteredPasswordHash === correctPasswordHash) {
        null
    } else {
        alert("The password you have entered is wrong, you probably don't have access!");
    }
});

async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
    return hashHex;
}