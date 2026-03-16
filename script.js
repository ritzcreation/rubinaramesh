document.addEventListener("DOMContentLoaded", async function () {
  const headerPlaceholder = document.getElementById("header-placeholder");
  const footerPlaceholder = document.getElementById("footer-placeholder");

  try {
    if (headerPlaceholder) {
      const headerResponse = await fetch("header.html");
      if (!headerResponse.ok) {
        throw new Error("header.html not found");
      }
      const headerData = await headerResponse.text();
      headerPlaceholder.innerHTML = headerData;
    }

    if (footerPlaceholder) {
      const footerResponse = await fetch("footer.html");
      if (!footerResponse.ok) {
        throw new Error("footer.html not found");
      }
      const footerData = await footerResponse.text();
      footerPlaceholder.innerHTML = footerData;
    }

    const handleScroll = () => {
      const header = document.querySelector(".site-header");
      if (!header) return;

      if (window.scrollY > 80) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
  } catch (error) {
    console.error("Error loading header/footer:", error);
  }
});
