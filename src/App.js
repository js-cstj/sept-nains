export default class App {
    static load() {
        //===========================================================
        // PROF
        //===========================================================
        prof.addEventListener('mouseenter', e =>{
            document.body.style.backgroundColor = this.couleurAlea();
        })
        prof.addEventListener('mouseleave', e =>{
            document.body.style.backgroundColor = "";
        });
        //===========================================================
        // JOYEUX
        //===========================================================
        joyeux.addEventListener('click', e => {
            if (e.target.style.animationPlayState === "running") {
                e.target.style.animationPlayState = "paused";
            } else {
                e.target.style.animationPlayState = "running";
            }
        });
        //===========================================================
        // DORMEUR
        //===========================================================
        dormeur.addEventListener("click", e => {
            if (e.target.getAttribute("src") === "images/minuscule/dormeur.png") {
                e.target.src = "images/petit/dormeur.png";
            } else if (e.target.getAttribute("src") === "images/petit/dormeur.png") {
                e.target.src = "images/gros/dormeur.png";
            } else {
                e.target.src = "images/minuscule/dormeur.png";
            }
        });
        //===========================================================
        // TIMIDE
        //===========================================================
        timide.addEventListener("mousemove", e => {
            var x = Math.floor(Math.random() * 200) - 100;
            var y = Math.floor(Math.random() * 200) - 100;
            e.target.style.transform = `translate(${x}px, ${y}px)`;
        });
        //===========================================================
        // ATCHOUM
        //===========================================================
        atchoum.addEventListener('dblclick', e => {
            if (e.target.style.animationName === "atchoum") {
                e.target.style.animationName = "";
            } else {
                e.target.style.animationName = "atchoum";

            }
        });
        atchoum.addEventListener('animationend', e => {
            if (e.animationName === "atchoum") {
                e.target.style.animationName = "";
            }
        });
        //===========================================================
        // SIMPLET
        //===========================================================
        simplet.addEventListener('click', e => {
            if (e.shiftKey) {
                var texte = document.querySelector("#plateau>div.texte");
                texte.style.color = this.couleurAlea();    
            }
        });
        //===========================================================
        // GRINCHEUX
        //===========================================================
        window.addEventListener("keydown", e => {
            if (e.key === " ") {
                grincheux.style.boxShadow = "0 0 1em";
            }
        })
        window.addEventListener("keyup", e => {
            if (e.key === " ") {
                grincheux.style.boxShadow = "";
            }
        });
    }
    static couleurAlea() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
    static init() {
        window.addEventListener("load", e => {
            this.load();
        })
    }
}
App.init();