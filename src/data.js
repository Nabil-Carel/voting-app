import danielAvatar from "./images/avatars/daniel.jpg";
import product1Pic from './images/products/image-aqua.png';
import kristyAvatar from  './images/avatars/kristy.png';
import product2Pic from './images/products/image-rose.png';
import veronikaAvatar from './images/avatars/veronika.jpg';
import product3Pic from './images/products/image-steel.png';
import mollyAvatar from './images/avatars/molly.png';
import productPic4 from './images/products/image-yellow.png';

  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const data = [
    {
      id: 1,
      title: 'Yellow Pail',
      description: 'On-demand sand castle construction expertise.',
      url: '#',
      votes: generateVoteCount(),
      submitter_avatar_url: danielAvatar,
      product_image_url: product1Pic,
    },
    {
      id: 2,
      title: 'Supermajority: The Fantasy Congress League',
      description: 'Earn points when your favorite politicians pass legislation.',
      url: '#',
      votes: generateVoteCount(),
      submitter_avatar_url:kristyAvatar,
      product_image_url: product2Pic,
    },
    {
      id: 3,
      title: 'Tinfoild: Tailored tinfoil hats',
      description: 'We already have your measurements and shipping address.',
      url: '#',
      votes: generateVoteCount(),
      submitter_avatar_url: veronikaAvatar,
      product_image_url: product3Pic,
    },
    {
      id: 4,
      title: 'Haught or Naught',
      description: 'High-minded or absent-minded? You decide.',
      url: '#',
      votes: generateVoteCount(),
      submitter_avatar_url:mollyAvatar ,
      product_image_url: productPic4,
    },
  ];

  export {data};
