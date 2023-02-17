const sidebarOpenButton = document.querySelector('.navbar__burger');
const sidebar = document.querySelector('.sidebar');

sidebarOpenButton.addEventListener('click', handleOpenSidebar);

function handleOpenSidebar(e){
    e.preventDefault();
    sidebar.classList.toggle('sidebar_open');
    sidebarOpenButton.classList.toggle('navbar__burger_active');
};