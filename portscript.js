let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
 let menuIcon = document.querySelector("#menu-icon");
 let navbar = document.querySelector('.navbar');
 document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');
  
    progressBars.forEach(bar => {
      const progress = bar.getAttribute('data-progress');
      const progressElement = bar.querySelector('.progress');
      setTimeout(() => {
        progressElement.style.width = `${progress}%`;
      }, 100);
  
      const percentageElement = bar.querySelector('.progress-percentage');
      percentageElement.textContent = `${progress}%`;
    });
  });
  

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


window.onscroll = () =>{
    sections.forEach(sec=>{
        let top = window.screenY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top< offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id +']').classList.add('active');
            })
        }
    })
}