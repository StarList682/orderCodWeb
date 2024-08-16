document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("order-modal");
    var orderButtons = document.querySelectorAll('.order-btn');
    var span = document.getElementsByClassName("close")[0];

    orderButtons.forEach(function(button) {
        button.onclick = function() {
            modal.style.display = "block";
        }
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.getElementById('scroll-to-tariffs').onclick = function() {
        document.getElementById('tariffs').scrollIntoView({ behavior: 'smooth' });
    }

    var enBtn = document.getElementById('en-btn');
    var ruBtn = document.getElementById('ru-btn');

    function setLanguage(lang) {
        document.querySelectorAll('[data-' + lang + ']').forEach(function (element) {
            element.textContent = element.getAttribute('data-' + lang);
        });

        enBtn.classList.remove('active');
        ruBtn.classList.remove('active');

        if (lang === 'en') {
            enBtn.classList.add('active');
        } else {
            ruBtn.classList.add('active');
        }

        if (lang === 'ru') {
            var portfolioLink = document.getElementById('portfolio-link');
            if (portfolioLink) {
                portfolioLink.innerHTML = portfolioLink.innerHTML.replace('здесь', '<a href="https://starlist682.github.io/WebPortfolio/" target="_blank">здесь</a>');
            }
        } else {
            var portfolioLink = document.getElementById('portfolio-link');
            if (portfolioLink) {
                portfolioLink.innerHTML = portfolioLink.innerHTML.replace('here', '<a href="https://starlist682.github.io/WebPortfolio/" target="_blank">here</a>');
            }
        }
    }

    setLanguage('en');

    enBtn.onclick = function () {
        setLanguage('en');
    };

    ruBtn.onclick = function () {
        setLanguage('ru');
    };
});
