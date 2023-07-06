This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


Here is an updated version of the project description, including the mentioned technologies and key elements:

**Project Description**

This project is a simplified version of IMDb, allowing users to browse a list of popular movies and access information such as summaries, cast members, directors, budgets, and more. The website features a search box for movie searches, and when a movie is clicked, users are redirected to a new page displaying detailed information about that movie.

**Technologies Used**

- Next.js 13 (TypeScript)
- React
- React-Query
- Styled Components
- ESLint

**Homepage**

- Header: Includes a logo and a search box for movie searches.
- Hero Section: Displays the image of the first movie in the list.
- Lists of All Movies: Provides a collection of popular movies for users to browse.



**Movie Information Page**

- Breadcrumb: Provides a navigation trail allowing users to track their location within the website's hierarchy.
- Movie Information: Presents detailed information about the selected movie, including summaries, cast members, directors, budgets, and more.
- Cast List: Displays a list of actors and actresses involved in the movie.

Data Fetching: Movie data on the homepage is fetched on the client side using React-Query. Data is loaded when the user reaches the bottom of the page, and a spinner is displayed during the loading process. There is also an image blur effect. 



## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
