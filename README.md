# Tor Dev Portal

The [Tor Dev Portal](https://docs.torproject.org) is built using the [Hugo](https://gohugo.io) Static Site Generator.
To edit the website locally, we have to install Hugo Extended version and a text editor.

## How to install

The actual setup use `npm` to provide all the libraries you need to develop the website and Hugo itself.

### Installing node / npm

Debian: `apt install nodejs`
arch: `pacman -S nodejs`
On mac using homebrew: `brew install node`

### Installing hugo and other dependencies

Once node is installed, you can install the dependencies with the following command `npm install`.

To run the application locally you can run `nom run server`

## Local testing

To run a local version of the website, we have to run the following command inside the root path of the website.

`npm run server -- --environment production`

The `--environment` argument is necessary for us to be able to render the content in the same way that the public version would come out to be.

With this we're ready to start editing the files.

## Docs

For further changes and customization, refer to the [Hugo docs](https://gohugo.io/documentation/).
