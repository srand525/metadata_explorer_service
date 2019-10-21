# metadata_explorer_service

A JupyterLab extension.


## Prerequisites

* JupyterLab

## Installation

```bash
jupyter labextension install metadata_explorer_service @jupyterlab/dataregistry-extension@3.0.0 @jupyterlab/metadata-extension@1.5.0
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
npm run build
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```

