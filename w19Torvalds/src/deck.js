function shuffle(array) {
    const _array = array.slice(0);
    for (let i = _array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = _array[i];
        _array[i] = _array[j];
        _array[j] = temp
    }
    return _array
}

export default function initializeDeck(numCards) {
    let id = 0;
    const cards = [
        'andromeda', 'andromeda2', 'Apollo9','Armstrong', 'Astronaut',
        'CrabNebula', 'CokuTau4', 'Earth', 'EpsilonEridani',
        'EuropaVaporPlume',
        'Galaxy', 'GasGiant',
        'hubble', 'hubble2', 'Io','ISS', 'Italy','Izanagi', 'Jupiter',
        'jupiter storm','Kepler22b', 'Kepler20e', 'Kepler20f', 'Kepler186f',
        'Lander',
        'Launch', 'magnetar', 'Mars', 'Mercury', 'Moon', 'Neptune',
        'neutron star','NorthernLights','Phobos', 'Pioneer10',
        'PlutoAndCharon', 'Pod',
        'ProximaCentauri', 'pulsar','Quasar','Rover', 'Saturn', 'Shuttle',
        'Soyuz', 'Spacewalk', 'Sun', 'TritonAndNeptune',
        'Uranus', 'Venus', 'Viking2'
    ];
    const shuffled = cards.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, numCards);

    selected = selected.reduce((acc, type) => {
      acc.push(...[{
        id: id++,
        type
      }, {
        id: id++,
        type
      }]);
      return acc
    }, []);

    return shuffle(selected)
}