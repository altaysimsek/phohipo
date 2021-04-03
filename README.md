
# 🚀 Phohipo | Unsplash Client
It's a custom client for unsplash also case from Hipo labs. I thought this project like a product while I'm developing this project so I tried to re-design this project with colors of hipo and I give a name "Phohipo" comes from photo, hipo.
![phohipo banner](https://i.imgur.com/CCcvTAM.png)

## Features
- You can search photos by collection or topic. There are three situations while searching :
	- Only collection, you can search selected collection photos by just selecting a collection from dropdown.
	- Only keyword, you can search for photos by keyword just typing to inputbox.
	- Both, you can search for photos by keyword in selected collection.
-  If you like any photos by clicking the button on it, you can list your favorite photos in favorite page.
- You can explore different photos on explore pages.
- Custom dropdown component only for needs :)
- Explore pages have a infinity scroll and search pages have a pagination (they both is a package).
- Little bit responsive.

## ⚠️Warning
All the fetches have a timeout because of the api limit.
I can't use the router's hook on header component because the router doesn't wrap my header component.


## Getting Started

**You need to create a .env.local file before the run.  You can find a sample (.env.sample) on directory**

```bash
npm install
npm run start
```

