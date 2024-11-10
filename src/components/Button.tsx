import { cva } from "class-variance-authority"
import cn from "~/utils/cn"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    variant?: "primary" | "secondary",
    size?: "sm" | "md"
} 

const buttonStyles = cva(
    "px-4 py-2 rounded-full flex items-center justify-center transition-opacity gap-2 disabled:opacity-50",
    {
        variants: {
            variant: {
                primary: "bg-primary hover:bg-primary/50",
                secondary: "bg-input hover:bg-input/50",
            },
            size: {
                sm: "text-sm px-2 py-1",
                md: "px-4 py-2 text-md"
            }
        },
        defaultVariants: {
            variant: "primary",
            size: "md"
        }
    }
)

export default function Button ({children, className, variant, ...props} : ButtonProps) {
    return <button className={cn(buttonStyles({className, variant}))} {...props}>{children}</button>
}