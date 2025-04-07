import React, { useState, useRef, useEffect, useMemo, Suspense } from "react";
import { EllipsisVertical,Loader } from "lucide-react";
import download_y from "../assets/download_y.png";
import ErrorPage from "./ErrorPage";
import File from "../components/File";
import FileMenu from "../components/FileMenu";
import GuidelinesNavbar from "../components/GuidelinesNavbar";
import CreateFolderModal from "../components/CreateFolderModal";
import UniversityGuidelinesFunctions from "../utils/UniversityGuidelinesFunctions";

const UniversityGuidelines = () => {

  const ErrorPage =React.lazy(()=>import('./ErrorPage'));
  const{
    showMenu,
    showToggle,
    searchD,
    searchM,
    modal,
    file,
    downloads,
    materials,
    downloadMenuRef,
    isLoadingDownloads,
    isLoadingMaterials,
    handleCloseFile,
    uploadFile,
    handleClose,
    handleAdd,
    handleSearchD,
    handleSearchM,
    toggleMaterial,
    toggle
  } = UniversityGuidelinesFunctions();

  const filterDownloads = useMemo(() => {
    console.log("filter downloads");
    return downloads.filter(download =>
    download.title.toLowerCase().includes(searchD)
  )}, [downloads,searchD]);

// const filterDownloads = downloads.filter(download =>
//   download.title.toLowerCase().includes(searchD) 
// )

const filterMaterials = materials.filter(material =>{

console.log("filter materials");
 return material.title.toLowerCase().includes(searchM)
})

  return (
    <div>
      {(isLoadingDownloads || isLoadingMaterials )? (
        <div className="flex justify-center items-center">
          <Loader className="animate-spin w-10 h-10" />
        </div>
      ) : (
        <>
          <div className="bg-white rounded-xl shadow-lg p-4">
          <GuidelinesNavbar heading="University Guidelines" file={uploadFile} add={handleAdd} search={(e) => handleSearchD(e)}/>
            <div className="text-gray-600 py-4"> 
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Luctus
                libero nisl enim ad dictum suscipit dapibus facilisis efficitur.
                Natoque tempus erat in rhoncus mi ultricies curae vulputate.
                Volutpat leo sit pretium neque libero; molestie cras vestibulum.
                Dignissim donec per montes vel varius dolor magna. Molestie
                aenean mattis aliquam adipiscing habitant vivamus. Morbi tempor
                suscipit habitasse nostra quis quis nulla. Platea ex mattis sem
                rhoncus hendrerit. Anec quisque ultricies enim, himenaeos purus
                id. Maecenas ac mus feugiat donec dignissim non.
              </p>
            </div>
            {downloads.length > 0 ? (
              <div className="grid grid-cols-3 md:grid-cols-7 h-[400px] overflow-auto">
                 {filterDownloads.map((download, index) => {
                  {/*const match =
                    search && download.title.toLowerCase().includes(search); */}
                  return (
                    <div
                      key={index}
                      className={`m-4 p-2 rounded-sm`}
                    >
                      <div className="flex space-x-2">
                        <div>
                          <img src={download_y}></img>
                        </div>
                        <div className="relative text-gray-400">
                          <EllipsisVertical onClick={() => toggle(index)} />
                          {showMenu === index &&  <FileMenu ref={downloadMenuRef} />}
                        </div>
                      </div>
                      <div className="py-2">
                        <h1 className="text-black font-semibold text-lg">
                          {download.title}
                        </h1>
                        <h1 className="text-gray-400">{download.files}</h1>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <Suspense fallback={<div>Wait...</div>}>
              <ErrorPage />
              </Suspense>
              
            )}
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-xl mt-4">
            <div>
            <GuidelinesNavbar heading="Marketing Materials" file={uploadFile} add={handleAdd} search={(e) => handleSearchM(e)}/>

              { materials.length > 0 ? 
              ( <div className="grid grid-cols-3 md:grid-cols-7">
                {filterMaterials.map((material, index) => {
                  {/* const match =
                    search && material.title.toLowerCase().includes(search); */}
                  return (
                    <div
                      key={index}
                      className="p-2 m-4 rounded-2xl"
                    >
                    
                      <div className="flex space-x-2">
                        <div>
                          <img src={download_y}></img>
                        </div>
                        <div className=" relative text-gray-400">
                          <EllipsisVertical
                            onClick={() => toggleMaterial(index)}
                          />
                          {showToggle === index &&    <FileMenu ref={downloadMenuRef} />}
                        </div>
                      </div>
                      <div className="py-2">
                        <h1 className="text-black font-semibold text-lg">
                          {material.title}
                        </h1>
                        <h1 className="text-gray-400">{material.files}</h1>
                      </div>
                    </div>
                  );
                })}
              </div>):(<ErrorPage/>)}
            </div>
          </div>
          {file &&  <File onClose={handleCloseFile}/> }
          {modal && <CreateFolderModal onClose={handleClose} />}
          {/* {modal && console.log("memo")} */}
        </>
      )}
    </div>
  );
};
export default UniversityGuidelines;
