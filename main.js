var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

//Generate code editor
function show() {
  var iframe1 = document.getElementById('iframe');
  iframe1.style.display = 'block';
}

// Generate text editor
var addNewButton = document.querySelector("#add-button");
    addNewButton.addEventListener("click", function() {
        
        var container = document.createElement("div");
        var textArea = document.createElement("textarea");
        var newHandle = document.createElement("div"); 

        document.body.appendChild(container);
        container.appendChild(newHandle);
        container.appendChild(textArea);
        
        container.setAttribute("id", "code-editor-container");
        newHandle.setAttribute("id", "add-new-handle");
        textArea.setAttribute("id", "add-new-editor");
        
        var newCodeMirror = CodeMirror.fromTextArea(textArea, {
            mode:  "javascript",
        });

        var isMouseDown = false;
        container.addEventListener("mousedown", function(event) {
            console.log("1. here down.");
            isMouseDown = true;
        });

        document.body.addEventListener("mousemove", function(event) {
        if (isMouseDown) {
            console.log("2. here move.");
            var newX = event.x;
            var newY = event.y;
            container.style.left = newX + "px";
            container.style.top = newY + "px";
        }
        });

        document.body.addEventListener("mouseup", function(event) {
            console.log("3. here up.");
            isMouseDown = false;
        });
      
      });

// Generate drawing box
// var websocket = new WebSocket("ws://localhost:8003");
// var path2;
// websocket.onmessage = function(event) {
    
//     console.log(event.data);
//     var tokens = event.data.split(" ");

//     // Add this point to the path.
//     if (tokens[0] == "draw") {
//         if (tokens[1] == "start"){
//              path2 = new Path( {
//                 strokeColor: 'red',
//             });
//         } else if (tokens[1] == "move"){
//             var xStr = tokens[2];
//             var yStr = tokens[3];
//             var x = Number(xStr);
//             var y = Number(yStr);
//             path2.add(new Point(x, y));

//         } else if (tokens[1] == "end") {
//             var xStr = tokens[2];
//             var yStr = tokens[3];
//             var x = Number(xStr);
//             var y = Number(yStr);
//             var point = new Point(x, y);
//             var newCircle = new Path.Circle({
//                 center: point,
//                 radius: 10
//             });
//             newCircle.strokeColor = 'red';
//             newCircle.fillColor = 'white';
//         }
        
//     } else if (tokens[0] == "chat") {
//         var message = event.data.substring(5);
//         var p = document.createElement('p');
//         p.innerHTML =  message;
//         p.style.color = "red";
//         document.body.appendChild(p);
//     } 

// };

// var path1 = new Path({
//   strokeColor: 'black',
// });

// function onMouseDown(event) {
//   path1 = new Path();
//   path1.strokeColor = 'black';
//   websocket.send("draw start");
// }

// function onMouseDrag(event) {
//   path1.add(event.point);
//   websocket.send("draw move " + event.point.x + " " + event.point.y);
// }

// function onMouseUp(event) {
//   var myCircle = new Path.Circle({
//       center: event.point,
//       radius: 10
//   });
//   myCircle.strokeColor = 'black';
//   myCircle.fillColor = 'white';
//   websocket.send("draw end " + event.point.x + " " + event.point.y);
// }