// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "* {\n    box-sizing: border-box;\n}\n\nhtml,\nbody {\n    height: 100%;\n}\n\nbody {\n    background-image: url('/dev-react-vortigo/images/background.png');\n    background-image: -webkit-image-set(\n        url('/dev-react-vortigo/images/background.png') 1x,\n        url('/dev-react-vortigo/images/background@2x.png') 2x,\n        url('/dev-react-vortigo/images/background@3x.png') 3x\n    );\n    background-image: image-set(\n        url('/dev-react-vortigo/images/background.png') 1x,\n        url('/dev-react-vortigo/images/background@2x.png') 2x,\n        url('/dev-react-vortigo/images/background@3x.png') 3x\n    );\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: flex;\n    margin: 0;\n}\n\n#root {\n    width: 100%;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}