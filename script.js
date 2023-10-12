alert("Created by Aryan (23BSA10005)")


document.getElementById("btn").addEventListener("click", function () {
    // Clear the previous QR code if it exists
    var qrcodeDiv = document.getElementById("qrcode");
    qrcodeDiv.innerHTML = '';

    var input = document.getElementById("box").value;
    if (input) {
        var qrCode = new QRCode(qrcodeDiv, {
            text: input,
            width: 200,
            height: 200,
        });
    }
});
