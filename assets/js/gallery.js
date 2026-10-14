(function () {
  var grid = document.getElementById("work-grid");
  if (!grid) return;

  var fallback = document.getElementById("work-fallback");
  var modal = document.getElementById("art-modal");
  var modalImage = document.getElementById("modal-image");
  var closeButton = modal.querySelector(".modal-close");

  function openModal(work) {
    modalImage.src = work.image;
    modalImage.alt = work.alt;
    modal.showModal();
    document.body.classList.add("modal-open");
  }

  function createWorkButton(work, index) {
    var button = document.createElement("button");
    var image = document.createElement("img");

    button.className = "work-button";
    button.type = "button";
    button.setAttribute("aria-label", "Open larger view: " + work.alt);

    image.src = work.image;
    image.alt = work.alt;
    image.width = work.width;
    image.height = work.height;
    image.decoding = "async";
    if (index > 2) image.loading = "lazy";

    button.appendChild(image);
    button.addEventListener("click", function () {
      openModal(work);
    });
    return button;
  }

  fetch("work/gallery.json")
    .then(function (response) {
      if (!response.ok) throw new Error("Gallery data could not be loaded.");
      return response.json();
    })
    .then(function (works) {
      if (!works.length) throw new Error("The gallery is empty.");
      works.forEach(function (work, index) {
        grid.appendChild(createWorkButton(work, index));
      });
    })
    .catch(function () {
      if (fallback) fallback.hidden = false;
    });

  closeButton.addEventListener("click", function () {
    modal.close();
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) modal.close();
  });

  // Native dialogs handle Escape, keyboard focus, and focus return on close.
  modal.addEventListener("close", function () {
    document.body.classList.remove("modal-open");
    modalImage.removeAttribute("src");
  });
})();
