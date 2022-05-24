# Phone Catalog by Pau Rodríguez

![](https://img.shields.io/github/deployments/Silinde87/phone-catalog/production?label=Vercel&logo=Vercel&logoColor=white)
![](https://img.shields.io/w3c-validation/html?targetUrl=https://phone-catalog-sandy.vercel.app/)

This React application is a catalog where you can find a collection of more than 1000 phone.
These phones can be visualized thanks to an [API developed for this application](https://github.com/Silinde87/phone-catalog-API).

You can search for phones through the search engine, as well as **edit and delete existing ones, and also create** new models.

I have developed this application using atomic design and test driven development. All components have been tested with **unit tests** and the application has several **e2e tests** to corroborate its robustness.

I also make use of **github actions to run a pipeline** that automates the checking of the tests, and the different rules applied during the build.

The template [create-boilerplate-react](https://www.npmjs.com/package/create-boilerplate-react), also developed by me, was used to start this project.

## How it looks

🔗 [Live Demo](https://phone-catalog-sandy.vercel.app/)

## Quick Start

```
git clone https://github.com/Silinde87/phone-catalog.git
cd phone-catalog
yarn install
yarn start
```

_To assure a correct installation, it is recommended to use a node version higher than v16.13.2_

## Available scripts in the application

### yarn install

> **Install app dependencies**

### yarn start

> **Runs the app** in the development mode. Open http://localhost:3000 to view it in the browser.

### yarn test

> **Launches the unit test runner** (Jest/RTL) in the interactive watch mode.

### yarn cy:open

> **Launches the e2e test runner** (Cypress) in interactive watch mode.

### yarn build

> **Generates a build version ready for deploy**.

---

## Stack

| Package                         | Version |
| ------------------------------- | ------- |
| React & react-dom               | 18.0.0  |
| styled-components               | 5.3.5   |
| react-infinite-scroll-component | 6.1.0   |
| jest/testing-library            | 5.16.4  |
| cypress                         | 9.5.4   |
| eslint                          | 8.13.0  |
| prettier                        | 2.6.2   |
| prop-types                      | 15.8.1  |

## Output

```
.
├── README.md
├── package.json
├── jest-setup.ts
├── jest.config.js
├── cypress.json
├── .gitignore
├── .eslintrc.js
├── .prettierrc
├── public                  # Assets
├── cypress                 # Cypress configurations and utils
└── src                     # React App folder
    ├── components          # All the components of the application
    │   ├── atoms           # The smallest components
    │   └── molecules       # A combination of atoms components
    ├── context             # The React context for this app.
    ├── globals             # Shared files such as utils or constants
    ├── shared              # Shared utilites and files such as utils or rules
    ├── routes              # The layouts or routes
    ├── services            # The controllers that manage the communication with API
    ├── fonts.css
    ├── GlobalStyles.ts
    ├── index.ts
    └── setupTests.js
```

---

## Author

👤 **Pau Rodríguez**

- Website: https://www.linkedin.com/in/paurodriguezmolina/
- Github: [@Silinde87](https://github.com/Silinde87)
- LinkedIn: [@paurodriguezmolina](https://linkedin.com/in/paurodriguezmolina)
- Twitter: [@Silinde87](https://twitter.com/Silinde87)

## License

[GNU General Public License](https://opensource.org/licenses/gpl-license)
