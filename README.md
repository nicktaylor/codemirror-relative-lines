# CodePen - Relative Line Numbers (Vim / CodeMirror)

## Background 

As a web developer I love using Vim, and have started using CodePen regularly. CodePen has Vim integration, which is great, it uses something called CodeMirror for that job. The issue I have is it doesn't have relative line numbers, which, for me, is a vital tool for navigating around and cutting/copying/traversing lines.

The solution is this Chrome Extension which looks for the existence of CodeMirror on the page and if it exists, it activates the relative line number script provided in 2018 in the following [feature request](https://github.com/codemirror/CodeMirror/issues/4116). It appears that the project is currently not accepting any additional features, therefore this is unlikely to ever be added, so this extension should do the trick!

__Note: This extension currently activates relative line numbers automatically on ALL CodeMirror integrations on all pages that are visited.__

## Development / Code Notes

The `background.js` code may look a little ugly, this is due to the restrictions/sandboxing that's put in place by Chrome. It can't access objects created by the website, this is for security reasons and makes complete sense. The script to apply the changes therefore has to be injected onto the page as a script tag itself. From a bit of research, this still prevents the extension you create from being able to harvest any information from the site via objects/functions, and only from the DOM itself. This is completely understandable and there is no requirement for this extension to be able to do that.

## Future Development Ideas

- Create as a new gutter, rather than adapting line number gutter, for greater control.
- Allow the plugin to be turned off on a per site basis.
- Provide ability to choose whether to have line numbers and relative numbers, or just one or the other.