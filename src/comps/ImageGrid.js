import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion'; // 프레이머 모션 사용하기 

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');
    console.log(docs);

    return ( //원하는 element 앞에 motion을 붙여 사용하기 
        <div className="img-grid">
            {docs && docs.map(doc => (
                //layout attribute을 추가하면 부드럽게 이동함 
                <motion.div className="img-wrap" key={doc.id}
                    layout
                    whileHover={{ opacity: 1 }}
                    onClick={() => setSelectedImg(doc.url)}>

                    <motion.img src={doc.url} alt="uploaded pic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delaty: 1 }}
                    />
                </motion.div>
            ))}
        </div>
    );
}

export default ImageGrid;