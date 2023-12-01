import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion, useAnimation } from "framer-motion";
import { ArrowDown, Heart } from "lucide-react";
import { useEffect } from "react";
const BouncingText = ({ children }) => {
    const controls = useAnimation();
    const bounceAnimation = {
        y: [0, -10, 0], // Variação no eixo Y para criar o efeito de salto
        transition: { duration: 1.1, repeat: Infinity, repeatType: "loop", },
    };
    useEffect(() => {
        controls.start(bounceAnimation);
    }, [controls]);
    return (_jsxs(motion.div, { animate: controls, className: "flex flex-col items-center gap-2 text-xl", children: [_jsx("span", { children: children }), _jsxs("div", { className: "flex items-center", children: [_jsx(ArrowDown, { className: "w-10 h-10" }), _jsx(Heart, { className: "w-10 h-10" }), _jsx(ArrowDown, { className: "w-10 h-10" })] })] }));
};
export const AnimatedTexts = () => (_jsx("div", { className: "flex flex-col justify-center gap-6 text-center my-8", children: _jsxs(BouncingText, { children: ["Assista o ", _jsx("span", { className: "text-blue-500 text-2xl font-semibold", children: "depoimento" })] }) }));
