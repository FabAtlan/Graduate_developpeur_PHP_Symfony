let arrowLeft = document.getElementById('arrowLeft')
let arrowRight = document.getElementById('arrowRight')
let validation = document.getElementById('validation')
let pages = document.querySelectorAll('.breadcrumb a')
let currentPage = document.location.href
let home = document.getElementById('home')
let listPages = [
  {name: 'Accueil', active : false},
  {name: 'Front-end', active : true, link: 'nav-front-end.html'},
  {name: 'Back-end', active : false},
  {name: 'Liens utiles', active : false},
  {name: 'Lexique', active : false}
]

// for (let i = 0; i < pages.length; i++) {
//   console.log(pages[i].href)
// }

// Arrow left
arrowLeft.addEventListener('click', () => {
  for (let i = 0; i < pages.length; i++) {
    if (pages[i].className === 'active') {
      console.log(pages[i].href)
      if (i > 0) {
        document.location.href = pages[i - 1].href
      } else {
        document.location.href = pages[pages.length - 1].href
      }
    }
  }
})

// Arrow right
arrowRight.addEventListener('click', () => {
  for (let i = 0; i < pages.length; i++) {
    if (pages[i].className === 'active') {
      if (i < pages.length - 1) {
        document.location.href = pages[i + 1].href
      } else {
        document.location.href = pages[0].href
      }
    }
  }
})

// Validation
validation.addEventListener('click', () => {
  for (let i = 0; i < pages.length; i++) {
    let Page = pages[i]

    if (Page.className === "active" && listPages[i].active) {
      document.location.href = listPages[i].link
    }
  }
})

// Home
home.addEventListener('click', () => {
  // document.location.href = home.href
  document.location.href = pages[0].href
})