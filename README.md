# Workshop on make AI API calls
## Getting started 
### 1. Make sure you have Git and Node.js installed
Here are two sites that can help talk you through the Git download:

https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

https://github.com/git-guides/install-git

Check Git is installed by typing `git -v` OR `git --version`

And here is the download page for Node:

https://nodejs.org/en/download

---

### 2. Clone the repository
#### Option 1: in VS Code
- Open VS Code
- Open the folder you would like to store this project in
- Open up a terminal 
- Paste this in your terminal:
```
git clone https://github.com/Jaz-spec/AI-API-workshop.git
```
A folder called 'AI-API-workshop' should appear in your folder
- Close you current folder and open 'AI-API-workshop'


#### Option 2: in your terminal
- Open your computer terminal
- use `cd` and `ls` commands to navigate to the folder you'd like to store this codebase in
- Paste the following command in your terminal 
```
git clone https://github.com/Jaz-spec/AI-API-workshop.git
```
- `cd` to 'AI-API-workshop'
- write `code .` to open the folder in VS Code

---

### 3. Install Dependencies
In your terminal run
```
npm install 
```


### 4. Create a .env file
In the root of your project create a new file and call it `.env`
(root just means that it's not in any other folders)

I will send you the API key for OpenAI to paste into this file

### To test the app works
In your terminal run
```
npm run dev
```

---

## The workshop
### The Aim of this workshop:
Is to learn how to integrate AI functionality into your app by making an API call

---

### Tech stack
**Frontend:** Vanilla JavaScript

**Backend:** Node, express

### To run the project, run:
```
npm run dev
```
Click on the localhost link in the terminal

---

### Project structure

```
├── .github
├── .gitignore
├── README.md           -> workshop instructions
├── backend             
│   ├── openAi.js       -> example API call
│   ├── routes.js       -> defined API routes for your server (not the API call)
│   └── your-openAI.js  -> Where you write your API call
├── frontend
│   ├── example
│   │   ├── index.html  -> exmaple html structure
│   │   │── index.js    -> example javascript logic
│   │   └── style.css   -> example CSS styling
│   │── your-styles.css -> Where you write CSS
│   ├── your-page.html  -> Where you write HTML
│   └── your-script.js  -> Where you write JS
├── node_modules
├── package-lock.json
├── package.json
└── server.js           -> Entry point for the Node.js server
```

---

## Main task
Use the example files to create your own API call to Open AI by:
1. Creating a user input
2. Sending the user input to the backend
3. Making an API call that takes the user input an does something (be creative!) with it
4. Sending the AI response to the front end
5. Displaying the AI response on the front end

**Tip:** Make edits to the example files to see what changes, and how different elements of the codebase interact with each other. 
