function xorEncryptDecrypt(text, key) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(
            text.charCodeAt(i) ^ key.charCodeAt(i % key.length)
        );
    }
    return result;
}

function toHex(str) {
    return Array.from(str)
        .map(c => c.charCodeAt(0).toString(16).padStart(2, "0"))
        .join("");
}

function fromHex(hex) {
    let result = "";
    for (let i = 0; i < hex.length; i += 2) {
        result += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return result;
}

function isHex(str) {
    return /^[0-9a-fA-F]+$/.test(str) && str.length % 2 === 0;
}

function encrypt() {
    const input = document.getElementById("inputText").value;
    const key = document.getElementById("key").value;

    const encrypted = xorEncryptDecrypt(input, key);
    document.getElementById("outputText").value = toHex(encrypted);
}

function decrypt() {
    const input = document.getElementById("inputText").value;
    const key = document.getElementById("key").value;

    if (!isHex(input)) {
        alert("Please enter valid text to decrypt!");
        return;
    }

    const binary = fromHex(input);
    const decrypted = xorEncryptDecrypt(binary, key);
    document.getElementById("outputText").value = decrypted;
}


function toggleKey() {
    const keyInput = document.getElementById("key");
    keyInput.type = keyInput.type === "password" ? "text" : "password";
}
