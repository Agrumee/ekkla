// src/layouts/Main.tsx

import type { ReactNode } from 'react';
import NavBar from '../../components/organisms/NavBar/NavBar';
import './MainLayout.scss'

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="l-main">
            <NavBar />
            <div className="content">
                {children}
            </div>
        </div>
    );
}

export default MainLayout
