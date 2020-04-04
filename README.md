## General info

Gradle multimodule project with spring-boot backend and react as fronend
* The spring boot backend is created with spring initializr
* The react frontend witht he create react app 

## build info

### general idea
Frontend webapp is packaged in a jar in the '/public' folder
This folder is by default served as static resource in spring boot web
This way you can just depend on the frontend from a springbootweb project and
your react app will be served

### build steps
#### frontend
* download and install npm and node package manager
* build the react app
* finally this react app will be packaged in a jar file in the '/public' folder

### backend
* nothing special here, key part here is the dependency to the frontend project

## Run in development

### backend
 Nothing special here, just spring boot project. Run the main class or use the bootRun gradle task.
 Runs on port 8080
 
### frontend
 go in frontend project and use `yarn start`. This will run the react app on port 3000. 
 This is more workable for development on frontend then repacking the entire app everytime.
 Also has code reload etc...
 Caveat: because your on port 3000 you can have CORS issues when contacting backen on port 8080
 Therefore a proxy is configured (using http-proxy-middleware) in the setupProxy.js
 It is configured to proxy all requests starting with '/api' localhost:8080.
 --> so all backend calls must use this /api prefix, or proxyconfig must be extended