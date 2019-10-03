import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from "@jupyterlab/application";

import {
  LinkedDataRegistry,
  LinkedDataRegistryToken
} from "@jupyterlab/metadata-extension";

// https://github.com/Coleridge-Initiative/adrf-onto/wiki/Vocabulary#dataset-1c4bd6e13d3c15e578fa

const PREFIX =
  "https://github.com/Coleridge-Initiative/adrf-onto/wiki/Vocabulary#";

async function get(url: URL): Promise<object> {
  if (url.toString().startsWith(PREFIX)) {
    const id = url.toString().slice(PREFIX.length);
    const body = new URLSearchParams();
    body.append("dataset_id", id);
    const res = await fetch("http://localhost:5000/api/v1/stuff", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        accept: "application/json"
      },
      body
    });

    return (await res.json())["metadata"];
  }
}

function activate(_: JupyterFrontEnd, registry: LinkedDataRegistry) {
  registry.register({
    get
  });
}

const sampleProviderPlugin: JupyterFrontEndPlugin<void> = {
  activate,
  id: "myextension",
  requires: [LinkedDataRegistryToken],
  autoStart: true
};

export default sampleProviderPlugin;
