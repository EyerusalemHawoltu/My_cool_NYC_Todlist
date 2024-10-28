# To-Do List with Distance Calculation

A React-based to-do list application that allows users to add tasks with location information. This app calculates the distance and duration from the user's current location to a selected destination using the OpenRouteService API.

## Features

- Add, edit, and delete tasks
- Select a library from a dropdown menu to set as the task's destination
- Calculate and display distance and duration from the user's current location to the selected destination
- Placeholder tasks are displayed with faded styling when there are no user-defined tasks

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- An OpenRouteService API key (sign up at [OpenRouteService](https://openrouteservice.org/sign-up/) if you don’t have one)

### Installation

1. Clone the repository:

  -  git clone https://github.com/EyerusalemHawoltu/My_cool_NYC_Todlist.git

2. cd your-repository-name
3. Install react-icons (used for the edit and delete icons):
    - npm install react-icons
4. Create a .env file in the root directory and add your OpenRouteService API key:
    - REACT_APP_OPENROUTESERVICE_API_KEY=your_api_key_here
## Running the App

To start the application in development mode, run:

```bash
    - npm start
This will open the app in your default browser at [http://localhost:3000](http://localhost:3000).

## Usage

- **Add a Task**: Click on the "Add Task" button to open the task form. Fill in the details and select a destination (library) from the dropdown.
- **Calculate Distance**: Upon adding a task, the app will automatically calculate and display the distance and estimated duration from your current location to the selected library.
- **Edit or Delete Tasks**: Click the edit or delete icons next to each task to modify or remove it.

### Libraries Dropdown

The dropdown menu includes several libraries with their coordinates preset. You can choose a library, and the application will calculate the distance from your current location.

### Placeholder Tasks

When no user-defined tasks are present, placeholder tasks will be displayed in a faded style to provide an example of how tasks will appear.

## Project Structure

```plaintext
src/
├── components/
│   ├── App.js               # Main application component
│   ├── Todolist.js          # Component to display tasks with distance
│   ├── TodolistForm.js      # Form component for adding/editing tasks
│   └── LibraryDropdown.js   # Dropdown component for selecting a library
├── hooks/
│   └── useLocalStorage.js   # Custom hook to store tasks in local storage
└── index.js                 # Entry point for the React application
## Technologies Used

- **React**: Frontend library
- **OpenRouteService API**: For calculating distances and durations
- **CSS**: Inline styling for UI components
- **react-icons**: Icon library used for the edit and delete buttons

## Environment Variables

This project requires an API key for OpenRouteService, which should be stored in a `.env` file:

```plaintext
REACT_APP_OPENROUTESERVICE_API_KEY=your_api_key_here

Dependencies
To install all dependencies and set up the project, run:
 -npm install

This will install all required packages and create a node_modules folder.

Troubleshooting
CORS Issues: If you encounter CORS errors, ensure that the API key is correct, and that the API allows requests from localhost.
Location Permissions: The app uses the browser’s geolocation API. Make sure to grant location permissions for the app to function correctly.

Chatgpt was used for changing some codes from typescript to javascrpit, trouble shooting and all css was done with chatgpt


