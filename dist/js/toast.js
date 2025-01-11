async function showToast(
  message,
  duration = 3000,
  toast_class = "",
  toastContent_class = "",
  parentId = null
) {
  function sleep(interval) {
    return new Promise((resolve) => {
      setTimeout(resolve, interval);
    });
  }
  function getCurrentTime_ddHHmmssSSS() {
    const now = new Date();
    const dd = now.getDate().toString().padStart(2, "0");
    const HH = now.getHours().toString().padStart(2, "0");
    const mm = now.getMinutes().toString().padStart(2, "0");
    const ss = now.getSeconds().toString().padStart(2, "0");
    const SSS = now.getMilliseconds().toString().padStart(3, "0");
    return `${dd}${HH}${mm}${ss}${SSS}`;
  }
  const onlyId = `simpleToast-${getCurrentTime_ddHHmmssSSS()}`;
  const toast = document.createElement("div");
  toast.id = onlyId;
  toast.className = `simpleToast ${toast_class}`;
  {
    const toastContent = document.createElement("div");
    toastContent.className = `simpleToast-content ${toastContent_class}`;
    toast.appendChild(toastContent);
  }
  toast.querySelector(".simpleToast-content").textContent = message;
  if (parentId == null) document.body.appendChild(toast);
  else document.getElementById(parentId).appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = 1;

    setTimeout(async function () {
      function convertToMilliseconds(timeString) {
        const match = timeString.match(/(\d+)(\w+)/);
        if (!match) {
          return -1;
        }
        const number = parseInt(match[1], 10);
        let milliseconds;
        switch (match[2]) {
          case "s":
            milliseconds = number * 1000;
            break;
          case "ms":
            milliseconds = number;
            break;
          default:
            return -1;
        }
        return milliseconds;
      }
      toast.style.opacity = 0;
      {
        const time =
          convertToMilliseconds(
            getComputedStyle(document.querySelector(".simpleToast"))
              .getPropertyValue("--toast-opacity-transition-time")
              .trim()
          ) + 500;
        if (time != -1) await sleep(time);
        else await sleep(2000);
      }
      document.getElementById(onlyId).remove();
    }, duration);
  }, 0);
}
