import React, { useState } from 'react';
import styles from './Project.module.css';
import Summary from '../components/project/Summary';

const Project: React.FC = () => {

    return (
        <div className={styles.body}>
            <Summary/>
        </div>
    );
};

export default Project;
