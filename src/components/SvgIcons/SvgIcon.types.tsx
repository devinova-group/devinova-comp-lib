
export interface IProps {
    iconName?: string;
    wrapperStyle?: string;
    variant?: "primary" | "error" | "positive";
    svgProp: React.SVGProps<SVGSVGElement>;
    className?: string;
    style?:React.CSSProperties
  }
  
  export interface IconProps{
    color?:string;
    iconName?:string;
    className?: string;
  }
  