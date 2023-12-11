<template>
    <footer class="footer">
        <div class="name">
            <router-link to="/">Ranim Mohammad</router-link>
        </div>
        <div class="icons">
              <a href="https://github.com/ranimxm" target="_blank" class="github">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  data-type="color" role="presentation" aria-hidden="true" >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        fill="#f0e128" data-color="1"/>
                    </svg>
                </a>

            <a href="mailto: ranimm01@hotmail.com" class="mail">
                <svg preserveAspectRatio="xMidYMid meet" data-bbox="14.5 42 171.001 116" viewBox="14.5 42 171.001 116"
                    height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation"
                    aria-hidden="true">
                    <defs>
                    </defs>
                    <g>
                        <path
                            d="M169.6 42H30.5c-8.8 0-16 7.4-16 16.6v82.8c0 9.2 7.2 16.6 16 16.6h139c8.9 0 16-7.4 16-16.6V58.6c.1-9.2-7.1-16.6-15.9-16.6zM35.9 53.1h128.3c1.5 0 3 .3 4.3.9l-64 58.9c-1 .8-2.6 1.4-4 1.4s-2.9-.5-4.1-1.5l-63-59.3c.8-.3 1.6-.4 2.5-.4zm-10.7 11c0-1.1.2-2.1.5-3.2l42.1 39.6-42 38.6c-.3-1-.5-2.1-.5-3.2l-.1-71.8zm139 82.8H35.9c-.8 0-1.5-.1-2.2-.3l42-38.6 13.7 12.9c6.6 5.4 15.6 5.2 21.8.3l13.7-12.5 41.5 38.1c-.7 0-1.4.1-2.2.1zm10.7-11c0 1.1-.2 2.1-.5 3.2l-41.3-37.9 41.7-38.3c.1.4.1.9.1 1.3v71.7z"
                            fill="#f0e128" data-color="1"></path>
                    </g>
                </svg>
            </a>

            <a href="https://www.linkedin.com/in/ranim-m-984169200/" target="_blank" class="linkedin-link">
                <wow-image
                    data-image-info="{&quot;containerId&quot;:&quot;dataItem-jzjc1xoe-comp-jzjbx2cc&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;imageData&quot;:{&quot;width&quot;:200,&quot;height&quot;:200,&quot;uri&quot;:&quot;6ea5b4a88f0b4f91945b40499aa0af00.png&quot;,&quot;name&quot;:&quot;&quot;,&quot;displayMode&quot;:&quot;fill&quot;}}"
                    data-bg-effect-name="" data-has-ssr-src="" style="max-width:(200px, 100%)"
                    data-src="https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png">
                    <img alt="Black LinkedIn Icon" fetchpriority="high"
                        src="https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_29,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6ea5b4a88f0b4f91945b40499aa0af00.png"
                        style="width: 23px; height: 23px; object-fit: cover;">
                </wow-image>
            </a>

        </div>
    </footer>
</template>

<script>
export default {
    name: 'footerDown'
}
</script>

<style>
.footer{
    flex-shrink: 0;
}</style>