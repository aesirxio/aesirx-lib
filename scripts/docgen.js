'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (err) => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');

const path = require('path');
const fs = require('fs-extra');
const paths = require('../config/paths');
const reactDocgen = require('react-docgen');
const componentPathAll = [
  path.join(paths.appSrc, '/Project/Project.js'),
  path.join(paths.appSrc, '/Campaign/Campaign.js'),
  path.join(paths.appSrc, '/Content/Content.js'),
  path.join(paths.appSrc, '/Member/Member.js'),
  path.join(paths.appSrc, '/Persona/Persona.js'),
];
const componentDocumentPath = paths.appDocuments;

function runDocGen() {
  componentPathAll.forEach((componentPath) => {
    try {
      fs.readFile(componentPath, (error, content) => {
        const documentationPath =
          componentDocumentPath +
          '/' +
          path.basename(componentPath, path.extname(componentPath)) +
          '.md';
        let doc = reactDocgen.parse(content);
        var md = '';
        // console.log(doc);

        if (doc !== undefined) {
          doc = Object.values(doc);
          console.log('----- DOC CONTENT ----');

          doc.forEach((element) => {
            let elementType = typeof element;

            switch (elementType) {
              case 'string':
                md += '<h1>' + element + '</h1>';
                break;
              case 'object':
                element.forEach((subElement) => {
                  if (subElement.name !== undefined) {
                    console.log(subElement);
                    const docblock = subElement.docblock;
                    const descriptionSplitted = docblock ? docblock.split('@') : [];
                    const description =
                      Array.isArray(descriptionSplitted) && descriptionSplitted.length > 0
                        ? descriptionSplitted[0]
                        : '';
                    md += '<h3>' + subElement.name + '</h3>';
                    md += '<ul>';
                    md += '<li><b>Type</b>: Method </li>';
                    md += '<li><b>Name</b>: ' + subElement.name + '</li>';
                    md += '<li><b>Description</b>: <p><i>' + description + '</i></p></li>';

                    if (subElement.params.length > 0) {
                      md += '<li><b></b>Params</b>: </li>';
                      md += '<table>';
                      md += '<thead>';
                      md += '<th>Name</th><th>Description</th><th>Type</th><th>Optional</th>';
                      md += '</thead>';
                      md += '<tbody>';
                      subElement.params.forEach((param) => {
                        md += '<tr>';
                        md += '<td>' + param.name + '</td>';
                        md += '<td>' + param.description + '</td>';
                        md += '<td>' + param.type + '</td>';
                        md += '<td>' + param.optional + '</td>';
                        md += '</tr>';
                      });
                      md += '</tbody>';
                      md += '</table>';
                    }

                    let returnType = 'Any';

                    if (subElement.returns?.type?.name !== undefined) {
                      returnType = subElement.returns.type.name;
                    }

                    let returnDescription = '';

                    if (subElement.returns?.description !== undefined) {
                      returnDescription = subElement.returns.description;
                    }

                    md +=
                      '<li><b>Returns</b>: ' + returnType + ' (' + returnDescription + ' )</li>';
                    md += '</ul>';
                  }
                });
                break;
              default:
                break;
            }
          });
        }

        fs.writeFile(documentationPath, md);
      });

      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  });
}
runDocGen();
