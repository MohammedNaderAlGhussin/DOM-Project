let container = document.querySelector(".container")
let myDiv = document.querySelector(".boxes");
for(let i = 1 ; i <= 10 ; i++){
    let newDivs = document.createElement("div");
    newDivs.innerHTML = i;
    newDivs.className = "results";
    myDiv.append(newDivs);
    newDivs.addEventListener("click",() => {
        let form = document.createElement("div");
        let closeForm = document.createElement('button');
        form.appendChild(closeForm);
        closeForm.setAttribute('class', 'closeform');
        closeForm.addEventListener('click', () => {
            form.remove();
            document.body.style.backgroundColor = "white";
        });
        closeForm.innerHTML = 'X';
        let titleForm = document.createElement('h2');
        form.appendChild(titleForm);
        let descForm = document.createElement('p');
        form.appendChild(descForm);
        // form.style.transition = "0.5s";
        container.appendChild(form);
        let formImg = document.createElement("img");
        formImg.setAttribute("src","./images/congrats.webp");
        form.appendChild(formImg);
        form.setAttribute('class', 'form');
        titleForm.innerHTML = "Congrats";
        descForm.innerHTML = `You Won Card ${i}`;

        newDivs.classList.add("done");
        if(newDivs.classList.contains("done")){
            newDivs.innerHTML = 'Clicked';
            newDivs.style.backgroundColor = "black";
            newDivs.onclick = () => {
                form.remove();
            document.body.style.backgroundColor = "white";
            };
        }
        document.body.style.backgroundColor = "#1c1c1cd9";
    });
}