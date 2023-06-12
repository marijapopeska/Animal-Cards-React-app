![Animal card](https://github.com/marijapopeska/Animal-Cards-React-app/assets/108872423/4fbd199a-5660-4d34-94ff-5244ce10c6e1)

## The Animal Info App

* The Animal Info App is a React-based web application designed to provide users with a comprehensive collection of information about different animals. It offers an interactive and engaging platform for exploring various species and learning about their characteristics, diets, and additional details.

* The app's main feature is the animal card display, where a curated list of animals is showcased. Each animal card presents essential information, including the animal's name, size, scientific name, and diet. The diet information is represented using emoji icons, making it visually appealing and accessible to users of all ages.

* To provide users with a comprehensive understanding of each animal, the app also includes an additional information section. Here, users can explore further details such as external links, notes, and any other relevant information associated with the animal. This additional information enhances the learning experience and allows users to delve deeper into specific species that interest them.

* This app provides an engaging and informative experience that is sure to captivate users and satisfy their curiosity.

## About the Components

* The App component serves as the main entry point of the application. It renders a wrapper div containing the heading "Animals" and a mapping of the data array. For each animal in the data array, it renders an AnimalCard component with the respective animal's information passed as props.

* The AnimalCard component is responsible for rendering an individual animal card. It receives props such as name, size, additional, diet, and scientificName. It displays the name and size of the animal and also includes the AnimalDetails component to show the scientific name and diet of the animal. Additionally, it renders any additional information passed through the additional prop.

* The AnimalDetails component is a simple component that displays the scientific name and diet of an animal. The diet prop is an array of strings representing the food the animal consumes. It uses the convertFood function to convert each food item into an appropriate emoji representation.
