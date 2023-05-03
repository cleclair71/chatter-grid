  ![GitHub license](https://img.shields.io/badge/license-MIT-pink.svg)
  <a name="readme-top"></a>
 <br />
 <div align="center">
 <h1 align="center">ChatterGrid</h1>
    <a href="https://github.com/cleclair71/chatter-grid">
     <img src="/assets/chattergrid.jpg" alt="Logo" height="200">
   </a>
    <p align="center">
      Connect, Share, and Engage
    </p>
  
<br />
<details><summary>Table of Contents;</summary>

* [About the Project](#description) 

* [Added Features](#features)

* [Installation](#installation) 
 
* [Usage](#usage) 

* [Contributing](#contributing)
 
* [license](#license)

* [Questions](#questions)

</details>
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a name="description"></a>
## :rocket: About The Project
<p align="center">
  <img src="/assets/screen.JPG"/>
</p>
ChatterGrid is a social media platform that allows users to share their thoughts, react to other thoughts, and engage with each other in a fast and efficient way. The platform is built using Node.js, Express.js, and MongoDB, which ensures a seamless and high-performance experience for users.

ChatterGrid provides a space for users to create, edit, and delete thoughts, as well as add reactions to thoughts created by other users. The application is designed with scalability in mind, and can easily accommodate a growing user base. The RESTful API follows best practices for structuring routes and controllers, making it easy to understand and maintain.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<a name="features"></a>

## :star: Features

 - Create, update, and delete thoughts
 - Add and remove reactions to thoughts
 - View all thoughts or a single thought by its ID
 - Efficient data storage and retrieval using MongoDB
 - Express.js for server-side logic and routing
 - Robust error handling and validations

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a name="installation"></a>

## :hammer_and_wrench: Installation

1. Clone the repository 

```bash
git clone https://github.com/cleclair71/chatter-grid.git
```
2. Change the Working Directory

```bash
cd chatter-grid
```
3. Install dependencies

```bash
npm i
```
4. Set up your MongoDB instance. You can either use a local MongoDB installation or a cloud-based MongoDB Atlas cluster.

5. Run the App

```bash
\chatter-grid> npm start
```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

  <a name="usage"></a>

## :computer: Usage

* [Walkthrough Video](https://drive.google.com/file/d/1zaKG9lI1QHlTwZbMzPDv08MquPbT-r14/view)

ChatterGrid exposes a RESTful API that allows users to perform various actions, such as creating thoughts and adding reactions. To interact with the API, you can use tools like Insomnia.

Here are some example API endpoints:

- GET /api/thoughts: Fetches all thoughts
- GET /api/thoughts/:thoughtId: Fetches a single thought by its ID
- POST /api/thoughts: Creates a new thought
- PUT /api/thoughts/:thoughtId: Updates a thought by its ID
- DELETE /api/thoughts/:thoughtId: Deletes a thought by its ID
- POST /api/thoughts/:thoughtId/reactions: Adds a reaction to a thought
- DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Deletes a reaction from a thought

For a complete list of available endpoints, refer to the project's routes directory.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
  

 <a name="contributing"></a>

## :handshake: Contributing

Thank you for your interest in contributing to this project! By contributing, you can help make this project even better for everyone.

### How to Contribute

If you would like to contribute to this project, please follow these steps:
      
1. **Fork the Project:** Fork this project to your own GitHub account.

2. **Create your Feature Branch:** Create a branch for your feature using:
```bash 
git checkout -b your-branch-name.
```
3. **Commit your Changes:** Commit your changes using:
```bash 
git commit -m "Your commit message here"
```
4. **Push to the Branch:** Push your changes to the branch using:
```bash 
git push origin your-branch-name
```
5. **Open a Pull Request:** Open a pull request to merge your changes into the main branch of the original project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<a name="license"></a>

## :clipboard: License
MIT
  
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a name="questions"></a>

## :mailbox_with_no_mail: Questions?

If you have any questions about this project, please don't hesitate to reach out to me. I'm always happy to help and provide additional information.

### How to Ask a Question

1. **Check the existing documentation:** Before asking a question, please take a moment to review the existing documentation. Your question may already be answered in the README file or other project documentation.

2. **Create a new issue:** If you can't find the answer to your question in the documentation, please create a new issue in the project's issue tracker. Be sure to provide as much detail as possible about your question, including any relevant code snippets or screenshots.

3. **Contact cleclair71 directly:** If you prefer to contact me directly, you can do so by sending me an email at cassieleclair71@gmail.com. Please include "Question about README Generator" in the subject line so that I can quickly identify your message.
   
### :pray: Feedback and Suggestions

I welcome feedback and suggestions for this project. If you have ideas for how to improve the project, please feel free to create a new issue or contact me directly. Your input is greatly appreciated!
 
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
 
