
const el_array = [];

function buttonClick(){
    const input = document.getElementById('get_value').value;
    console.log(input);

    if(input){
        el_array.push(input);
    }
       console.log (el_array);

    var divElement = document.createElement ('div');
    divElement.innerText = input;
    

    // delete button

    var deleteButton = document.createElement('button')
    deleteButton.innerText = 'delete'
    divElement.appendChild(deleteButton)


    deleteButton.addEventListener('click', function(){
        divElement.remove();
        console.log(el_array);

        const indexofElement = el_array.indexOf(input);
        el_array.splice(indexofElement, 1);
        console.log(el_array);
    })


    render.appendChild(divElement);
    var list = document.getElementById('render');
    list.appendChild(divElement);



}




  //var valueElement = document.createElement('span');
    //valueElement.innerText = input;
   //console.log(valueElement);
    //console.log(render);
    //render.appendChild(valueElement);

    //adding delete button

 //document.getElementById("render").innerHTML = el_array;

    //const render = document.getElementById("render");

