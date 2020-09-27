function openNav() {
    document.getElementById("sideNavigation").style.width = "250px";
    document.getElementById('sideNavigation').setAttribute('aria-hidden', 'false');
}

function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById('sideNavigation').setAttribute('aria-hidden', 'true');
}
