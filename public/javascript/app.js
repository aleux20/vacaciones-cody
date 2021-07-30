const select = (el, all = false) => {
    el = el.trim();
    if (all) {
        return [...document.querySelectorAll(el)];
    } else {
        return document.querySelector(el);
    }
};

const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
};

let navbarlinks = select("#navbar .scrollto", true);
const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        let section = select(navbarlink.hash);
        if (!section) return;
        if (
            position >= section.offsetTop &&
            position <= section.offsetTop + section.offsetHeight
        ) {
            navbarlink.classList.add("active");
        } else {
            navbarlink.classList.remove("active");
        }
    });
};
window.addEventListener("load", navbarlinksActive);
onscroll(document, navbarlinksActive);

let selectHeader = select("#header");
if (selectHeader) {
    let headerOffset = selectHeader.offsetTop;
    let nextElement = selectHeader.nextElementSibling;
    const headerFixed = () => {
        if (headerOffset - window.scrollY <= 0) {
            selectHeader.classList.add("fixed-top");
            nextElement.classList.add("scrolled-offset");
        } else {
            selectHeader.classList.remove("fixed-top");
            nextElement.classList.remove("scrolled-offset");
        }
    };
    window.addEventListener("load", headerFixed);
    onscroll(document, headerFixed);
}