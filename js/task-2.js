const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url: 'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url: 'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];
const gallery = document.querySelector('.gallery');
gallery.style.display = 'flex';
gallery.style.width = '1440px';
gallery.style.height = '848px';
gallery.style.margin = '0';
gallery.style.padding = '100px 156px';
gallery.style.flexWrap = 'wrap';
gallery.style.justifyContent = 'center';
gallery.style.alignItems = 'flex-start';
gallery.style.columnGap = '24px';
gallery.style.rowGap = '48px';
const everyBody = document.querySelector('body');
everyBody.style.display = 'inline-flex';
everyBody.style.padding = '24px';
everyBody.style.flexDirection = 'column';
everyBody.style.alignItems = 'flex-start';
everyBody.style.gap = '16px';
everyBody.style.borderRadius = '8px';
everyBody.style.background = '#FFF';
gallery.insertAdjacentHTML(
  'afterbegin',
  images
    .map(
      a => `<li type="none">
<img src="${a.url}" alt="${a.alt}"  style="display: flex; width: 360px; height: 300px; object-fit: cover; margin: 0; padding: 0;" /></li>`
    )
    .join('')
);
