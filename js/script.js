function openMenu(){
    const buttonMenu = document.getElementsByClassName("pageheader__menuicon");
    console.log(buttonMenu);
    const menuList = document.getElementsByClassName("pageheader__nav");
    console.log(menuList);
    
    buttonMenu[0].addEventListener('click', function(event) {
        menuList[0].classList.toggle("close");
        buttonMenu[0].classList.toggle('close');
    });
}

// function scrollmenu 
function scrollmenu() {
    const content = document.getElementsByClassName("pagecontent");
    console.log(content);
    const count = content.length-3;
    console.log(count);
    let curentitem = 2;

    // calculate and sat height body
    const bodycontent = document.getElementsByClassName("content");
    console.log(window.innerHeight);
    console.log(count*200+window.innerHeight + "px");
    bodycontent[0].style.height = (count*200+window.innerHeight + "px");

    function addstyle(itemnumber) {
        content[itemnumber].style.height = "auto";
        content[itemnumber].style.transform = "scale(1)";
        content[itemnumber].style.padding = "20px 0";
        // content[itemnumber].style.display = "flex";

        content[itemnumber].previousElementSibling.style.transform = "scale(0.5)";
        content[itemnumber].previousElementSibling.style.height = "100px";
        // content[itemnumber].previousElementSibling.style.display = "flex";

        content[itemnumber].previousElementSibling.previousElementSibling.style.transform = "scale(0)";
        content[itemnumber].previousElementSibling.previousElementSibling.style.height = "0px";
        content[itemnumber].previousElementSibling.previousElementSibling.style.padding = "0"
        // content[itemnumber].previousElementSibling.previousElementSibling.style.display = "none";

        content[itemnumber].nextElementSibling.style.transform = "scale(0.5)";
        content[itemnumber].nextElementSibling.style.height = "100px";
        // content[itemnumber].nextElementSibling.style.display = "flex";

        content[itemnumber].nextElementSibling.nextElementSibling.style.transform = "scale(0)";
        content[itemnumber].nextElementSibling.nextElementSibling.style.height = "0px";
        content[itemnumber].nextElementSibling.nextElementSibling.style.padding = "0";
        // content[itemnumber].nextElementSibling.nextElementSibling.style.display = "none";
    }
    addstyle(curentitem);

    window.addEventListener('scroll', function(event) {
            let pageScroll = this.scrollY;
            if (pageScroll/200+1 > curentitem) {
                if (curentitem < count) curentitem += 1;
            }
            // curentitem +=1;
            if (pageScroll/200+1 < curentitem) {
                if (curentitem > 2) curentitem -= 1;
            }

            // console.log(curentitem);
            // console.log("scroll")
            // console.log(pageScroll);
            addstyle(curentitem);
    });
}

openMenu();
scrollmenu();