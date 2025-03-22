const mainContentSection = document.querySelector('h2')
mainContentSection.style.color = 'red';

const footerSection = document.querySelector('footer')
const forkClass = footerSection.querySelector('#fork')
forkClass.style.textDecoration = 'underline'

const contact = document.querySelector('#contact')

contact.addEventListener('mouseover', () => {
    contact.closest('nav').style.backgroundColor = 'lightblue'
})
