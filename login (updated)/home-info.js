function peopleList(){
    var peopleName= document.querySelector("#listPeople")
    var addName= document.querySelector("#addUsers")
    var getPeople= peopleName.style.display
    var addPeople= addName.style.display

    if(addPeople === 'none'){
        addName.style.display = 'block'
    }
    if(getPeople === 'block'){
        peopleName.style.display = 'none'
    }
}

function manyPeople(){
    var first = document.querySelector("#firstName").value
    var last = document.querySelector("#lastName").value
    var final = `${first} ${last}`
    var list = document.createElement('li');
    list.appendChild(document.createTextNode(final));
    document.querySelector('ul').appendChild(list);
    list.className= "list-group-item list-group-item-action"
    var peopleName= document.querySelector("#listPeople")
    var addName= document.querySelector("#addUsers")
    var getPeople= peopleName.style.display
    var addPeople= addName.style.display

    if(getPeople === 'none'){
        peopleName.style.display = 'block'
    }
    if(addPeople === 'block'){
        addName.style.display = 'none'
    }
}


