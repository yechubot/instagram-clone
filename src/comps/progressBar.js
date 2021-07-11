import React from 'react';
import { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile }) => {

    const { url, progress } = useStorage(file);

    useEffect(() => {
        if (url) {
            setFile(null); // url 생기면 프로그레스바 안보이도록 
        }
    }, [url, setFile])

    return (
        <motion.div className="progress-bar"
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }}
        >
        </motion.div>
    );
}

export default ProgressBar;