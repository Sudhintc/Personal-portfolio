const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click',()=>{
    //Toggle Nav
    nav.classList.toggle('nav-active');
    
    //Animate Links
    navLinks.forEach((link,index)=>{
        if(link.style.animation){
            link.style.animation = '';
        } else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3 }s`
        }
    });

    //burger animation
    burger.classList.toggle('toggle'); 
});


//scroll
document.addEventListener('scroll', function() {
    var currentScrollPos = window.pageYOffset;
  
    // Get all the sections
    var sections = document.querySelectorAll('section');
  
    // Check each section's position on the page
    sections.forEach(function(section) {
      var sectionTop = section.offsetTop - 100; 
      var sectionHeight = section.offsetHeight;
  
      // Check if the current scroll position is within a section
      if (currentScrollPos >= sectionTop && currentScrollPos < sectionTop + sectionHeight) {
        // Get the corresponding link in the navigation
        var navLink = document.querySelector('a[href="#' + section.id + '"]');
        
        // Remove the active class from all links
        document.querySelectorAll('nav ul li a').forEach(function(link) {
          link.classList.remove('active');
        });
  
        // Add the active class to the current link
        navLink.classList.add('active');
      }
    });
  });