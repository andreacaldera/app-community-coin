
const getAssets = () =>
  Promise.resolve({
    1: { id: 1, name: 'Car', description: 'This is a car', image: '/images/assets/car.jpeg', user: { avatar: '/images/users/user1.jpg', name: 'Andrea' } },
    2: { id: 2, name: 'Hammer', description: 'Watch out for your fingers when you use this', image: '/images/assets/hammer.png', user: { avatar: '/images/users/user1.jpg', name: 'Andrea' } },
    3: { id: 3, name: 'Bike', description: 'Bikes are awesome', image: '/images/assets/penny-farthing.jpg', user: { avatar: '/images/users/user1.jpg', name: 'Andrea' } },
  });

export default Object.freeze({
  getAssets,
});
