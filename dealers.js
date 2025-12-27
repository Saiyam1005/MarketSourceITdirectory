console.log("dealers.js loaded");

fetch("dealers.txt")
  .then(res => res.text())
  .then(text => {

    text = text
      .replace(/•/g, "")
      .replace(/PAGE NO.*$/gmi, "")
      .trim();

    const lines = text.split("\n");
    const container = document.getElementById("dealers");

    let dealers = [];
    let current = null;

    lines.forEach(rawLine => {
      const line = rawLine.trim();
      if (!line) return;

      // START of a new dealer
      if (line.startsWith("Name:")) {
        if (current) dealers.push(current);
        current = { name: line.replace("Name:", "").trim() };
      }
      else if (current && line.startsWith("Address:")) {
        current.address = line.replace("Address:", "").trim();
      }
      else if (current && /services:/i.test(line)) {
        current.services = line.split(":").slice(1).join(":").trim();
      }
      else if (current && /MO.NO:/i.test(line)) {
        current.mobile = line.split(":").slice(1).join(":").trim();
      }
    });

    if (current) dealers.push(current); // last dealer

    // CREATE CARDS
    const searchInput = document.getElementById("searchInput");

    function renderDealers(list) {
      container.innerHTML = "";

      list.forEach(d => {
        const card = document.createElement("div");
        card.className = "dealer-card";

        card.innerHTML = `
  <div class="dealer-name-pill">${d.name}</div>

  <p class="dealer-line">
    <i class="fa-solid fa-location-dot"></i>
    <span>${d.address || "Not Available"}</span>
  </p>

  <p class="dealer-line">
    <i class="fa-solid fa-screwdriver-wrench"></i>
    <span>${d.services || "Not Available"}</span>
  </p>

  <p class="dealer-line">
    <i class="fa-solid fa-phone"></i>
    <span>${d.mobile || "Not Available"}</span>
  </p>
`;


        container.appendChild(card);
      });
    }

    // INITIAL RENDER
    renderDealers(dealers);

    // SEARCH LOGIC
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();

      const filtered = dealers.filter(d =>
        d.name?.toLowerCase().includes(query) ||
        d.services?.toLowerCase().includes(query) ||
        d.address?.toLowerCase().includes(query)
      );

      renderDealers(filtered);
    });


    console.log("Total dealers loaded:", dealers.length);
  })
  .catch(err => console.error(err));
