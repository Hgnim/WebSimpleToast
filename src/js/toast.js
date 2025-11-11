export async function showToast(
  message,
  duration = 3000,
  toast_class = "",
  toastContent_class = "",
  parentId = null,
  finish=()=>{}
) {
  //延时函数
  function sleep(interval) {
    return new Promise((resolve) => {
      setTimeout(resolve, interval);
    });
  }
  //获取当前时间，并以指定格式返回
  function getNowTime_ddHHmmssSSS() {
    const now = new Date();
    const dd = now.getDate().toString().padStart(2, "0");
    const HH = now.getHours().toString().padStart(2, "0");
    const mm = now.getMinutes().toString().padStart(2, "0");
    const ss = now.getSeconds().toString().padStart(2, "0");
    const SSS = now.getMilliseconds().toString().padStart(3, "0");
    return `${dd}${HH}${mm}${ss}${SSS}`;
  }
  const onlyId = `simpleToast-${getNowTime_ddHHmmssSSS()}`; //使用当前时间创建唯一ID
  const toast = document.createElement("div");
  toast.id = onlyId;
  toast.className = `simpleToast ${toast_class}`; //对吐司框添加参数中额外的类
  {
    const toastContent = document.createElement("div");
    toastContent.className = `simpleToast-content ${toastContent_class}`; //对吐司框内容添加参数中额外的类
    toast.appendChild(toastContent);
  }
  toast.querySelector(".simpleToast-content").textContent = message;
  if (parentId == null) document.body.appendChild(toast);
  else document.getElementById(parentId).appendChild(toast);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.style.opacity = 1;

      setTimeout(async function () {
        //将带单位的时间格式转换为无单位的毫秒格式
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
          const time = convertToMilliseconds(
            getComputedStyle(document.querySelector(".simpleToast"))
              .getPropertyValue("--toast-opacity-transition-time")
              .trim()
          ); //根据过渡时间等待吐司框消失后再对其进行移除
          if (time != -1) await sleep(time);
          else await sleep(1000); //如果失败则使用默认1秒
          async function doFinish() {
            finish(); //调用完成回调函数
          }
          doFinish();
          await sleep(300); //再次延时用于容错，避免过渡为完全结束
        }
        document.getElementById(onlyId).remove();
      }, duration);
    });
  });
}
