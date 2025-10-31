window.addEventListener("load", () => {
    const imageContainer = document.getElementById("imageContainer");
    const animatedImage = document.getElementById("animatedImage");
    const description = document.getElementById("description");
  
    // Delay for smooth animation
    setTimeout(() => {
      imageContainer.classList.add("visible");
    }, 400);
  
    setTimeout(() => {
      animatedImage.classList.add("visible");
      description.classList.remove("hidden");
      description.classList.add("visibleText");
    }, 1200);
  });
  