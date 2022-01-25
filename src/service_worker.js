function activate() {
  const video = (() => {
    const videos = document.querySelectorAll('video');

    for (const video of videos) {
      if (!video.paused) return video;
    }

    return videos[0];
  })();

  if (video) {
    video.disablePictureInPicture = false;
    video.requestPictureInPicture();
  }
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    func: activate,
    target: {
      tabId: tab.id,
    },
  });
});
