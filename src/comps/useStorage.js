import { useState, useEffect } from "react";
import { projectStorage } from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(()=>{
        //references
        const storageRef = projectStorage.ref(file.name)

        //async임 
        storageRef.put(file).on('state_changed', (snap)=> {// state가 변할때마다 리스너 호출하기 
            //퍼센트 공식 
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percentage)

        }, (err)=> {
            setError(err);
        }, async() => {
            const url = await storageRef.getDownloadURL();
            setUrl(url);
        })

    }, [file])// file이 변할때마다 {}함수 트리거됨

    return {progress, url, error}
}
export default useStorage;
