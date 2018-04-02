<h1 align="center">
  URL-Shortner
</h1>

<h4 align="center">Creating custom URL shortener With Nodejs</h4>
<div align="center">
  <sub>Built with ❤︎ </sub>
</div>
  
## Architecture

<img src="sketch/architecture.png" alt="architecture" />

## Technologies

- ### Back end
    - [Express](https://expressjs.com/)- Nodejs framwork for building the REST Apis
    - [Mongodb](http://mongodb.com/)-  Document oriented NoSQL database
    - [Mongoose](https://http://mongoosejs.com)- MongoDB object modeling tool
    - [Nginx](https://www.nginx.com)- Nginx is event-based and asynchronous web server.)

- ### Front end
    - [React](https://reactjs.org/) - JavaScript library for building user interfaces.
    - [Redux](https://redux.js.org/)- Predictable state container for JavaScript applications


## Getting Started
#### Clone the project
```sh
# clone it
git clone https://github.com/muhzi4u/URL-Shortner.git
cd URL-Shortner
# Make it your own
rm -rf .git && git init
```
#### Run back end

```
# Move to server folder
cd server/
# Install dependencies
yarn install

# Start  server
yarn run server
```
#### Run front end
```
# Move to client folder 
cd client/
# Install dependencies
yarn install
# Start  client
yarn run start
```

## Demo

![NSGIF](https://j.gifs.com/1rnQV0.gif)


## ☑ TODO

* [ ] Front end app
* [ ] Documentation and Blog
* [ ] Add Redis for caching
* [ ] Change Url code algorithm [https://github.com/dylang/shortid]

## License

MIT
