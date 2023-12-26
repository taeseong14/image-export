chrome.runtime.onInstalled.addListener(() => {
    // Create a right-click context menu item for images
    chrome.contextMenus.create({
        id: "exportImage",
        title: "Export As",
        contexts: ["image"]
    });

    // Create submenus for export options
    chrome.contextMenus.create({
        parentId: "exportImage",
        id: "PNG",
        title: "PNG",
        contexts: ["image"]
    });

    chrome.contextMenus.create({
        parentId: "exportImage",
        id: "JPG",
        title: "JPG",
        contexts: ["image"]
    });

    chrome.contextMenus.create({
        parentId: "exportImage",
        id: "WebP",
        title: "WebP",
        contexts: ["image"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    // Send a message to the content script with the chosen export format and the image URL
    chrome.tabs.sendMessage(tab.id, { action: "exportImage", format: info.menuItemId, imageUrl: 'https://b-p.msub.kr/proxy?url=' + info.srcUrl });
});
