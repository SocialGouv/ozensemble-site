## Getting Started

1. Clone the repo locally:

```bash
git clone https://github.com/SocialGouv/ozensemble-site.git
```

2. Set up backend dependencies:

```bash
cd ozensemble-site
cd api
yarn
```

3. Set up environment variables:

```bash
cp .env.example .env
```

4. Start your project by running the following command:

```bash
  yarn build
  yarn develop
```

Create your first admin user.

![admin-user](https://user-images.githubusercontent.com/6153188/231865420-5f03a90f-b893-4057-9634-9632920a7d97.gif)

## Seeding the Data

At the root of our project, we have our `seed-data.tar` file. We will use it to update the schema for our Strapi app.

3. Import data into your strapi's database:

```bash
yarn strapi import -f ../seed-data.tar.gz
```

Answer `y` to `The import will delete all assets and data in your database. Are you sure you want to proceed? (y/N)`

4. After a successful import, rerun your Strapi server.

```bash
yarn develop
```

In your browser, log in to your admin panel. You should see the newly imported `content` and `collection types`.

![after-import](https://user-images.githubusercontent.com/6153188/231865491-05cb5818-a0d0-49ce-807e-a879f7e3070c.gif)

## Frontend Setup

1. Open up a new terminal session and navigate into your `next-app` folder. Set up frontend dependencies:

```bash
cd next-app
yarn
```

2. Create `.env` file:

```bash
touch .env
```

3. Paste in the following.

```yaml
NEXT_PUBLIC_STRAPI_API_TOKEN=your-api-token
NEXT_PUBLIC_STRAPI_API_URL=http://127.0.0.1:1337
```

4. Before starting our Next JS app we need to go inside our Strapi Admin and create a token that we will be using for displaying our **content**.

Inside your Strapi Admin Panel navigate to `Settings` -> `API Tokens` and click on the `Create new API Token`.

![api-tokens](https://user-images.githubusercontent.com/6153188/231865572-cebc5538-374c-4050-91cd-c303fae25a3d.png)

Here are our Token Settings

Name: Public API Token Content
Description: Access to public content.
Token duration: Unlimited
Token type: Custom

In Permissions let's give the following access.

| Content  |   Permissions    |
| -------- | :--------------: |
| Article  | find and findOne |
| Author   | find and findOne |
| Category | find and findOne |
| Page     | find and findOne |

![permissions](https://user-images.githubusercontent.com/6153188/231865625-a3634d89-0f40-4a6d-a356-8f654abd88b9.gif)

Once you have your token add it to your `NEXT_PUBLIC_STRAPI_API_TOKEN` variable name in the `.env` file.

5. Start your frontend

```bash
yarn dev
```

## Additiona Resources

- Strapi sitemap plugin:
  https://market.strapi.io/plugins/strapi-plugin-sitemap

- Starpi demo account (Rich application that shows cases how much customization you can have with starpi ): https://strapi.io/demo
