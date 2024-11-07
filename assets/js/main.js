window.addEventListener("load", () =>{
    
    let title = document.querySelector(".main__description");

    let text = "<Desarrollador Web Junior/>";

    let wordSart = 0;
    let wordEnd = 1;

    function write(){

        setInterval(() => {

            title.innerText = text.slice(wordSart, wordEnd);

            wordEnd++;

            if(wordEnd > text.length){
                wordEnd = 1;
            }

           

        }, 150);
    };


    write();
});