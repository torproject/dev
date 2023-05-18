# Tor Dev Docs

To build the website, first we have to install npm/nodeJS and Hugo extended version.
Afterwards, we have to run the `npm install` command, which will install a postcss package required to purge CSS.

The last step is to change the baseURL in the `config.toml` file to our final URL, and run the `hugo` command. This will create a  `public` folder which contains the static generated files. We have to move these files in the public-facing folder inside our server and serve it with the webserver of choice, `apache`, `nginx` or whatever you like.