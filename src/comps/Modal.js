import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ selectedImg, setSelectedImg }) => {
    const handleClick = (e) => {
        // 사진자체를 클릭하면 닫히지 않도록 
        if (e.target.classList.contains('backdrop'))
            setSelectedImg(null);
    }
    return (
        <motion.div className="backdrop" onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>

            <motion.img src={selectedImg} alt="enlarged pic"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }} />
        </motion.div>
    );
}
//vh : viewpor height 
// 화면에서 안보이다가 원래 자리로 오게 하기 
export default Modal;