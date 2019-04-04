const $toggleMenuButton = document.getElementById('toggleMenuButton');
const $menuCloseButton = document.getElementById('menuCloseButton');
const $toggleMenuNav = document.getElementById('toggleMenuNav');

const toggleMenuNav = () => {
    $toggleMenuNav.classList.toggle('isOpen');
};

$toggleMenuButton.addEventListener('click', toggleMenuNav);
$menuCloseButton.addEventListener('click', toggleMenuNav);
