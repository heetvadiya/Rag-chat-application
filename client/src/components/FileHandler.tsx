import {useState} from "react";

export default function FileHandler(){
  const [file, setFile] = useState<File>();

  function handleUpload(){
    const formData = new FormData();
    file?formData.append('file', file):null
  }

  function handleFileChange
  return (
    <>
      <div className="input-group">
        <input id="file" type="file" onChange={handleFileChange} />
      </div>
      {(
        <button
          onClick={handleUpload}
          className="submit"
        >Upload a file</button>
      )}
    </>
  )
}