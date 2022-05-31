console.log(colors);

const palettes = `<span>TEST</span>${colors
  .map(
    (palette, index) => `<h2>${paletteNames[index]}</h2>
      <div class="palette">${palette
        .map(
          (color, index) => `
            <div class="infoBox">  
              <div class="color" style="background: ${color.hex};"></div>  
              <div>${color.name}</div>
            </div>
          `
        )
        .join("")}</div>`
  )
  .join("")}`;

document.getElementById("palettes").innerHTML = palettes;
