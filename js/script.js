
function showTab(event, tabId) {
    event.preventDefault();
    const tabs = document.querySelectorAll('.service-content');
    tabs.forEach(tab => tab.classList.add('d-none'));

    
    const links = document.querySelectorAll('.service-list a');
    links.forEach(link => link.classList.remove('active'));

    document.getElementById(tabId).classList.remove('d-none');
    event.currentTarget.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarmain');
    
    toggler.addEventListener('click', function () {
      const isExpanded = toggler.getAttribute('aria-expanded') === 'true';
      
      // Toggle the collapse
      navbarCollapse.classList.toggle('collapse');
      
      // Update aria-expanded attribute
      toggler.setAttribute('aria-expanded', !isExpanded);
    });
  });

(function () {
    'use strict';

    // SCROLL TO TOP
    window.addEventListener('scroll', function () {
        if (window.scrollY > 70) {
            document.querySelector('.backtop').classList.add('reveal');
        } else {
            document.querySelector('.backtop').classList.remove('reveal');
        }
    });



    // Counter Up
    const counterUp = (el, options) => {
        const { delay, time } = options;
        const target = +el.textContent;
        let count = 0;
        const increment = target / (time / delay);

        const updateCounter = () => {
            count += increment;
            if (count >= target) {
                el.textContent = target;
            } else {
                el.textContent = Math.ceil(count);
                setTimeout(updateCounter, delay);
            }
        };

        updateCounter();
    };

    document.querySelectorAll('.counter-stat span').forEach((el) => {
        counterUp(el, { delay: 10, time: 1000 });
    });


})();
