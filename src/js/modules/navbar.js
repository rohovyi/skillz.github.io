export function navigationPage() {
    let navEvent = {};

    let nav = document.querySelector('.__nav-links');
    if (nav) {
        nav.addEventListener('click', (e) => {
            let target = e.target;
            if (target.tagName.toLowerCase() !== 'a') {
                return;
            }
            e.preventDefault();
            DARKNESS.navigation.toggleToActiveLink(target);
        });
    }

    navEvent.toggleToActiveLink = (target) => {
        let links = document.querySelectorAll('.__nav-item'),
            showedSection = target.dataset.link;
        links.forEach((link) => {
            if (link.classList.contains('__nav-item-active')) {
                link.classList.remove('__nav-item-active');
            }
        });
        target.classList.add('__nav-item-active');
        scrollToActiveSection(showedSection);
    };

    let scrollToActiveSection = (showedSection) => {
        let section = document.querySelector('.' + showedSection),
            coords = section.getBoundingClientRect(),
            animateTime = 0.1,
            timerID = setInterval(() => {
                if (window.scrollY < coords.top) {
                    window.scrollBy(0, 10);
                } else {
                    clearInterval(timerID);
                }
                }, animateTime || 0.2);
    };

    DARKNESS.navigation = navEvent;
}