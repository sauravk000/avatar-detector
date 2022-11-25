document.addEventListener('DOMContentLoaded', () => {
    let nameInp = document.getElementById("name");
    let selectionBtn = document.getElementById('selectBtn');
    let selections = document.getElementById('selections');
    let seeMoreBtn = document.getElementById('seeMoreBtn');
    let model = document.getElementById('model');
    let personImage = document.getElementById('personImage');

    let isOff = true;

    let selection;

    const select = (index) => {
        switch(index) {
            case 0:
                selection = "Male";
                break;
            case 1:
                selection = "Female";
                break;
            case 2:
                selection = "Other";
                break;
        }
        selectionBtn.innerText = selection;
        showList();
    }
    const showList = () => {
        if(isOff)
            selections.style.display = 'flex';
        else
            selections.style.display = "none";
        isOff = !isOff;
    }

    const handleRequest = async () => {
        let name = nameInp.value;

        if(selection) {
            let img;
            try {
               if(selection == "Other") {
                personImage.src = `https://joeschmoe.io/api/v1/${name}`;
                }else {
                    personImage.src = `https://joeschmoe.io/api/v1/${selection.toLowerCase()}/${name}`;
                }
            } catch (error) {
                console.log(error);
            }
            
        }else {
            model.style.display = "block";
            setTimeout(()=> {
                model.style.display = "none";
            },2000)
        }
    }

    for(let i = 0;i<selections.childElementCount;i++) {
        selections.children[i].addEventListener('click', ()=>select(i))
    }
    
    seeMoreBtn.addEventListener('click', handleRequest);
    selectionBtn.addEventListener('click',showList);
});