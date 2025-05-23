import React, { useReducer, useEffect, useState } from "react";

interface RepoItem {
  path: string;
  type: string;
}

// Define state actions
type Action =
  | { type: "TOGGLE_FOLDER"; payload: string }
  | { type: "SET_FILE_PREVIEW"; payload: any | null };

const reducer = (state: any, action: Action) => {
  switch (action.type) {
    case "TOGGLE_FOLDER": {
      const newExpandedState = { ...state.expandedFolders };

      const folderPath = action.payload;
      const isExpanded = newExpandedState[folderPath];

      if (isExpanded) {
        Object.keys(newExpandedState).forEach((key) => {
          if (key.startsWith(folderPath)) {
            newExpandedState[key] = false;
          }
        });
      }

      newExpandedState[folderPath] = !isExpanded;
      return { ...state, expandedFolders: newExpandedState };
    }
    case "SET_FILE_PREVIEW":
      return { ...state, filePreview: action.payload };
    default:
      return state;
  }
};

const OrivaultRepo: React.FC = () => {
  const [contents, setContents] = useState<RepoItem[]>([]);
  const [state, dispatch] = useReducer(reducer, {
    expandedFolders: {},
    filePreview: null,
  });

  const username = "chung-ejy";
  const repoName = "orivault";

  useEffect(() => {
    fetch(`https://api.github.com/repos/${username}/${repoName}/git/trees/main?recursive=1`)
      .then((res) => res.json())
      .then((data) => setContents(data.tree))
      .catch((error) => console.error("Error fetching repo contents:", error));
  }, []);

  const fetchFilePreview = async (filePath: string) => {
    try {
      const res = await fetch(`https://raw.githubusercontent.com/${username}/${repoName}/main/${filePath}`);
      const data = await res.text();

      if (filePath.endsWith(".ipynb")) {
        const notebook = JSON.parse(data);
        dispatch({ type: "SET_FILE_PREVIEW", payload: notebook });
      } else {
        dispatch({ type: "SET_FILE_PREVIEW", payload: data });
      }
    } catch (error) {
      console.error("Error fetching file preview:", error);
    }
  };

  const getName = (path: string) => path.split("/").pop() || path;
  const getIndentation = (path: string) => `${(path.split("/").length - 1) * 20}px`;

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {/* Left Sidebar - Directories */}
        <div className="col-md-4 border-end">
          <h4 className="text-primary">📁 {repoName}</h4>
          <ul className="list-group">
            {contents.map((item) => {
              const parentFolder = item.path.split("/").slice(0, -1).join("/");
              const isVisible = state.expandedFolders[parentFolder] || item.path.indexOf("/") === -1;

              return isVisible ? (
                <li key={item.path} className="list-group-item" style={{ paddingLeft: getIndentation(item.path) }}>
                  {item.type === "tree" ? (
                    <button className="btn btn-link" onClick={() => dispatch({ type: "TOGGLE_FOLDER", payload: item.path })}>
                      {state.expandedFolders[item.path] ? "📂" : "📁"} {getName(item.path)}
                    </button>
                  ) : (
                    <button className="btn btn-link" onClick={() => fetchFilePreview(item.path)}>
                      📄 {getName(item.path)}
                    </button>
                  )}
                </li>
              ) : null;
            })}
          </ul>
        </div>

        {/* Right Side - File Preview */}
        <div className="col-md-8">
          {state.filePreview ? (
            <div>
              <h4>Notebook Viewer</h4>
              
              {typeof state.filePreview === "string" ? (
                <pre className="border p-3 bg-light">{state.filePreview}</pre>
              ) : (
                <div className="border p-3 bg-light">
                  {state.filePreview.cells.map((cell: any, index: number) => (
                    <div key={index} className="mb-4">
                      <h5 className="text-secondary">Cell {index + 1}</h5>
                      {cell.cell_type === "markdown" ? (
                        <div className="bg-light p-2">{cell.source.join("")}</div>
                      ) : (
                        <div>
                          <pre className="bg-dark text-light p-2">{cell.source.join("\n")}</pre>

                          {/* Render cell outputs */}
                          {cell.outputs && cell.outputs.length > 0 && (
                            <div className="mt-2 p-2 border bg-white">
                              {cell.outputs.map((output: any, outputIndex: number) => (
                                <div key={outputIndex}>
                                  {output.text ? <pre>{output.text.join("\n")}</pre> : null}
                                  {output.data?.["text/html"] ? (
                                    <div dangerouslySetInnerHTML={{ __html: output.data["text/html"] }} />
                                  ) : null}
                                  {output.data?.["image/png"] ? (
                                    <img src={`data:image/png;base64,${output.data["image/png"]}`} alt="Notebook Output" />
                                  ) : null}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              
              <button className="btn btn-secondary mt-2" onClick={() => dispatch({ type: "SET_FILE_PREVIEW", payload: null })}>
                Close Preview
              </button>
            </div>
          ) : (
            <p className="text-muted">Select a file to preview.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrivaultRepo;