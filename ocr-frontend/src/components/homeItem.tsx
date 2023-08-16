'use client'
import React,{useState} from "react";

const HomeItem = () => {
    const [file, setFile] = useState(null)

    const postOcr = ()=>{
      
    }
    const handleSubmit=((e:any)=>{
        e.preventDefault()
      console.log(file);
      
        
    })

    const handleChange=((e:any)=>{
       
        setFile(e.target.files[0])
         console.log("uploading");
    })
  return (
    <>
      <section className="bg-gray-100">
        <div className="flex items-center justify-center min-h-screen">
          <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Upload Image
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="image"
                >
                  Choose an image
                 (PNG or
                  JPEG) <span className="text-red-500 font-sans">*</span>
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept=".png,.jpg,.jpeg"
                  onChange={handleChange}
                  className="w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 px-3 py-[0.32rem]  font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem]  file:border-0 file:border-solid file:border-inherit file:bg-gray-300 hover:file:bg-gray-400   file:px-3 file:py-[0.32rem] file:text-neutral-700 hover:file:text-neutral-100 file:transition file:duration-300 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] file:cursor-pointer cursor-pointer"
                />
              </div>
              <button
                type="submit"
                className=" bg-indigo-600 hover:bg-indigo-700 transition duration-300 ease-in-out text-white py-2 px-4 rounded-md w-full"
              >
                Upload Image
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeItem;
