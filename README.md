# ts-ipywidget-starter

This is the most barebones repo that I could cobble tobgether that does the following
1. Builds an ipywidget
2. Uses typescript code in that widget
3. is NPM installable
4. Allows a widgert to use react

This is built by stripping as much possible from Bloomberg's [ipydatagrid](https://github.com/bloomberg/ipydatagrid)

There are some remaining dependency on the term `ipydatagrid` in this repo.  

I want to expose a minimally useable repo so other people can create ipywidgets too.  This minimal repo is also a good way for jupyterlab contributors to diagnose the packaging problems I have been having.

If you choose to use this repo to start building your own ipywidgets, understand that this isn't for serious final packaging, it's an intermediate step to keep you moving with your development.

This package has the following limitations:
1. you can only install one widget based on this repo or ipydatagrid.  There will be conflicts otherwise
2. I don't know how it works and can't help you understand how the build process works.

## How to Build
```bash
python -m pip install --upgrade twine
python -m pip install --upgrade twine
rm -rf node_modules
rm -rf dist
python -m build .
rm dist/index.js dist/index.js.LICENSE.txt
twine check dist/*
python -m twine upload --repository testpypi dist/*
```
