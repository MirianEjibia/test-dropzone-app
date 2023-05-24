import document from "../.././document.svg";
import "./styles.css";

export function DropZone() {
  return (
    <div className="dropzone-wrapper">
      <div className="dropzone-border-layer">
        <div className="dropzone-title">
            <span> Add file to check container or start signing by uploading documents</span>
        </div>
        <button className="add-btn">
          <img src={document}></img>
          <span className="btn-text">Add file(s)</span>{" "}
        </button>
        <div className="sub-title">or drop document(s) here</div>
      </div>
    </div>
  );
}
