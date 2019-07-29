export interface Theme {
    name: string;
    properties: any;
  }
  
  export const light: Theme = {
    name: "light",
    properties: {
      "--foreground-default": "#1D1D1B",
      "--foreground-primary":"#03FF8C",
      "--foreground-secondary": "#41474D",
      "--foreground-tertiary": "#797C80",
      "--foreground-quaternary": "#F4FAFF",
      "--foreground-light": "#41474D",
  
      "--background-default": "#F4FAFF",
      "--background-secondary": "#A3B9CC",
      "--background-tertiary": "#5C7D99",
      "--background-light": "#FFFFFF",
  
      "--primary-default": "#5DFDCB",
      "--primary-dark": "#24B286",
      "--primary-light": "#B2FFE7",
  
      "--error-default": "#EF3E36",
      "--error-dark": "#800600",
      "--error-light": "#FFCECC",
      "--image" : "url(https://firebasestorage.googleapis.com/v0/b/portafolio-e251f.appspot.com/o/logotipo.png?alt=media&token=7f34b24e-6a5e-4bf8-96a9-3f0f7cfa3c42)",
      "--background-tertiary-shadow": "0 1px 3px 0 rgba(92, 125, 153, 0.5)"
    }
  };
  
  export const dark: Theme = {
    name: "dark",
    properties: {
      "--foreground-default": "#fff",
      "--foreground-primary":"#03FF8C",
      "--foreground-secondary": "#A3B9CC",
      "--foreground-tertiary": "#F4FAFF",
      "--foreground-quaternary": "#E5E5E5",
      "--foreground-light": "#FFFFFF",
  
      "--background-default": "#797C80",
      "--background-secondary": "#41474D",
      "--background-tertiary": "#08090A",
      "--background-light": "#222222",
  
      "--primary-default": "#5DFDCB",
      "--primary-dark": "#24B286",
      "--primary-light": "#B2FFE7",
  
      "--error-default": "#EF3E36",
      "--error-dark": "#800600",
      "--error-light": "#FFCECC",
      "--image":"url(https://firebasestorage.googleapis.com/v0/b/portafolio-e251f.appspot.com/o/logo-dark-1.png?alt=media&token=8238a45d-f573-4037-87bc-3147ee2638d3)",
  
      "--background-tertiary-shadow": "0 1px 3px 0 rgba(8, 9, 10, 0.5)"
    }
  };