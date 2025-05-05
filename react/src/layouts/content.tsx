import { Navigate, Route, Routes } from "react-router-dom";
import routes from "../routes/routes";
import React, { Suspense } from "react";

interface RouteConfig {
    path: string;
    exact?: boolean;
    name?: string;
    component: React.ComponentType<unknown>;
}

const Contents: React.FC = () => {
    return (
        // <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {(routes as RouteConfig[]).map((route, idx) => (
                    <Route
                        key={idx}
                        path={route.path}
                        element={React.createElement(route.component)}
                    />
                ))}
                <Route path="/" element={<Navigate to="home" replace />} />
            </Routes>
        // </Suspense>
    );
};

export default Contents;
