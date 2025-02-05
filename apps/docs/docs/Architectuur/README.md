# How to colloborate on documents on both Github as well as Office365

Architecture documents in this folder are maintained in the form of Github Flavoured Markdown (.md) files (along with plantUML diagramming) which are usable within the Docusaurus environment of regels.overheid.nl. Stakeholders with Github accounts and experience could work through github, but this does not work for all Stakeholders for whom collaboration on Microsoft Word (.docx) documents is the primary way of doing things.

By using pandoc it is possible to convert Markdown documents (with separately locally stored images) to standalone Word documents and vice versa even using a Word template to add extra styling and branding to the Word document. 

This conversion has not been integrated yet within github nor docusaurus and must be done by hand as follows:

## Installation

For MacOS:
Install pandoc : https://pandoc.org/installing.html
Install homebrew if necessary 
Install librsvg : brew install librsvg

## conversion from .md to .docx

pandoc -s -f gfm -t docx -o architectuur.docx architectuur.md

## conversion from .docx to .md

pandoc -s -t gfm -f docx -o architectuur.md architectuur.docx

## known issues
- It is possible (but not used/explained above) to convert to and from a styled word template
  but we have not tested this yet
- table of contents components in docx are not converted properly to Markdown
- would be nice to have more integrated support for plantUML.. plantUML diagrams need to be rendered to images before converting to Word, but this is currently also necessary for usage of such diagrams within github / Docusaurus (if you do not want to use the online plantUML server every time an image is to be shown)
