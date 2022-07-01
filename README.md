![img1](https://i.ibb.co/3vFcfsF/Screenshot-2022-04-01-at-20-54-55-Krzysztof-Bia-k.png)
![img2](https://i.ibb.co/DG1CL3d/Screenshot-2022-04-01-at-20-55-04-Krzysztof-Bia-k.png)

# Personal Website

This repo contains all files and config of my 2nd (refreshed) Personal Website. The site will have a new layout, all my projects, contact and information about my business, and a blog.

Start of the project: 24.03.2022

First version of the project: 02.04.2022

NOTE: this readme describes what final product will look like

## Functionalities

### Contact page

User is able to send email message to me by a contact form. Form is handled by Nodemailer.

After submitting the form, an email is sent to user's email address and to my email address, so I can respond to it.

### Blog & Projects

Admin of the page will be able to add new blog post or add new project when logged in.

In the admin panel it will be possible to add, update and remove posts and projects.

### Newsletter

User can subscribe to newsletter via the newsletter form.

Newsletters are sent via the admin panel.

User can opt out of receiving the newsletter.

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
- add user tokens (newsletter)
- setup tests
- add dark mode

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
