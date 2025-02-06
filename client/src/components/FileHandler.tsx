import {useState} from "react";

export default function FileHandler(){
  const [file, setFile] = useState<File>();

  function handleUpload(){
    const formData = new FormData();
    file ? formData.append('file', file):null;
    (async ()=> await fetch("http://localhost:3002/filehandler",{
      headers:{
        "Content-Type":"application/json",
      },
      method:"POST",
      body:formData
    }).then(async (response)=>console.log(await response.json())))();
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>){
      setFile(e.target.files[0])
  }
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