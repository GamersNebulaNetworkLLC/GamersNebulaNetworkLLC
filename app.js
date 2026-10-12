const discordUrl = 'https://discord.gg/aYmrQmEQay';
const views = {
  home: `
    <section class="hero" aria-labelledby="home-title">
      <div class="hero-content">
        <p class="eyebrow">Independent game studio</p>
        <h1 id="home-title">Play beyond<br>the <span>expected.</span></h1>
        <p class="hero-copy">We’re Gamers Nebula Network, building toward new worlds, memorable stories, and the moments players carry with them.</p>
        <div class="hero-actions">
          <a class="button" href="#projects">Explore our projects <span aria-hidden="true">↗</span></a>
          <a class="text-link" href="#about">Get to know us</a>
        </div>
      </div>
      <span class="hero-index">A new signal is forming</span>
    </section>
    <section class="home-strip" aria-label="Studio update">
      <div><span class="strip-label">Currently in orbit</span><div class="strip-value">Our first project <span class="status">Details under wraps</span></div></div>
      <div><span class="strip-label">Stay connected</span><div class="strip-value">Find us on Discord <a class="text-link" href="${discordUrl}" target="_blank" rel="noopener noreferrer">Join the community ↗</a></div></div>
    </section>`,
  about: `
    <section class="page-view" aria-labelledby="page-title">
      <div class="page-head">
        <p class="eyebrow">About our company</p>
        <h1 id="page-title">Small signal.<br><em>Big universe.</em></h1>
        <p class="page-lede">Gamers Nebula Network LLC is an independent game company with a simple ambition: make experiences that stay with you after you put the controller down.</p>
      </div>
      <div class="content-rule">
        <span class="micro-label">What we believe</span>
        <p>Games can be more than a way to pass the time. They can bring people together, spark curiosity, and open doors to places that only exist because someone imagined them first. That’s the kind of possibility we’re here for.</p>
      </div>
    </section>`,
  team: `
    <section class="page-view" aria-labelledby="page-title">
      <div class="page-head">
        <p class="eyebrow">The team</p>
        <h1 id="page-title">Good things<br>take <em>a crew.</em></h1>
        <p class="page-lede">Every world starts with people who care about the details, the big ideas, and the players on the other side of the screen.</p>
      </div>
      <div class="team-note">
        <span class="team-symbol" aria-hidden="true">GN</span>
        <div><h2>Team introductions are on the way.</h2><p>We’re getting the studio ready for its close-up. Meet us in Discord while we prepare to share more.</p></div>
      </div>
    </section>`,
  projects: `
    <section class="page-view" aria-labelledby="page-title">
      <div class="page-head">
        <p class="eyebrow">Our projects</p>
        <h1 id="page-title">Something is<br><em>out there.</em></h1>
        <p class="page-lede">We’re working on our first project. The details are staying under wraps until we’re ready to reveal them.</p>
      </div>
      <article class="project-entry">
        <span class="project-number">PROJECT 01</span>
        <div><h2 class="project-name">[REDACTED]</h2><p class="project-description">More information closer to release.</p></div>
        <span class="redacted">Signal obscured</span>
      </article>
    </section>`,
  contact: `
    <section class="page-view" aria-labelledby="page-title">
      <div class="contact-layout">
        <div class="page-head">
          <p class="eyebrow">Contact us</p>
          <h1 id="page-title">Let’s talk<br><em>in orbit.</em></h1>
          <p class="page-lede">Need a hand or want to reach the team? Join our Discord and open a support ticket. That’s the best way to get in touch.</p>
        </div>
        <div class="contact-action">
          <span class="micro-label">Community & support</span>
          <p>Join the server, then create a support ticket so the right person can help.</p>
          <a class="button" href="${discordUrl}" target="_blank" rel="noopener noreferrer">Join our Discord <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>`
};

const titles = {
  home: 'Home',
  about: 'About our company',
  team: 'The team',
  projects: 'Our projects',
  contact: 'Contact us'
};
const main = document.querySelector('#main-content');
const navLinks = [...document.querySelectorAll('.site-nav a')];

function renderPage() {
  const page = window.location.hash.slice(1) || 'home';
  const selectedPage = Object.hasOwn(views, page) ? page : 'home';
  main.innerHTML = views[selectedPage];
  document.title = `${titles[selectedPage]} | Gamers Nebula Network LLC`;

  for (const link of navLinks) {
    if (link.hash === `#${selectedPage}`) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  }
}

document.querySelector('#copyright-year').textContent = new Date().getFullYear();
window.addEventListener('hashchange', renderPage);
renderPage();
