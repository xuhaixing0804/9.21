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
      var attributesnode = document.getElementsByTagName("UL")[0].attributes;
      console.log(attributesnode);
    }
    var childnodesclick = document.getElementById("btn3");
    childnodesclick.onclick = function(){
     var childNode = document.getElementsByTagName("UL")[0].childNodes;
     console.log(childNode);
    }
    var classnameclick = document.getElementById("btn4");
    classnameclick.onclick = function(){
      var classname = document.getElementById("u1").className;
      console.log(classname);
    }














}(window))