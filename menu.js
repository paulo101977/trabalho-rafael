let cont = document.querySelector(".lines-container");
let menu = document.querySelector(".menu");
let pointer = document.querySelector(".pointer");
let fa = document.querySelector(".fa");
let num = document.querySelector(".num");
let rede = document.querySelector(".rede");
let sms = document.querySelector(".sms");
let faChild = document.querySelector(".fa-child");
let numChild = document.querySelector(".num-child");
let redeChild = document.querySelector(".rede-child");
let smsChild = document.querySelector(".sms-child");
cont.addEventListener("click", () => {
    fa.classList.remove("content");
    num.classList.remove("content");
    rede.classList.remove("content");
    sms.classList.remove("content");
    if (menu.style.maxHeight) {
        menu.style.maxHeight = null;
        faChild.style.maxHeight = null;
        numChild.style.maxHeight = null;
        redeChild.style.maxHeight = null;
        smsChild.style.maxHeight = null;
        pointer.style.display = "none";
        setTimeout(() => {
            pointer.classList.remove("pointer-up");
            pointer.style.display = "block";
        }, 500);

    } else {
        menu.style.maxHeight = menu.scrollHeight + "px";
        pointer.style.display = "none";
        setTimeout(() => {
            pointer.classList.toggle("pointer-up");
            pointer.style.display = "block";
        }, 500);
    }
})
pointer.addEventListener("click", () => {
    fa.classList.remove("content");
    num.classList.remove("content");
    rede.classList.remove("content");
    sms.classList.remove("content");
    if (menu.style.maxHeight) {
        menu.style.maxHeight = null;
        faChild.style.maxHeight = null;
        numChild.style.maxHeight = null;
        redeChild.style.maxHeight = null;
        smsChild.style.maxHeight = null;
        pointer.style.display = "none";
        setTimeout(() => {
            pointer.classList.remove("pointer-up");
            pointer.style.display = "block";
        }, 500);
    } else {
        menu.style.maxHeight = menu.scrollHeight + "px";
        pointer.style.display = "none";
        setTimeout(() => {
            pointer.classList.toggle("pointer-up");
            pointer.style.display = "block";
        }, 500);
    }
})
fa.addEventListener("click", () => {
    if (faChild.style.maxHeight) {
        faChild.style.maxHeight = null;
        fa.classList.add("btn-anime");
        fa.classList.remove("content");
        setTimeout(() => {
            fa.classList.remove("btn-anime");
        }, 100);
    } else {
        faChild.style.maxHeight = faChild.scrollHeight + "px";
        menu.style.maxHeight = menu.scrollHeight + faChild.scrollHeight + "px";
        fa.classList.add("btn-anime");
        fa.classList.add("content");
        setTimeout(() => {
            fa.classList.remove("btn-anime");
        }, 100);
    }
})
num.addEventListener("click", () => {
    if (numChild.style.maxHeight) {
        numChild.style.maxHeight = null;
        num.classList.add("btn-anime");
        num.classList.remove("content");
        setTimeout(() => {
            num.classList.remove("btn-anime");
        }, 100);
    } else {
        numChild.style.maxHeight = numChild.scrollHeight + "px";
        menu.style.maxHeight = menu.scrollHeight + numChild.scrollHeight + "px";
        net.classList.add("btn-anime");
        num.classList.add("content");
        setTimeout(() => {
            num.classList.remove("btn-anime");
        }, 100);
    }
})
rede.addEventListener("click", () => {
    if (redeChild.style.maxHeight) {
        redeChild.style.maxHeight = null;
        rede.classList.add("btn-anime");
        rede.classList.remove("content");
        setTimeout(() => {
            rede.classList.remove("btn-anime");
        }, 100);
    } else {
        redeChild.style.maxHeight = redeChild.scrollHeight + "px";
        menu.style.maxHeight = menu.scrollHeight + redeChild.scrollHeight + "px";
        rede.classList.add("btn-anime");
        rede.classList.add("content");
        setTimeout(() => {
            rede.classList.remove("btn-anime");
        }, 100);
    }
})
sms.addEventListener("click", () => {
    if (smsChild.style.maxHeight) {
        smsChild.style.maxHeight = null;
        sms.classList.add("btn-anime");
        sms.classList.remove("content");
        setTimeout(() => {
            sms.classList.remove("btn-anime");
        }, 100);
    } else {
        smsChild.style.maxHeight = smsChild.scrollHeight + "px";
        menu.style.maxHeight = menu.scrollHeight + smsChild.scrollHeight + "px";
        sms.classList.add("btn-anime");
        sms.classList.add("content");
        setTimeout(() => {
            sms.classList.remove("btn-anime");
        }, 100);
    }
})

