document.addEventListener(
  "DOMContentLoaded",
  function() {
    const Event = {
      events: {},
      emit: function(type, data) {
        if (this.events[type]) {
          this.events[type].forEach(({ listener }) => {
            listener(data);
          });
        }
      },
      on: function(type, listener) {
        this.events = {
          ...this.events,
          [type]: [
            ...(this.events[type] || []),
            {
              listener
            }
          ]
        };
      }
    };
    function Tab(options) {
      const { element, event } = options;
      const $tab = [...document.querySelectorAll(element)];
      $tab.forEach($links => {
        $links.addEventListener(event, e => {
          Event.emit("onchangetab", e);
        });
      });
    }
    Event.on("onchangetab", e => {
      const { currentTarget } = e;
      const id = currentTarget.getAttribute("data-id");
      const $currentItem = document.querySelector(`#${id}`);
      const $tabPanel = document.querySelector(".tab__panel.hover__active");
      $tabPanel.classList.remove("hover__active");
      $currentItem.classList.add("hover__active");
    });
    Tab({ element: ".tab__nav__item", event: "mouseenter" });

    var swiper = new Swiper(".swiper-container", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      autoplay: {
        delay: 5000
      },
      loop: true
    });
    var swiper_blog = new Swiper(".swiper__blog", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      loop: true
    });
  },
  false
);
