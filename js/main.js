async function connect(){
    if (typeof window.ethereum !== "undefined") {
        // Request account access
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        // Update the wallet info in the HTML
        document.getElementById('wallet-name').textContent = accounts[0];
    } else {
        console.log("Metamask is not installed")
    }
}
