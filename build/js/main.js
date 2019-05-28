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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gIFwiRE9NQ29udGVudExvYWRlZFwiLFxuICBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBFdmVudCA9IHtcbiAgICAgIGV2ZW50czoge30sXG4gICAgICBlbWl0OiBmdW5jdGlvbih0eXBlLCBkYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1t0eXBlXSkge1xuICAgICAgICAgIHRoaXMuZXZlbnRzW3R5cGVdLmZvckVhY2goKHsgbGlzdGVuZXIgfSkgPT4ge1xuICAgICAgICAgICAgbGlzdGVuZXIoZGF0YSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbjogZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5ldmVudHMgPSB7XG4gICAgICAgICAgLi4udGhpcy5ldmVudHMsXG4gICAgICAgICAgW3R5cGVdOiBbXG4gICAgICAgICAgICAuLi4odGhpcy5ldmVudHNbdHlwZV0gfHwgW10pLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsaXN0ZW5lclxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZ1bmN0aW9uIFRhYihvcHRpb25zKSB7XG4gICAgICBjb25zdCB7IGVsZW1lbnQsIGV2ZW50IH0gPSBvcHRpb25zO1xuICAgICAgY29uc3QgJHRhYiA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnQpXTtcbiAgICAgICR0YWIuZm9yRWFjaCgkbGlua3MgPT4ge1xuICAgICAgICAkbGlua3MuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZSA9PiB7XG4gICAgICAgICAgRXZlbnQuZW1pdChcIm9uY2hhbmdldGFiXCIsIGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBFdmVudC5vbihcIm9uY2hhbmdldGFiXCIsIGUgPT4ge1xuICAgICAgY29uc3QgeyBjdXJyZW50VGFyZ2V0IH0gPSBlO1xuICAgICAgY29uc3QgaWQgPSBjdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG4gICAgICBjb25zdCAkY3VycmVudEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcbiAgICAgIGNvbnN0ICR0YWJQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFiX19wYW5lbC5ob3Zlcl9fYWN0aXZlXCIpO1xuICAgICAgJHRhYlBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJob3Zlcl9fYWN0aXZlXCIpO1xuICAgICAgJGN1cnJlbnRJdGVtLmNsYXNzTGlzdC5hZGQoXCJob3Zlcl9fYWN0aXZlXCIpO1xuICAgIH0pO1xuICAgIFRhYih7IGVsZW1lbnQ6IFwiLnRhYl9fbmF2X19pdGVtXCIsIGV2ZW50OiBcIm1vdXNlZW50ZXJcIiB9KTtcblxuICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLnN3aXBlci1jb250YWluZXJcIiwge1xuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICAgICAgcHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIlxuICAgICAgfSxcbiAgICAgIGF1dG9wbGF5OiB7XG4gICAgICAgIGRlbGF5OiA1MDAwXG4gICAgICB9LFxuICAgICAgbG9vcDogdHJ1ZVxuICAgIH0pO1xuICAgIHZhciBzd2lwZXJfYmxvZyA9IG5ldyBTd2lwZXIoXCIuc3dpcGVyX19ibG9nXCIsIHtcbiAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICAgICAgcHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIlxuICAgICAgfSxcbiAgICAgIGxvb3A6IHRydWVcbiAgICB9KTtcbiAgfSxcbiAgZmFsc2Vcbik7XG4iXSwiZmlsZSI6Im1haW4uanMifQ==
