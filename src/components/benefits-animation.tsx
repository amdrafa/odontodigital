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

    return (
        <motion.div
            animate={controls}
            className="flex flex-col items-center gap-2 text-xl"
        >
            <span>{children}</span>
            <div className="flex items-center">

                <ArrowDown className="w-10 h-10" />
                <Heart className="w-10 h-10" />
                <ArrowDown className="w-10 h-10" />
            </div>

        </motion.div>
    );
};

export const AnimatedTexts = () => (
    <div className="flex flex-col justify-center gap-6 text-center my-8">
        <BouncingText>Assista o <span className="text-blue-500 text-2xl font-semibold">depoimento</span></BouncingText>
    </div>
);
