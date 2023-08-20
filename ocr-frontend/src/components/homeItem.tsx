"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface PostResponseData {
  data: string; // You can specify other properties if needed
}
const HomeItem = () => {
  const [file, setFile] = useState("");
  const [postResponseData, setPostResponseData] = useState<PostResponseData>({
    data: "",
  });

  const postOcr = async () => {
    const formData = new FormData();
    formData.append("image", file);
    try {
      const response = await axios.post(
        "https://ocr.nischallamichhane.com.np/api",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      const responseData = response.data;
      setPostResponseData(responseData);
   
      // console.log(responseData);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log(file);
    postOcr();
   
  };

  const handleChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  // const fetchOcr = async() => {
  //   const res =await axios.get( "https://ocr.nischallamichhane.com.np/api",{ headers: { "Content-Type": "applocation/json" } })
  //   console.log(res);
  //  const dataResponse:any = res.data
  //  if (Array.isArray(dataResponse.dataArray)) {
  //   setFetchData(dataResponse.dataArray);
  // }
  // }
  // useEffect(()=>{
  //   fetchOcr()
  // },[])
  return (
    <>
      <section className="bg-white">
        <div className=" flex items-center justify-center h-[90vh] flex-col overflow-hidden">
          <div className="max-w-md w-full p-6 bg-white rounded-md shadow-xl ">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Upload Image
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="image"
                >
                  Choose an image (PNG or JPEG)
                  <sup className="text-red-500">*</sup>
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept=".png,.jpg,.jpeg,.pdf"
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
          <div className=" mt-4 max-w-md w-full p-6 bg-white rounded-md shadow-xl">
            <h3 className="text-2xl mb-4 text-center">
              Output
            </h3>
            {postResponseData.data && (
              <>
                {postResponseData.data
                  .split("\r\n")
                  .map((line: any, index: number) => (
                    <p key={index}>{line}</p>
                  ))}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeItem;