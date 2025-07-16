export default function Header() {
  return (
    <>
      <nav
        className="navbar has-background-grey-darker columns is-flex-direction-row is-justify-content-center"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="column is-2"></div>

        <div className="navbar-brand column is-four-fifths is-flex is-justify-content-space-between">
          <a className="navbar-item is-capitalized has-text-weight-bold is-size-4 has-text-info-100">
            CV Make
          </a>
          <button class=" button is-normal is-white">Get Started</button>
        </div>

        <div class="column is-2"></div>
      </nav>
    </>
  );
}

