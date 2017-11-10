const { name, description } = require('./package.json');

module.exports = {
    title: name,
    nav: {
        Docs: './code/index.html'
    },
    body: `
      <div style="width:80%;position: absolute;left: 50%;top: 50%;-webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%);">
        <h1> ${name} </h1>
        <h3 class="text-center" style="font-weight: 100"> ${description} </h3>
        <a href="https://github.com/gabrielcsapo/node-chat-rooms" class="btn">
          Source
        </a>
      </div>
    `,
    options: {
        width: '80%'
    },
    output: './docs',
    footer: `
       <div class="text-black">Made with ☕️ by <a href="http://www.gabrielcsapo.com">@gabrielcsapo</a></div>
    `
};
