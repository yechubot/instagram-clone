import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {

    const [docs, setDocs] = useState([]); // 처음엔 없으니까 empty array

    //db랑 커뮤니케이션 
    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc') // 순서 설정 
            .onSnapshot((snap) => { //처음에 콜백 호출, 바뀔때마다 호출 
                let documents = [];
                snap.forEach(doc => {
                    //   doc.data() // 안의 데이터 접근,   doc.id로 id도 접근 가능 
                    documents.push({ ...doc.data(), id: doc.id })
                });
                setDocs(documents);
            });

        return () => unsub(); //clean up // 사용안할때 unsub ! 
    }, [collection])

    return { docs };
}
export default useFirestore;