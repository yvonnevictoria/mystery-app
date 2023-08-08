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