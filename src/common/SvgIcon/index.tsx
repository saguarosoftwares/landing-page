import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height, style, id }: SvgIconProps) => (
  <img id={id} src={`/img/svg/${src}`} alt={src} width={width} height={height} style={style} />
);