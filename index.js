chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "exportImage") {
        const format = message.format;
        const imageUrl = message.imageUrl;
        console.log(format, imageUrl)
        
        // make a  canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const dataURL = canvas.toDataURL(`image/${format}`);
            sendResponse({ dataURL });
        };
        img.src = imageUrl;
        // // Convert the canvas to a data URL based on the chosen format
        // const dataURL = canvas.toDataURL(`image/${format}`);

        // // Create a link element to trigger the download
        // const downloadLink = document.createElement("a");
        // downloadLink.href = dataURL;
        // downloadLink.download = `exported_image.${format}`;

        // // Append the link to the body and trigger the click event
        // document.body.appendChild(downloadLink);
        // downloadLink.click();

        // // Remove the link from the body
        // document.body.removeChild(downloadLink);
    }
});
