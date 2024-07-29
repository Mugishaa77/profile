
export default function Navbar() {
  return (
    <div className="navbar roboto-flex">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Sally Wanga</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/projects" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Projects
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Darasani Hub</a></li>
            <li><a class="dropdown-item" href="#">Atlas</a></li>
            <li><a class="dropdown-item" href="#">Evergreen</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Me</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
}