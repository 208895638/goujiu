
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"block{ height: var(--status-bar-height); width: ",[0,750],"; background-color: red; }\n.",[1],"mask{ position: fixed; z-index: 999; background-color: red; width: 100%; height: 100%; }\n.",[1],"bb{ font-size: ",[0,40],"; }\n.",[1],"top{ -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; background-color: yellow; height: ",[0,100],"; }\n.",[1],"left{ font-size: ",[0,40],"; color:#ccc; }\n.",[1],"image{ width: ",[0,14],"; }\n.",[1],"aa{ color: rgb(143, 143, 148); font-size: 40px; }\n.",[1],"title{ -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; text-align: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; line-height: ",[0,100],"; }\n",],undefined,{path:"./pages/page/info/info.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/page/info/info.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      