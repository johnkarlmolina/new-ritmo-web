export default function Home() {
  return (
    <section className="home-hero">
      <div className="home-inner">
        <div className="home-copy">
          <h2>Our Goal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <button className="home-cta">Download Mobile App</button>
        </div>

        <div className="home-cards">
          <div className="hc card-lg" aria-label="Brushing teeth illustration">🪥</div>
          <div className="hc card-md" aria-label="Eating illustration">🍽️</div>
          <div className="hc card-sm" aria-label="Bath illustration">🛁</div>
        </div>
      </div>
    </section>
  )
}
