function generateMarkdown (data, imgURL) {
    return `
<h1 align="center">${data.Title}</h1>
<p align="center" margin="50px">
    <a>
    <img src="https://img.shields.io/badge/Creator-KSingh-orange"/>
    </a>
</p>

## Title
${data.Title}

## Description
${data.Description}

## Table of Contents
* *[Title](#title)*
* *[Description](#description)*
* *[Usage](#usage)*
* *[License](#license)*
* *[Contributors](#contributors)*
* *[Tests](#tests)*
* *[Questions](#questions)*


## Installation
To Install necessary dependencies, run the command:
\`\`\`sh
${data.Install}
\`\`\`

## Usage
To use the ReadME Generator, run the command:
\`\`\`sh
${data.Usage}
\`\`\`

## License
This Project is Licenced with the ${data.License} License.


## Contributors
Contributed in part by:
${data.Contributors}

## Tests
To run a test run the command:
\`\`\`
${data.Test}
\`\`\`

## Contact
${data.Email}


## *Questions*
<img src="${imgURL}" alt="avatar" style="border-radius: 15px" width="60"/>

If you have any questions about the repo contact me on GitHub at (https://github.com/${data.Username}/${data.Title})
or reach me directly at <${data.Email}>.
`;
}
module.exports = generateMarkdown;

