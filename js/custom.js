window.addEventListener('load', () => {
    const loadingBox = document.getElementById('loading-box');
    if (loadingBox) {
      loadingBox.remove(); // 直接送走，不留遗体
    }
  });