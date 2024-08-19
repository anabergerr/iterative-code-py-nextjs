// custom.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    'codapi-snippet': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      sandbox?: string;
      editor?: string;
    };
  }
}
