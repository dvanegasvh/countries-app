<h1 align="center">
	Countries app challenge
</h1>
<p align="center">
   Deployed here: <a href="https://countries-85cxqlzya-davvidsd.vercel.app" target="_blank">countries-85cxqlzya-davvidsd.vercel.app</a> built with <a href="https://nextjs.org/" target="_blank">NextJS</a> and hosted with <a href="https://vercel.com/" target="_blank">Vercel</a>


# Introduction
Bia project challenge about countries where you can find any country and view its details in an easy way additional features like an own API and dark mode built with TypeScript stack.
 **Deployed here:** <a href="https://countries-85cxqlzya-davvidsd.vercel.app" target="_blank">countries-85cxqlzya-davvidsd.vercel.app</a> 

# Technologies
- TypeScript
- NextJS
- NodeJS
- Express
- TailwindCSS
- Redux Toolkit

# Features
| Feature  | Done  |
| ------------ | ------------ |
| Own API  |✅ |
| Dark Mode  |✅|
| Search by country |✅|
| Search by country / region  | ✅ |

# Architecture and organization
### Project
I wanted to use a frontend architecture based on Clean Architecture and try to use the SOLID Principle especially the Simple Responsibility because I really like to have the whole application componetized and try not to use global files when it is not necessary besides not having functions with a lot of things to do I also prefer to extract the logic of the components out of it, for that I used custom hooks.

### Version control
For this case I selected a monrepo to host all the code of both the frontend and the backend, separating them into two independent folders.

# Why did I create an api?
Firstly because I find the code cleaner from the frontend, also I can have all the data ready to use and also because I like the backend ⭐

# Somethings to improve
- Better error handling
- Implement cache in the API to improve the request time
- Implement strong CI/CD
- Compositeize much more the css in tailwind
## 🛠 Installation & Set Up

1. Install dependencies from proyect root
   ```sh
   cd frontend-app
   npm install
   ```
      ```sh
   cd backend-app
   npm install
   ```

3. Run local project

   ```sh
   cd frontend-app
   npm run dev
   ```
      ```sh
   cd backend-app
   npm run dev
   ```


# Resources

<img width="1777" alt="Screenshot 2023-08-09 at 11 49 23 PM" src="https://github.com/dvanegasvh/countries-app/assets/111206893/eb1b18a6-fca0-407e-8274-340ee8ceb4d9">
<img width="1774" alt="Screenshot 2023-08-09 at 11 49 02 PM" src="https://github.com/dvanegasvh/countries-app/assets/111206893/737ed165-6c51-460a-9e24-3d91b18b9ef8">
