
const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      width: 42px;
      height: 42px;
    }
      :host, #root {
        display: inline-block;
      }
        #root, svg {
          width: 100%;
          height: 100%;
        }
          svg, svg * {
            fill: var( --color, #222 ) !important;
          }
      .error {
        font-family: sans-serif;
        font-size: 12px;
        color: #f00;
      }
  </style>
  <div id="root"><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_5998)">
<path d="M13.0764 10.617C13.0764 9.73978 13.7875 9.0287 14.6646 9.0287C15.5418 9.0287 16.2529 9.73978 16.2529 10.617V37.6668C16.2529 38.544 15.5418 39.2551 14.6646 39.2551C13.7875 39.2551 13.0764 38.544 13.0764 37.6668V10.617Z" fill="#353739"/>
<path d="M28.9087 10.617C28.9087 9.73978 29.6198 9.0287 30.497 9.0287C31.3742 9.0287 32.0852 9.73978 32.0852 10.617V47.7422C32.0852 48.6195 31.3742 49.3306 30.497 49.3306C29.6198 49.3306 28.9087 48.6195 28.9087 47.7422V10.617Z" fill="#353739"/>
<path d="M43.3018 20.6924C43.3018 19.8152 44.0128 19.1041 44.89 19.1041C45.7671 19.1041 46.4782 19.8152 46.4782 20.6924V37.6668C46.4782 38.544 45.7671 39.2551 44.89 39.2551C44.0128 39.2551 43.3018 38.544 43.3018 37.6668V20.6924Z" fill="#353739"/>
<path d="M36.3528 37.9149C36.3528 37.0378 37.0639 36.3267 37.941 36.3267H55.4118C56.2889 36.3267 57 37.0378 57 37.9149C57 38.7921 56.2889 39.5032 55.4118 39.5032H37.941C37.0639 39.5032 36.3528 38.7921 36.3528 37.9149Z" fill="#353739"/>
<path d="M3 37.9646C3 37.0875 3.71108 36.3764 4.58825 36.3764H29.8573C30.7345 36.3764 31.4455 37.0875 31.4455 37.9646C31.4455 38.8418 30.7345 39.5529 29.8573 39.5529H4.58825C3.71108 39.5529 3 38.8418 3 37.9646Z" fill="#353739"/>
<path d="M3 20.6924C3 19.8152 3.71108 19.1041 4.58825 19.1041H14.3659C15.2431 19.1041 15.9541 19.8152 15.9541 20.6924C15.9541 21.5695 15.2431 22.2806 14.3659 22.2806H4.58825C3.71108 22.2806 3 21.5695 3 20.6924Z" fill="#353739"/>
<path d="M36.1553 20.6924C36.1553 19.8152 36.8664 19.1041 37.7436 19.1041H44.446C45.3231 19.1041 46.0342 19.8152 46.0342 20.6924C46.0342 21.5695 45.3231 22.2806 44.446 22.2806H37.7436C36.8664 22.2806 36.1553 21.5695 36.1553 20.6924Z" fill="#353739"/>
<path d="M20.2744 20.6924C20.2744 19.8152 20.9855 19.1041 21.8626 19.1041H30.1534C31.0305 19.1041 31.7416 19.8152 31.7416 20.6924C31.7416 21.5695 31.0305 22.2806 30.1534 22.2806H21.8626C20.9855 22.2806 20.2744 21.5695 20.2744 20.6924Z" fill="#353739"/>
<path d="M3 29.3285C3 28.4514 3.71108 27.7403 4.58825 27.7403H14.3659C15.2431 27.7403 15.9541 28.4514 15.9541 29.3285C15.9541 30.2057 15.2431 30.9167 14.3659 30.9167H4.58825C3.71108 30.9167 3 30.2057 3 29.3285Z" fill="#353739"/>
<path d="M29.7512 29.3285C29.7512 28.4514 30.4623 27.7403 31.3395 27.7403H54.6708C55.548 27.7403 56.2591 28.4514 56.2591 29.3285C56.2591 30.2057 55.548 30.9167 54.6708 30.9167H31.3395C30.4623 30.9167 29.7512 30.2057 29.7512 29.3285Z" fill="#353739"/>
<path d="M20.2744 29.3285C20.2744 28.4514 20.9855 27.7403 21.8626 27.7403H30.201C31.0782 27.7403 31.7892 28.4514 31.7892 29.3285C31.7892 30.2057 31.0782 30.9167 30.201 30.9167H21.8626C20.9855 30.9167 20.2744 30.2057 20.2744 29.3285Z" fill="#353739"/>
<path d="M35.2609 48.3379C35.2609 50.9694 33.1276 53.1025 30.4961 53.1025C27.8647 53.1025 25.7314 50.9694 25.7314 48.3379C25.7314 45.7063 27.8647 43.5731 30.4961 43.5731C33.1276 43.5731 35.2609 45.7063 35.2609 48.3379Z" fill="#353739"/>
<path d="M19.8774 10.9147C19.8774 13.5462 17.7441 15.6795 15.1126 15.6795C12.4811 15.6795 10.3479 13.5462 10.3479 10.9147C10.3479 8.28325 12.4811 6.14999 15.1126 6.14999C17.7441 6.14999 19.8774 8.28325 19.8774 10.9147Z" fill="#353739"/>
</g>
<defs>
<clipPath id="clip0_1_5998">
<rect width="54" height="47.7" fill="white" transform="translate(3 6.14999)"/>
</clipPath>
</defs>
</svg>
</div>
`;

class RDSfdsWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('rds-icon-fds-widget', RDSfdsWidget);