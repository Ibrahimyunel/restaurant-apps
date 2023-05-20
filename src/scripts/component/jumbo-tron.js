class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="jumbotron">
        <div class="main-img">
            <picture>
              <source media="(max-width: 600px)" srcset="./images/hero-image_1-small.webp" type="image/webp">
              <source media="(max-width: 600px)" srcset="./images/hero-image_1-small.jpg" type="image/jpeg">
              <source media="(min-width: 601px)" srcset="./images/hero-image_1-large.webp" type="image/webp">
              <img src="./images/hero-image_1-large.jpg" alt="">
            </picture>
        </div>
        <div class="main-text">
          <h1>Just find your location and choose what you want to eat
              <div>&gt; But don't forget to pay the bill afterwards 😄</div>
              And then enjoy your food...
          </h1>
        </div>
      </section>
    `;
  }
}

customElements.define('jumbo-tron', Jumbotron);
