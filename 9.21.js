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
    var firstChildclick = document.getElementById("btn5");
    firstChildclick.onclick = function(){
      var  firstChildname = document.getElementById("u1").firstChild;
      console.log(firstChildname);
    }
    var getAttributeclick = document.getElementById("btn6");
    getAttributeclick.onclick = function(){
      var  getAttributename = document.getElementById("u1").getAttribute("class");
      console.log(getAttributename);
    }
    var  getAttributenodeclick = document.getElementById("btn7");
    getAttributenodeclick.onclick = function(){
      var getAttributenodename = document.getElementsByTagName("LI")[0].getAttributeNode("class");
      console.log(getAttributenodename);
    }
    var getElementsByTagNameclick = document.getElementById("btn8");
    getElementsByTagNameclick.onclick = function(){
      var getElementsByTagName = document.getElementsByTagName("UL");
      console.log(getElementsByTagName);
    }
    var  hasAttributeclick = document.getElementById("btn9");
    hasAttributeclick.onclick = function(){
      var hasAttribute = document.getElementById("u1").hasAttribute("class");
      console.log(hasAttribute);
    }
    var  hasAttributesclick = document.getElementById("btn10");
    hasAttributesclick.onclick = function(){
      var hasAttributes = document.getElementById("u1").hasAttributes();
      console.log(hasAttributes);
    }
    var  hasChildNodesclick = document.getElementById("btn11");
    hasChildNodesclick.onclick = function(){
      var hasChildNodes = document.getElementById("i2").hasChildNodes();
      console.log(hasChildNodes);
    }
    











}(window))