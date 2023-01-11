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
    let scrollcount = 200;
    let c = 1;

    // calculate and sat height body
    const bodycontent = document.getElementsByClassName("content");
    console.log(window.innerHeight);
    console.log(count*scrollcount+window.innerHeight + "px");
    bodycontent[0].style.height = (count*scrollcount+window.innerHeight + "px");

    function togleStyle(itemnumber, height, scale, padding, count) {
        const coef = 0.5;
        let itemNumberPrew;
        let itemNumberNext;
        let i = 1;

        function addstyle(itemnumber){
            content[itemnumber].style.height = `${height}px`;
            content[itemnumber].style.transform = `scale(${scale})`;
            content[itemnumber].style.padding = `${padding}px 0`;
            content[itemnumber].style.overflow = "hidden";
        }

        addstyle(itemnumber);
        
        for (;count >= 0;) {
            itemNumberPrew = curentitem - i;
            itemNumberNext = curentitem + i;
            height = height * coef;
            padding = padding * coef;
            if (count == 0) {
                height = '0';
                padding = '0';
            };
            scale = scale * coef;
            count--;
            i++;
            addstyle(itemNumberPrew);
            addstyle(itemNumberNext);
        }
    }
    togleStyle(curentitem, 200, 1, 20, c);

    window.addEventListener('scroll', function(event) {
            let pageScroll = this.scrollY;
            if (pageScroll/scrollcount+1 > curentitem) {
                if (curentitem < count) curentitem += 1;
                togleStyle(curentitem, 200, 1, 20, c);
            }
            // curentitem +=1;
            if (pageScroll/scrollcount+1 < curentitem) {
                if (curentitem > 2) curentitem -= 1;
                togleStyle(curentitem, 200, 1, 20, c);
            }
    });
}

openMenu();
scrollmenu();