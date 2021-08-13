

alert ("Te doy la bienvenida a esta página web para adentrarte a la arquitectura desde la cotidianidad de estar en casa")

// var player es una manera de escribir document.getElementById("player") mas corto
var player = document.getElementById("player");
var mensaje = document.getElementById("mensaje");
            function commentBox(){
            	var name=document.getElementById('name').value;
            	var comment=document.getElementById('comment').value;

            	if(name =="" || comment ==""){
            		alert("Porfavor introduce la informacion requerida!");
            	}else{
            		var parent=document.createElement('div');
            		var el_name=document.createElement('h5');
            		var el_message=document.createElement('p');
            		var el_line=document.createElement('hr');
            		var txt_name=document.createTextNode(name);
            		var txt_message=document.createTextNode(comment);
            		el_name.appendChild(txt_name);
            		el_message.appendChild(txt_message);
            		el_line.style.border='1px solid #000';
            		parent.appendChild(el_name);
            		parent.appendChild(el_line);
            		parent.appendChild(el_message);
            		parent.setAttribute('class', 'pane');
            		document.getElementById('result').appendChild(parent);

            		document.getElementById('name').value="";
            		document.getElementById('comment').value="";
            	}

            }
            // QUE CUANDO APRETE UNA IMAGEN ESTA SE AGRANDE
            var imagenes = document.querySelectorAll(".imagen__img");
            var modal = document.querySelector("#modal");
            var img = document.querySelector("#modal__img");
            var boton = document.querySelector("#modal__boton");
            var botonNext = document.querySelector("#modal__botonNext");

            for (var i = 0; i < imagenes.leght; i++){
              imagenes[i].addEventListener("click",function(e){
                modal.classList.toggle("modal--open");
                var src = e.target.sr;
                img.setAtrribute("src", src);
              });
            }
            //boton.addEventListener("click", function(){
             //   modal.clasList.toggle("modal--open");
            //});
