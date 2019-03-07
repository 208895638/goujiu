
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"block{ height: var(--status-bar-height); width: ",[0,750],"; }\n",],undefined,{path:"./pages/router/welfare/welfare.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/router/welfare/welfare.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      