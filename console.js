(function(){
    var logList = new Array();
    const cl = console.log;

    var openToggler = false;

    var cli = document.createElement("div");

    console.log = function(msg){
        if(typeof msg == "object"){
            msg = JSON.stringify(msg);
        }
        cl(msg);
        logList.push(msg);

        if(String(msg) == "true"||String(msg) == "false"||msg == "function"||msg == "number"||msg == "string"){
            cli.innerHTML+='<div style="border-bottom: 1px solid rgba(0,0,0,.3);padding:8px;"><code class="cli" style="color:#1565c0;"><strong>'+msg+'</strong></code></div>';
            return;
        }

        cli.innerHTML+='<div style="word-wrap: break-word;border-bottom: 1px solid rgba(0,0,0,.3);padding:8px;"><code class="cli" style="color:#424242;">'+msg+'</code></div>';
    }
    window.addEventListener("load",e=>{
        onStart();
    })
    function onStart(){
        var style = document.createElement("style");
        style.innerHTML = '#cli::-webkit-scrollbar {width: 3px;}#cli::-webkit-scrollbar-track {background:rgba(0,0,0,.12) ; }#cli::-webkit-scrollbar-thumb {background: rgba(0,0,0,.3);}#cli::-webkit-scrollbar-thumb:hover {background: rgba(0,0,0,.5); }'
        document.body.appendChild(style);

        var obj = document.createElement("button");
        //obj.style="border-radius: 50%;background:#4285F4;"
        obj.style.zIndex = 100;
        obj.style.color = "white";
        obj.style.margin="16px";
        obj.style.position = "fixed";
        obj.style.right = "0";
        obj.style.bottom = "0";
        obj.style.background="#4285F4";
        obj.style.borderRadius = "100%"
        obj.style.border = "none";
        obj.style.width = "43px";
        obj.style.height = "43px"
        obj.style.outline = "none";
        obj.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path fill="white" d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"/></svg>'
        document.body.appendChild(obj);

        cli.style = "transition: 0.35s cubic-bezier(0.4, 0.0, 0.2, 1) all;-moz-transition: 0.35s cubic-bezier(0.4, 0.0, 0.2, 1) all;-webkit-transition: 0.35s cubic-bezier(0.4, 0.0, 0.2, 1) all;"
        cli.style.zIndex = 101;
        cli.style.bottom = 0;
        cli.style.right = 0;
        cli.style.left = 0;
        cli.style.position = "fixed";
        cli.style.height = "45vh";
        cli.style.background ="#fafafa";
        cli.style.marginBottom = "-60vh";
        cli.style.borderRadius="10px"
        cli.style.borderBottomLeftRadius=0;
        cli.style.borderBottomRightRadius=0;
        cli.style.marginLeft="auto";
        cli.style.marginRight="auto";
        cli.style.opacity=".87";
        cli.style.maxWidth="500px"
        // cli.style.padding="8px";
        obj.style.paddingTop="4px";
        //cli.style.paddingLeft = "16px";
        cli.classList.add("mdl-shadow--4dp")
        cli.style.overflowY = "scroll";
        // cli.style.overflowX = "hidden";
        cli.id ="cli";
        var codes = cli.innerHTML;
        cli.innerHTML = '<button onclick="document.querySelector(\'#cli\').style.marginBottom = \'-45vh\';" id="closeConsole" style="background:transparent;padding:2px;width:30px;height:30px;position:fixed;right:0;left:0;margin-right:auto;margin-left:auto;margin-top:8px;border-radius:100%;outline:none;border:none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z"/><path fill="none" d="M0,0h24v24H0V0z"/></svg></button><div style="margin-bottom:42px;"></div>';
        cli.innerHTML +=codes;
        cli.classList.add("animated");
        document.body.appendChild(cli);
        obj.addEventListener("click",function(){
            cli.style.marginBottom = 0;
            //cli.style.boxShadow = "0px -1px 20px #757575";
            // cli.style.opacity = 1
            openToggler = !openToggler;
            if(openToggler){
                cli.style.marginBottom = 0;
            }else{
                cli.style.marginBottom = "-60vh";
            }
        })
        document.querySelector("#closeConsole").addEventListener("click",function(){
            cli.style.marginBottom = "-60vh";
            openToggler = false;
            //cli.style.opacity = 0;
        })
      }
    window.onerror = function(message, url, lineNumber) {  
        //save error and send to server for example.
        //alert(message+"@line"+lineNumber+" of "+url)
        cli.style.marginBottom = 0;
        //cli.style.opacity = 1;
        cli.innerHTML+='<div style="word-wrap: break-word;border-bottom: 1px solid rgba(0,0,0,.3);background:#ffcdd2;padding:8px;"><code style="color:red;">"'+message+'" <u>at line '+lineNumber+' of '+url+'</u></code></div>'
        //cli.innerHTML+='<i style="color:red;">-- May you <a style="color:red" href="javascript:window.location.reload();">reload</a> and try again.</i>'
        
        
        return true;
    }; 
})();