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
openMenu();