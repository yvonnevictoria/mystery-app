# Notes

## 110723
- run relay `yarn run relay --watch`
- docker-compose broken so unable to test app. relay set up.

## 210623
Next task:
- get relay running

## 260723
- Make more meals & return some images
- Use preloaded queries to kick off query when javascript module has loaded. Allows query to come back while React is being rendered: usePreloadedQuery() instead of useLazyLoadedQuery().
	- Would usually be integrated into routing library (e.g. react-resource-router) in plugin file

## 090823
- Download schema from graphql gateway - uses a command to download the schema. Pulls the server schema.
- Would involve devs writing a script. Are there frameworks for this?
- Relay config file has path that points to the schema. If you have a colated be and fe, you could point directly to the schema file.

- Architecture plan
	- need pagination to keep the experience going. // Do we want to start with 10 meals and have a final meal?
	- Meal, MealOptions (store current meal in react state? || storage api for local storage)
		- Leave 10 meals in relay state and retrieve next one when one selected



- Avoid local storage in big apps when you can - we use SSR to try and improve performance 
	- Server does initial render, returns to client, js hydrates. 
	- BE wouldn't have access to local storage
	- Take a look at this in 2 weeks ****
	- Client side storage makes it hard to use server side rendering properly
	- Good to have a mental model of how this works + conceptual model
	- If you wanted to persist data in a scalable performant app e.g. form data - store it on the backend. Browser storage can be difficult, storage limits, doesn't work well with SSR. Store in the db and delete once the form is sent.
	- Is react state useful? 
		- Is used for "pure ui state" e.g. modal open, sidebar open - keeping them in the url is also a good idea.
		- Is useful for intermediate state e.g. "save progress" button would send this to db, while react state would house current "live" state. 
			- With forms specifically, you can allow the native browser dom to track this rather than react

- Custom hooks
	- more common to use framework hooks rather than data fetching with useEffect()
	- useState(), useReducer(), useRef() is used a lot
