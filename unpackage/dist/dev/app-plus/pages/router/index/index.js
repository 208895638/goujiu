
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"block{ height: var(--status-bar-height); width: ",[0,750],"; }\n",],undefined,{path:"./pages/router/index/index.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/router/index/index.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      