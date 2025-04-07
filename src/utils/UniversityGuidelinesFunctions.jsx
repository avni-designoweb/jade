import React,{useState,useEffect,useRef, useCallback} from 'react';
import { useFetchData } from "./UniversityGuidelinesData";
import { useFetchMaterials } from "./UGMaterialsData";

const UniversityGuidelinesFunctions = () => {
      const [showMenu, setShowMenu] = useState(null);
      const [showToggle, setShowToggle] = useState(null);
      const [searchD, setSearchD] = useState("");
      const [searchM, setSearchM] = useState("");
      const [modal, setModal] = useState(false);
      const [file, setFile] = useState(false);
      const downloadMenuRef = useRef(null);
    

      //REACT QUERY || useSWR
      const { data: downloads = [] , isLoading : isLoadingDownloads } = useFetchData();
      const { data: materials = [] ,  isLoading : isLoadingMaterials  } = useFetchMaterials();

      useEffect(() => {
        const handleMove = (event) => {
          if (
            (showMenu !== null || showToggle !== null) &&
            downloadMenuRef.current
          ) {
            const rect = downloadMenuRef.current.getBoundingClientRect();
            const offset = 30;
            if (
              event.clientX < rect.left - offset ||
              event.clientX > rect.right + offset ||
              event.clientY < rect.top - offset ||
              event.clientY > rect.bottom + offset
            ) {
              setShowMenu(null) || setShowToggle(null);
            }
          }
        };
        document.addEventListener("mousemove", handleMove);
      }, [showMenu, showToggle]);
    
      const toggle = (index) => {
        setShowMenu(showMenu === index ? null : index);
        setShowToggle(null);
      };
      const toggleMaterial = (index) => {
        setShowToggle(showToggle === index ? null : index);
        setShowMenu(null);
      };
    
      const handleSearchD = (e) => {
        setSearchD(e.target.value.toLowerCase());
      };
      const handleSearchM = (e) => {
        setSearchM(e.target.value.toLowerCase());
      };
    
      const handleAdd = () => {
        setModal(true);
      };
    
      const handleClose = useCallback(() => {
        console.log("test")
        setModal(false);
      },[]);
    
      const uploadFile = () => {
        setFile(true);
      };
    
      const handleCloseFile = () => {
        setFile(false);
      };
    
  return {
    showMenu,
    showToggle,
    searchD,
    searchM,
    modal,
    file,
    isLoadingDownloads,
    isLoadingMaterials,
    downloads,
    materials,
    downloadMenuRef,
    handleCloseFile,
    uploadFile,
    handleClose,
    handleAdd,
    handleSearchD,
    handleSearchM,
    toggleMaterial,
    toggle

  }
}

export default UniversityGuidelinesFunctions