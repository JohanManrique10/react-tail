import CrossIcon from "./components/CrossIcon";
import MoonIcon from "./components/MoonIcon";
import React from 'react';

const App = () => {
  return (
    <div className="bg-[url('./assets/images/fond.jpg')] bg-contain bg-no-repeat bg-white- min-h-screen ">
      <br />
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
          <span className="fs-4">Simple header</span>
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
          <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
          <li className="nav-item"><a href="#" className="nav-link active  " aria-current="page">LOGIN IN WITH GITHUB</a></li>
        </ul>
      </header>

      <main className="container mx-auto px-4 mt-8">
        <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
          <div className="dropdown-menu position-static d-flex flex-column flex-lg-row align-items-stretch justify-content-start p-3 rounded-3 shadow-lg" data-bs-theme="light">
            <nav className="col-lg-8">
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li>
                  <a href="#" className="btn btn-hover-light rounded-2 d-flex align-items-start gap-2 py-2 px-3 lh-sm text-start">
                    <svg className="bi" width="24" height="24"><use xlinkHref="#image-fill"></use></svg>
                    <div>
                      <strong className="d-block">Main product</strong>
                      <small>Take a tour through the product</small>
                    </div>
                  </a>
                </li>
                <img src="" alt="" />
              </ul>
            </nav>
            <div className="d-none d-lg-block vr mx-4 opacity-10">&nbsp;</div>
            <hr className="d-lg-none" />
            <div className="col-lg-auto pe-3">
              <nav>
                <ul className="d-flex flex-column gap-2 list-unstyled small">
                  
                </ul>
              </nav>
            </div>
          </div>

          <div className="dropdown-menu position-static d-flex flex-column flex-lg-row align-items-stretch justify-content-start p-3 rounded-3 shadow-lg" data-bs-theme="dark">
            <nav className="col-lg-8">
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li>
                  <a href="#" className="btn btn-hover-light rounded-2 d-flex align-items-start gap-2 py-2 px-3 lh-sm text-start">
                    <svg className="bi" width="24" height="24"><use xlinkHref="#image-fill"></use></svg>
                    <div>
                      <strong className="d-block">Main product</strong>
                      <small>Take a tour through the product</small>
                    </div>
                  </a>
                </li>
                
              </ul>
            </nav>
            <div className="d-none d-lg-block vr mx-4 opacity-10">&nbsp;</div>
            <hr className="d-lg-none" />
            <div className="col-lg-auto pe-3">
              <nav>
                <ul className="d-flex flex-column gap-2 list-unstyled small">
                  
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
