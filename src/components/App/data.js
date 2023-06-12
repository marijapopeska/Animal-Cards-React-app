
const animals = [
    {
        id: 1,
        name: 'Lion',
        scientificName: 'Panthera leo',
        size: 190,
        diet: ['meat']
    },
    {
        name: 'Gorilla',
        scientificName: 'Gorilla beringei',
        size: 205,
        diet: ['plants', 'insects'],
        additional: {
            notes: ' This is the eastern gorilla. There is also a west that is a different species.'
        }
    },
    {
        id: 2,
        name: 'Zebra',
        scientificName: 'Equus quagga',
        size: 322,
        diet: ['plants'],
        additional: {
            notes: 'There are three different species of zebra.',
            link: 'https://en.wikipedia.org/wiki/Zebra'
        }
    },
    {
        id: 3,
        name: 'Penguin',
        scientificName: 'Spheniscidae',
        size: 70,
        diet: ['fish', 'krill'],
        additional: {
            notes: 'Penguins are flightless birds that live in the Southern Hemisphere.',
            link: 'https://en.wikipedia.org/wiki/Penguin'
        }
    },
    {
        id: 4,
        name: 'Koala',
        scientificName: 'Phascolarctos cinereus',
        size: 60,
        diet: ['eucalyptus leaves'],
        additional: {
            notes: 'Koalas are marsupials that are found in eastern Australia.',
            link: 'https://en.wikipedia.org/wiki/Koala'
        }
    },
    {
        id: 5,
        name: 'Greater Flamingo',
        scientificName: 'Phoenicopterus roseus',
        size: 120,
        diet: ['insects', 'shrimp', 'algae'],
        additional: {
            notes: 'Greater flamingos are known for their pink coloration, which comes from the pigments in their food.',
            link: 'https://en.wikipedia.org/wiki/Greater_flamingo'
        }
    }

]

export default animals;
