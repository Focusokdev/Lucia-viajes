const destinations = [
  {
    id: "iguazu",
    number: "01",
    name: "Cataratas del Iguazú",
    description:
      "Un viaje inolvidable a una de las maravillas naturales del mundo. ¡Ideal para conectar con la naturaleza!",
    alt: "Vista panorámica de la Garganta del Diablo y las pasarelas entre la selva de Iguazú",
    image: "./assets/iguazu.webp",
    position: "center",
  },
  {
    id: "san-bernardo",
    number: "02",
    name: "San Bernardo",
    description:
      "El destino clásico y familiar para disfrutar del verano, el sol y las mejores playas de la costa argentina.",
    alt: "Día soleado en la playa de San Bernardo con el mar y el muelle de fondo",
    image: "./assets/san-bernardo.webp",
    position: "center",
  },
  {
    id: "salta",
    number: "03",
    name: "Salta (La Linda)",
    description:
      "Descubrí los colores del norte, sus increíbles cerros, peñas y su exquisita gastronomía tradicional.",
    alt: "Cerro de los Siete Colores en Purmamarca, Salta, bajo un cielo luminoso",
    image: "./assets/salta.webp",
    position: "center",
  },
  {
    id: "federacion",
    number: "04",
    name: "Termas de Federación",
    description:
      "Un verdadero oasis de relax. Aguas termales y tranquilidad absoluta, perfectas para desconectar de la rutina.",
    alt: "Piscina termal al aire libre entre jardines y árboles en Federación",
    image: "./assets/federacion.webp",
    position: "center",
  },
  {
    id: "san-rafael",
    number: "05",
    name: "San Rafael, Mendoza",
    description:
      "Aventura, majestuosos paisajes montañosos y visitas a las mejores bodegas. ¡Un viaje que lo tiene todo!",
    alt: "Cañón del Atuel y aguas turquesas del embalse Valle Grande en San Rafael, Mendoza",
    image: "./assets/san-rafael.webp",
    position: "center",
  },
  {
    id: "patagonia",
    number: "06",
    name: "Playas de la Patagonia",
    description:
      "Naturaleza en estado puro. Vení a maravillarte con nuestra fauna marina, avistaje de ballenas y pingüinos.",
    alt: "Pingüinos de Magallanes en una costa patagónica junto al mar",
    image: "./assets/patagonia.webp",
    position: "center",
  },
  {
    id: "recitales",
    number: "07",
    name: "Recitales",
    description:
      "Viví la emoción de un recital en el Estadio Monumental de River Plate: música en vivo y una noche para recordar.",
    alt: "Concierto nocturno en el Estadio Monumental de River Plate, con el público y el escenario iluminados",
    image: "./assets/river-recitales.webp",
    position: "center",
  },
];

