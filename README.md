# Summer Hunters 2022 - Developer Assignment

## About

For this assignment I focused on the frontend aspect of the app and although extra improvements can be made, this is a functional app.

## Features

- [x] Porcu's picture according to him being a baby, grown-up or dead
- [x] Porcu's stats change as time goes by
- [x] Alerts are displayed as porcu gets hungry or sleepy
- [x] Actions can be performed in order to improve Porcu's stats and health

## Upcoming Features

- [ ] A screen to show detailed information about Porcu's (age, hunger, energy, happiness and health);

## Demo

<a href="https://gyazo.com/848567123265418778569b7be4720dda"><img src="https://i.gyazo.com/848567123265418778569b7be4720dda.gif" alt="Image from Gyazo"><img href="https://gyazo.com/848567123265418778569b7be4720dda"><img src="https://i.gyazo.com/848567123265418778569b7be4720dda.gif" alt="Image from Gyazo" alt="Gif showing the app start-up" width="240"/></a>&nbsp; &nbsp; &nbsp;
<a href="https://gyazo.com/2ce8f6ffe056b5999906ee50219ef922"><img src="https://i.gyazo.com/2ce8f6ffe056b5999906ee50219ef922.gif" alt="Image from Gyazo" /><img href="https://gyazo.com/2ce8f6ffe056b5999906ee50219ef922"><img src="https://i.gyazo.com/2ce8f6ffe056b5999906ee50219ef922.gif" alt="Image from Gyazo" alt="Gif showing the activities Porcu can do to improve his stats and health" width="240"/></a>&nbsp; &nbsp; &nbsp;
<a href="https://gyazo.com/d0ea2dfa6428c5bd322ba5752026e1b4"><img src="https://i.gyazo.com/d0ea2dfa6428c5bd322ba5752026e1b4.gif" alt="Image from Gyazo"><img href="https://gyazo.com/d0ea2dfa6428c5bd322ba5752026e1b4"><img src="https://i.gyazo.com/d0ea2dfa6428c5bd322ba5752026e1b4.gif" alt="Image from Gyazo" alt="Gif showing what happens when Porcu's health goes to 0" width="240"/></a></pre>
</br>

## Homework assignment

Welcome to Summer Hunters 2022 assignment phase!

Within this assignment you are tasked to create your own Tamagotchi, or in this case Porcugotchi! Porcu is a fantastic fish -like creature who loves to play and eat.

We don't expect you to use more than 8 hours doing this. If you get stuck, try doing something else. If you want, you can focus on the frontend or backend. Just remember to highlight your strengths with what you choose to do!

### Tasks:

#### Frontend

- You are provided with a Porcugotchi frame and a set of assets. Using these assets (and / or different assets if you want to) implement basic functionality for Porcugotchi. Here are some examples of what that could be:
  - Eating, affects happiness, energy and health stats
  - Playing, affects happiness and energy stats
  - Sleeping, affects energy
  - ... or whatever you want!
- Put thought into the user interface. Think about how your design supports the game elements. How would the player put Porcu to sleep, and what happens when they do it? What do you show the user when it's sleeping?
- Implement a deterioration function, that you can use to reduce these stats over time. For example all creatures have Base Metabolic Rate, and when we run out of fuel it starts to affect our health.

#### Backend / full-stack

- You are given a "hello world" with GraphQL and sqlite3. Implement some sort of functionality with these, for example:
  - Improve the api to fit the frontend use better
  - Save game state via GraphQL to database
  - Load game state and allow resuming your companionship with Porcu

### Notes

Return the exercize as a git repository. If you want to return it as a private repository, give access to `julesvirallinen`.

Try to keep the following things in mind

- Your code should fit the coding style of the base project
- If something is not done well in the base project you can improve it
- Pay attention to your commits and keep the messages clean
- Have fun with it!

## Get started

To install or activate required dependencies, run following commands

You will need to install [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) and [yarn](https://classic.yarnpkg.com/lang/en/docs/install)

### (N)ode (V)ersion (M)anager

`nvm use`

### Yarn

`yarn`

#

## Start projects

Server:
`yarn workspace server start`

UI:
`yarn workspace ui start`

### Yarn workspace

This project uses yarn 2's workspace to ease out usage of monorepo structure

https://en.wikipedia.org/wiki/Monorepo

CLI usage (e.g. how to run commands from root to specific projects)

https://yarnpkg.com/cli/workspace

### Good to know

You are provided with a project base, which contains two packages - `ui` and `server`.

Server package is using sqlite3 for assignment ease, we don't necessarily recommend using this in production use.

#### Server -package

- Relevant used dependencies: typescript, express, express-graphql, sqlite3

#### UI -package

- Relevant used dependencies: typescript, react, styled-components and urql (graphql library)
- Development and build environment: vitejs.dev
