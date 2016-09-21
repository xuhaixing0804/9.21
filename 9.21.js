(function(){
    var appendChildclick = document.getElementById("btn1");
    appendChildclick.onclick = function(){
       var node = document.createElement("LI");
       var textnode = document.createTextNode(33333);
       node.appendChild(textnode);
       document.getElementById("u1").appendChild(node); 
      
    }
    var attributesclick = document.getElementById("btn2");
    attributesclick.onclick = function(){
      var attributesnode = document.getElementsByTagName("Ul")[0].attributes;
      console.log(attributesnode);
    }














}(window))