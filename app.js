var typeData = new Typed(".role", {
  strings: ["Gaurav.", "a Web Developer.", " a Coder."],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
});


const scrollIcon = document.querySelector(".scroll__icon");
const showProjects = document.querySelector(".project-section");
const landingPage = document.querySelector(".landing-page")
scrollIcon.addEventListener("click",clicked);
function clicked() {
  showProjects.setAttribute("id", "projects");
  landingPage.setAttribute("id","landing-page")
}


(function () {
  emailjs.init("5TJ6g3gLNBXBgTaub");
})();



// template_jokhfj9
//service_8a3xpa7
// 5TJ6g3gLNBXBgTaub

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal_overlay-loading");
  const success = document.querySelector(".modal_overlay-success");
  loading.classList += " modal_overlay-active";
  emailjs
    .sendForm(
      "service_8a3xpa7",
      "template_jokhfj9",
      event.target,
      "5TJ6g3gLNBXBgTaub"
    )
    .then(() => {
      loading.classList.remove("modal_overlay-active");
      success.classList.add("modal_overlay-active");
    })
    .catch(() => {
      loading.classList.remove("modal_overlay-active");
      alert("The Emial Service ");
    });
}
function toggleModal() {
  document.body.classList.toggle("modal-open");
}
const mailbtn = document.querySelector(".mail__btn");
mailbtn.addEventListener("click", toggleModal);
const darkBtn = document.querySelector('#dark') 
darkBtn.addEventListener('click', toggleContrast)
function toggleContrast(){
    document.body.classList.toggle('dark-theme')
}
const scaleFactor = 1 / 10;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;
  
  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
  }
}