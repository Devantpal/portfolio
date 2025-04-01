
// ========================================
//        animated counter number
// ========================================

const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 200;

counterNum.forEach((curElem) => {

    const updateNumber = () =>{
        const targetNumber = parseInt(curElem.dataset.number);
        // console.log(targetNumber);
        const initialNum = parseInt(curElem.innerText);
        // console.log(initialNum);

        const incrementNumber = Math.trunc( targetNumber/ speed);
        // console.log(incrementNumber);


        if(initialNum < targetNumber) {
            curElem.innerText = `${ initialNum + incrementNumber }+`;
            setTimeout(updateNumber, 10);
        }
    };
    updateNumber();
});



// ========================================
//   Creating a responsive navbar component
// ========================================

const moblie_nav = document.querySelector(".moblie-navbar-btn");
const headerElem = document.querySelector(".header");

moblie_nav.addEventListener("click", () => {
    headerElem.classList.toggle("active");
});


// ========================================
//           Scroll to top button
// ========================================

const footerElement = document.querySelector(".section-footer");

const ScrollElement = document.createElement("div");
ScrollElement.classList.add("scrollTop-style");

ScrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(ScrollElement);



// ========================================
//   Creating a portfolio tabbed componenet
// ========================================

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll("p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);
});

