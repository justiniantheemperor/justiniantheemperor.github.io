/**
* Template Name: iPortfolio
* Updated: May 30 2023 with Bootstrap v5.3.0
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  const root = document.documentElement;

// Get the value of the colors defined in styles.css
  const redColor = getComputedStyle(root).getPropertyValue('--red');
  const orangeColor = getComputedStyle(root).getPropertyValue('--orange');
  const greenColor = getComputedStyle(root).getPropertyValue('--green');
  const tealColor = getComputedStyle(root).getPropertyValue('--teal');
  const blueColor = getComputedStyle(root).getPropertyValue('--blue');
  const pinkColor = getComputedStyle(root).getPropertyValue('--pink');


  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
        var name = navbarlink.getAttribute("href")
        console.log(navbarlink)
        console.log(name)
        locationChange(name)
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)


  function locationChange(hash) {
    console.log(hash)
    switch(hash) {
      case "#hero":
      case "#home":
      case "#":
        document.getElementById("header").style.background = orangeColor; //orange
        document.getElementById("header").style.backgroundImage = "linear-gradient(to bottom, rgba(255,0,0,0), rgb(0, 0, 0), rgb(0, 0, 0))";
        console.log("hero")
        break;
        case "#about": 
        document.getElementById("header").style.background = greenColor; //green
        document.getElementById("header").style.backgroundImage = "linear-gradient(to bottom, rgba(255,0,0,0), rgb(0, 0, 0), rgb(0, 0, 0))";
        break;
        case "#resume": 
        document.getElementById("header").style.background = tealColor; //teal
        document.getElementById("header").style.backgroundImage = "linear-gradient(to bottom, rgba(255,0,0,0), rgb(0, 0, 0), rgb(0, 0, 0))";
        break;
        case "#portfolio": 
        document.getElementById("header").style.background = blueColor; //blue purple
          document.getElementById("header").style.backgroundImage = "linear-gradient(to bottom, rgba(255,0,0,0), rgb(0, 0, 0), rgb(0, 0, 0))";
          break;
          case "#testimonials": 
          document.getElementById("header").style.background = pinkColor; //dark pink
          document.getElementById("header").style.backgroundImage = "linear-gradient(to bottom, rgba(255,0,0,0), rgb(0, 0, 0), rgb(0, 0, 0))";
          break;
          case "#contact": 
          document.getElementById("header").style.background = redColor; //red-orange
          document.getElementById("header").style.backgroundImage = "linear-gradient(to bottom, rgba(255,0,0,0), rgb(0, 0, 0), rgb(0, 0, 0))";
          break;
      default:
          document.getElementById("header").style.background = "lightgray";
          document.getElementById("header").style.backgroundImage = "linear-gradient(to bottom, rgba(255,0,0,0), rgb(0, 0, 0), rgb(0, 0, 0))";
          break;
    }
  }
   window.addEventListener("hashchange", locationChange, false);


  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Update hash when scrolling to sections
   */
  window.addEventListener('load', () => {
    const headings = document.querySelectorAll('h2 a[name]');
    
    document.addEventListener('scroll', (e) => {
      headings.forEach(ha => {
        const rect = ha.getBoundingClientRect();
        if(rect.top > 0 && rect.top < 150) {
          const location = window.location.toString().split('#')[0];
          history.replaceState(null, null, location + '#' + ha.name);
        }
      });
    });
  });

  /**
   * Scroll with offset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  // let skilsContent = select('.skills-content');
  // if (skilsContent) {
  //   new Waypoint({
  //     element: skilsContent,
  //     offset: '80%',
  //     handler: function(direction) {
  //       let progress = select('.progress .progress-bar', true);
  //       progress.forEach((el) => {
  //         el.style.width = el.getAttribute('aria-valuenow') + '%'
  //       });
  //     }
  //   })
  // }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 16000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()