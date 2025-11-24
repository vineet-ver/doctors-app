import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({
    children,
    className,
    hoverEffect = true,
    ...props
}: GlassCardProps) {
    return (
        <motion.div
            className={cn(
                "glass-card rounded-2xl p-6 relative overflow-hidden",
                className
            )}
            whileHover={
                hoverEffect
                    ? {
                        y: -5,
                        boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
                    }
                    : undefined
            }
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            {...props}
        >
            {children}
        </motion.div>
    );
}
