# Kambista - Vue Challenge

## Tech stack
Technologies used:
- Vue 3
- Framework Nuxt 4
- Typescript
- Tailwind css library for custom styling config
- FormKit plugin for form inputs (https://formkit.com/)
- Pinia plugin for state managment

## Run project
Use node version >= 22.18.0

Make sure to install dependencies:

```bash
# Install dependencies
yarn install

# run dev mode
yarn dev

# run build mode to generate output folder
yarn build

# locally preview production build:
yarn preview
```
## Structure of project

```bash
my-project/
# Assets folder for custom styles and scss var or mixins.
----assets/
# Components folder for custom components like Header, Sidebar, etc.
----components/
# Composables folder works for common logic used into pages and handle call of services.
----composables/
# Constants folder for common vars.
----constants/
# Create the base layouts for different types of pages.
----layouts/
# Pages used for the app, suing App Router.
----pages/
# Stores, there are all state management logic.
----stores/
# Typescript declaration.
----types/
# Util logic or simple common function.
----utils/
```

## Technical decisions
- Pinia for state management
- Formkit for state, value management and structure of form's inputs
- BEM for our CSS class naming convention
- Atomic Design methodology to create small, modular, and reusable components

## Login Credentials
```bash
#Login Page:
email: yorlanespinal@gmail.com
password: 123456

Use a different email or password to trow API Error message

#Onboarding Page:
full name: [value]
document type: [value]
document number: [value]
phone number: [value]
birthdate: [value > 18 years]

Use DNI and 12345678 as document number to trow API Error - duplicated DNI

```

## To do list
#### Login Page
- Login interface ✅
- Login service: Auth store, login, logout ✅
#### Onboarding Page
- Onboarding interface ✅
- Onboarding services: update user status ✅
#### Home Page
- Home interface ✅
- Simulate Exchange services ✅
#### Transaction Page
- Complete exchange data interface ✅
- Select Bank Account and list accounts modal ❌
    - For now there is a select input instead of Bank Accounts list modal
- Create Bank Account modal ❌
    - Not implemented, currently there are some placeholder accounts for use
- Update Transaction services and stores ✅
- Detail transaction data interface ✅
- Upload receipt of transaction interface ✅
- Congrats or success transaction interface ✅

#### Extra Pages
- Transactions history page ✅
    - List all transactions
- Transaction main page ✅
    - See the full transaction detail