(function () {
  var grid = document.getElementById("work-grid");
  if (!grid) return;

  var fallback = document.getElementById("work-fallback");
  var modal = document.getElementById("art-modal");
  var modalImage = document.getElementById("modal-image");
  var modalTitle = document.getElementById("modal-title");
  var modalDetails = document.getElementById("modal-details");
  var closeButton = modal.querySelector(".modal-close");
  var lastFocusedElement = null;

  function captionTitle(work) {
    return work.title + (work.year ? ", " + work.year : "");
  }

  function captionDetails(work) {
    var details = [];
    if (work.medium) details.push(work.medium);
    if (work.dimensions) details.push(work.dimensions);
    return details.join(", ");
  }

  function openModal(work) {
    lastFocusedElement = document.activeElement;
    modalImage.src = work.image;
    modalImage.alt = work.alt;
    modalTitle.textContent = captionTitle(work);
    modalDetails.textContent = captionDetails(work);
    modal.hidden = false;
    document.body.classList.add("modal-open");
    closeButton.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    modalImage.src = "";

    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  }

  function createWorkCard(work, index) {
    var figure = document.createElement("figure");
    var button = document.createElement("button");
    var image = document.createElement("img");
    var caption = document.createElement("figcaption");
    var title = document.createElement("span");
    var details = document.createElement("span");

    figure.className = "work-card";
    button.className = "work-button";
    button.type = "button";
    button.setAttribute("aria-label", "Open larger view of " + captionTitle(work));

    image.src = work.image;
    image.alt = work.alt;
    image.width = work.width || 900;
    image.height = work.height || 700;
    image.decoding = "async";
    if (index > 1) image.loading = "lazy";

    caption.className = "art-caption";
    title.textContent = captionTitle(work);
    details.textContent = captionDetails(work);

    button.appendChild(image);
    caption.appendChild(title);
    caption.appendChild(details);
    figure.appendChild(button);
    figure.appendChild(caption);

    button.addEventListener("click", function () {
      openModal(work);
    });

    return figure;
  }

  fetch("assets/data/works.json")
    .then(function (response) {
      if (!response.ok) throw new Error("Gallery data could not be loaded.");
      return response.json();
    })
    .then(function (works) {
      works.forEach(function (work, index) {
        grid.appendChild(createWorkCard(work, index));
      });
    })
    .catch(function () {
      if (fallback) fallback.hidden = false;
    });

  closeButton.addEventListener("click", closeModal);

  modal.addEventListener("click", function (event) {
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !modal.hidden) closeModal();
  });
})();