const grid = document.querySelector("#destination-grid");
const searchInput = document.querySelector("#destination-search");
const searchPanel = document.querySelector("#search-panel");
const searchToggle = document.querySelector("#search-toggle");
const searchClose = document.querySelector("#search-close");
const resultsStatus = document.querySelector("#results-status");
const emptyState = document.querySelector("#empty-state");
const dialog = document.querySelector("#destination-dialog");
const dialogImage = document.querySelector("#dialog-image");
const dialogTitle = document.querySelector("#dialog-title");
const dialogDescription = document.querySelector("#dialog-description");
const menuButton = document.querySelector("#menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

function butterflyIcon() {
  return `<svg class="card-butterfly" viewBox="0 0 44 34" aria-hidden="true"><path d="M21 15C16-1 1 1 5 13c2 6 9 6 15 5-10 2-13 10-6 13 5 2 8-4 8-13 0 9 4 15 9 13 7-3 3-11-6-13 6 1 13 1 15-5C44 1 29-1 23 15l-1 3z"/><path d="M21 18c-1-6-3-9-7-12m9 12c1-6 3-9 7-12"/></svg>`;
}

function whatsappShareLink(destination) {
  const message = `Hola, quisiera recibir información sobre ${destination.name}.`;
  return `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
}

function renderCards() {
  grid.innerHTML = destinations
    .map(
      (destination) => `
        <article class="destination-card" data-searchable="${destination.name.toLowerCase()} ${destination.description.toLowerCase()}">
          <div class="card-image-wrap">
            <img class="card-image" src="${destination.image}" alt="${destination.alt}" loading="lazy" decoding="async" style="object-position:${destination.position}" />
            <span class="card-number">DESTINO ${destination.number}</span>
          </div>
          <div class="card-content">
            <div class="card-title-row">
              <h3 class="card-title">${destination.name}</h3>
              ${butterflyIcon()}
            </div>
            <p class="card-description">${destination.description}</p>
            <div class="card-actions">
              <button class="card-link" type="button" data-destination="${destination.id}" aria-label="Ver más sobre ${destination.name}">
                DESCUBRIR <span aria-hidden="true">↗</span>
              </button>
              <a class="whatsapp-link" href="${whatsappShareLink(destination)}" target="_blank" rel="noopener noreferrer" aria-label="Consultar por WhatsApp sobre ${destination.name}">
                <svg class="whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3 20l.9-4.7a8.5 8.5 0 1 1 16.6-3.5Z"/><path d="M8.4 7.9c.2-.4.4-.4.7-.4h.4c.2 0 .4.1.5.4l.8 1.9c.1.2.1.4 0 .5l-.5.6c-.2.2-.2.3-.1.5.5.9 1.1 1.5 2 2 .2.1.4.1.5-.1l.7-.8c.2-.2.4-.2.6-.1l1.8.8c.2.1.4.2.4.4 0 .3-.2 1-.7 1.4-.5.5-1.2.7-1.9.6-1.1-.2-2.3-.7-3.6-1.8-1.1-.9-2-2.1-2.3-3.2-.3-.9 0-1.9.4-2.5Z"/></svg>
                <span>CONSULTAR</span>
              </a>
            </div>
          </div>
        </article>`,
    )
    .join("");
}

function filterDestinations(value) {
  const query = value.trim().toLocaleLowerCase("es");
  let visible = 0;
  for (const card of grid.querySelectorAll(".destination-card")) {
    const matches = card.dataset.searchable.includes(query);
    card.hidden = !matches;
    if (matches) visible += 1;
  }
  emptyState.hidden = visible !== 0;
  resultsStatus.textContent = query
    ? `${visible} ${visible === 1 ? "destino encontrado" : "destinos encontrados"}`
    : "Siete destinos para descubrir";
}

function closeSearch() {
  searchPanel.hidden = true;
  searchToggle.setAttribute("aria-expanded", "false");
  searchToggle.focus();
}

renderCards();

searchToggle.addEventListener("click", () => {
  const opening = searchPanel.hidden;
  searchPanel.hidden = !opening;
  searchToggle.setAttribute("aria-expanded", String(opening));
  if (opening) window.setTimeout(() => searchInput.focus(), 30);
});
searchClose.addEventListener("click", closeSearch);
searchPanel.addEventListener("submit", (event) => event.preventDefault());
searchInput.addEventListener("input", (event) => filterDestinations(event.target.value));
document.querySelector("#clear-search").addEventListener("click", () => {
  searchInput.value = "";
  filterDestinations("");
  searchInput.focus();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !searchPanel.hidden) closeSearch();
});

grid.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-destination]");
  if (!trigger) return;
  const destination = destinations.find((item) => item.id === trigger.dataset.destination);
  if (!destination) return;
  dialogImage.src = destination.image;
  dialogImage.alt = destination.alt;
  dialogTitle.textContent = destination.name;
  dialogDescription.textContent = destination.description;
  dialog.showModal();
});

document.querySelector("#dialog-close").addEventListener("click", () => dialog.close());
document.querySelector("#dialog-action").addEventListener("click", () => {
  dialog.close();
  document.querySelector("#destinos").scrollIntoView({ behavior: "smooth" });
});
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

menuButton.addEventListener("click", () => {
  const opening = !primaryNav.classList.contains("is-open");
  primaryNav.classList.toggle("is-open", opening);
  menuButton.setAttribute("aria-expanded", String(opening));
  menuButton.setAttribute("aria-label", opening ? "Cerrar menú" : "Abrir menú");
});
primaryNav.addEventListener("click", (event) => {
  if (!event.target.closest("a")) return;
  primaryNav.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menú");
});
