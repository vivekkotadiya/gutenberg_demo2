/**
 * Set inline CSS class.
 * @param {object} props - The block object.
 * @return {array} The inline CSS class.
 */

import IGBIcon from "./IGBIcons";
import parseSVG from "./IGBParseIcon";
 
export default function renderSVG(svg) {
  svg = parseSVG(svg);

  var fontAwesome = IGBIcon[svg];
  
  if ("undefined" != typeof fontAwesome) {
    var viewbox_array = fontAwesome["svg"].hasOwnProperty("brands")
      ? fontAwesome["svg"]["brands"]["viewBox"]
      : fontAwesome["svg"].hasOwnProperty("solid") ? fontAwesome["svg"]["solid"]["viewBox"] : fontAwesome["svg"]["regular"]["viewBox"];
    var path = fontAwesome["svg"].hasOwnProperty("brands")
      ? fontAwesome["svg"]["brands"]["path"]
      : fontAwesome["svg"].hasOwnProperty("solid") ? fontAwesome["svg"]["solid"]["path"] : fontAwesome["svg"]["regular"]["path"];
    var viewBox = viewbox_array.join(" ");

    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
        <path d={path}></path>
      </svg>
    );
  }
}
 