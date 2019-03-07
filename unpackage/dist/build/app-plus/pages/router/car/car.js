
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"block{ height: var(--status-bar-height); width: ",[0,750],"; }\n",],undefined,{path:"./pages/router/car/car.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/router/car/car.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      