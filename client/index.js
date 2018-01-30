window.onload = () => {
  const buttonsContainerEl = document.querySelector('.buttons-container');
  const integersListEl = document.querySelector('.integers-list');
  const loadingBarEl = document.getElementById('loading-bar');

  const interval = setInterval(() => {
    let widthStr = loadingBarEl.style.width;
    loadingBarEl.style.width = +widthStr.slice(0, widthStr.length - 1) + 10 + '%';

    if (loadingBarEl.style.width === '100%') clearInterval(interval);
  }, 500);

  const integersMap = new Map();

  buttonsContainerEl.addEventListener('click', (e) => {
    if (e && e.target && e.target.nodeName === 'BUTTON') {
      const buttonNum = e.target.value;

      if (!integersMap.has(buttonNum)) {
        integersMap.set(buttonNum);
      } else {
        integersMap.delete(buttonNum);
      }
      
      integersListEl.innerHTML = Array.from(integersMap, tuple => tuple[0]).join(', ');
    }
  });
};
