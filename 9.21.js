(function(){
    var appendChildclick = document.getElementById("btn1");
    appendChildclick.onclick = function(){
       var node = document.createElement("LI");
       var textnode = document.createTextNode(33333);
       node.appendChild(textnode);
       document.getElementById("u1").appendChild(node); 
      
    }















}(window))