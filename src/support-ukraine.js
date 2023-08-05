const refs = {
  funds: document.querySelector('.funds'),
  slider: document.querySelector('.slider'),
  sliderBtn: document.querySelector('.slider_btn'),
};

refs.slider.addEventListener('click', onSliderClick);

function onSliderClick() {
  const fundsMenu = document.getElementById('fundsList');

  fundsMenu.classList.toggle('active');
  updateContainerHeight();
}

function updateContainerHeight() {
  const fundsMenu = document.getElementById('fundsList');
  const fundsContainer = document.getElementById('container');
  const listOfFunds = fundsMenu.getElementsByClassName('fund__li');

  const isExpended = fundsMenu.classList.contains('active');
  if (isExpended) {
    const totalHeight = Array.from(listOfFunds).reduce(
      (acc, fund) => acc + refs.fund.clientHeight,
      0
    );
    fundsContainer.style.height = `${totalHeight}px`;
  } else {
    fundsContainer.style.remove('active');
  }
}

const sliderBtn = document.getElementById('sliderBtn');

fundsContainer.addEventListener('mouseleave', onMouseleave);

function onMouseleave() {
  fundsMenu.classList.remove('active');
}

//
// "[
//   {
//     title: 'Save the Children',
//     url:
//       'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
//     img: null,
//   },
//   {
//     title: 'Project HOPE',
//     url: 'https://www.projecthope.org/country/ukraine/',
//     img: null,
//   },
//   {
//     title: 'UNITED24',
//     url: 'https://u24.gov.ua/uk',
//     img: null,
//   },
//   {
//     title: 'International Medical Corps',
//     url: 'https://internationalmedicalcorps.org/country/ukraine/',
//     img: null,
//   },
//   {
//     title: 'Medicins Sans Frontieres',
//     url: 'https://www.msf.org/ukraine',
//     img: null,
//   },
//   {
//     title: 'RAZOM',
//     url: 'https://www.razomforukraine.org/',
//     img: null,
//   },
//   {
//     title: 'Action against hunger',
//     url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
//     img: null,
//   },
//   {
//     title: 'World vision',
//     url: 'https://www.wvi.org/emergencies/ukraine',
//     img: null,
//   },
//   {
//     title: 'Serhiy Prytula Charity Foundation',
//     url: 'https://prytulafoundation.org/en',
//     img: null,
//   },
// ]"
