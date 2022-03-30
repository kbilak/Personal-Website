# Personal-Website

This repo contains all files and config of my 2nd (refreshed) Personal Website. The site will have a new layout, all my projects, contact and information about my business, and a blog.

Start of the project: 24.03.2022

## Functionalities

### Contact page

User is able to send email message to me by a contact form. Form is handled by Nodemailer.

After submitting the form, an email is sent to user's email address and to my email address, so I can respond to it.

### Blog & Projects

Admin of the page will be able to add new blog post or add new project when logged in.

In the admin panel it will be possible to add, update and remove posts and projects.

## Technologies

### Back-end

- Node.js, TypeScript
- Express.js
- Nodemailer
- MongoDB

### Front-end

- SCSS
- ejs

## To-Do

- add templates
- add styles
- add email templates

## Setup

To build the project:

```
npm run build
```

To start project in dev mode:

```
npm run dev
```

To run in production:

```
npm run start
```
