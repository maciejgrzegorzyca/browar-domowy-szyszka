function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";}

// custom-elements.js
class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Logo on the top -->
        <div class="container-sm p-3 border-bottom">
            <a href="index.html"><img src="images/pages/logo_br_dom_szyszka.png" class="logo"></a>
        </div>  
        
        <!-- Navbar -->
        <nav class="navbar navbar-expand-sm navbar-dark text-uppercase">
            <div class="container-fluid justify-content-center">
    
                <!-- Toggler button for small screens -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <!-- Collapsible content -->
                <div class="collapse navbar-collapse justify-content-center" id="main-nav">
                    <ul class="navbar-nav">
                        <li class="nav-item ">
                            <a class="nav-link" href="index.html"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                              </svg></i></a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="home_brew.html">piwowarstwo domowe</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="brew_show.html">pokazy warzenia</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about_me.html">O mnie</a>
                        </li>
    
                        <li class="nav-item">
                            <a class="nav-link" href="#footer">kontakt</a>
                        </li>
                    </ul>
                </div>  
            </div>
        </nav>
        `
    }
}
window.customElements.define('app-header', AppHeader)

class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `


        <!-- Footer -->
        <div class="container-sm">
            <footer class="row py-4 my-2 border-top" id="footer">
                <div class="col-sm-4 mb-2">
                    <a href="index.html"><img src="images/pages/logo_br_dom_szyszka.png" class="logo"></a>
                </div>
                <div class="col-sm-4 mb-2 text-white">
                    <u1 class="nav flex-column">
                        <li class="nav-item mb-1 footer-text">WIĘCEJ INFORMACJI</li>
                        <li class="nav-item mb-1">
                            <a class="nav-link p-0 text-secondary" href="home_brew.html">Piwowartwo domowe</a> 
                        </li>
                        <li class="nav-item mb-1">
                            <a class="nav-link p-0 text-secondary" href="brew_show.html">Pokazy warzenia</a> 
                        </li>
                        <li class="nav-item mb-1">
                            <a class="nav-link p-0 text-secondary" href="about_me.html">O mnie</a> 
                        </li>
                    </u1>
                </div>
                <div class="col-sm-4 mb-2 text-white">
                    <u1 class="nav flex-column">
                        <li class="nav-item mb-1 footer-text">
                            KONTAKT
                        </li>

                        <li class="nav-item mb-1">
                            <i class="bi bi-envelope"></i>
                            <p class="text-break mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                              </svg> browardomowyszyszka@gmail.com</p>
                                                          </li>
                        <li class="nav-item mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                              </svg>
                              +48 530-707-303
                        </li>
                        <li class="nav-item mb-1">
                            Katowice
                        </li>
                    </u1>
                    
                </div>
                <p class="text-center mt-3 text-secondary">© Browar Domowy Szyszka. Wszystkie prawa zastrzeżone 2024.</p>
            </footer>
        </div>
       
        `
    }
}
window.customElements.define('app-footer', AppFooter)
