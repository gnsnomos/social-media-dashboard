import './styles/style.scss';
let isLightTheme = true;
document.querySelector("body > header > div.right > label > span").addEventListener('click', () => {
    isLightTheme = !isLightTheme;

    localStorage.setItem('social-media-dashboard-theme', (isLightTheme ? 'light' : 'dark'));

    setTheme();
});

function setTheme() {
    document.querySelector('body').classList.remove((isLightTheme ? 'dark' : 'light'));
    document.querySelector('body').classList.add((isLightTheme ? 'light' : 'dark'));
}

if (localStorage.getItem('social-media-dashboard-theme') && localStorage.getItem('social-media-dashboard-theme') !== '') {
    isLightTheme = localStorage.getItem('social-media-dashboard-theme') === 'light';
}

setTheme();