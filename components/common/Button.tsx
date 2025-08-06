import { ButtonProps } from "@/interfaces";
import { Style , buttonBg, buttonClick} from "@/constants"
import Link  from "next/link";

export default function Button({label ,style , variant , clickprop}: ButtonProps) {
    
    return (
    <Link href={buttonClick[clickprop]}>
        <button className={`${Style[style]} ${buttonBg[variant]}`}>{label}</button>
    </Link>
    );
}
