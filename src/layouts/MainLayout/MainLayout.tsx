// src/layouts/Main.tsx

import type { ReactNode } from 'react';
import './MainLayout.scss'

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="l-main">
            <div className="content">
                {children}
            </div>
        </div>
    );
}

export default MainLayout
