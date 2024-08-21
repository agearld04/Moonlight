function m(o){window.enmity.plugins.registerPlugin(o)}
function s(o){return window.enmity.patcher.create(o)}

const RGBPlugin = {
    name: "RGBColorChanger",
    version: "1.0.1",
    description: "Applies an RGB color-changing effect to text.",
    authors: [{ name: "YourName", id: "YourID" }],
    color: "#ff0000",
    sourceUrl: "https://github.com/yourusername/RGBColorChanger",
    onStart() {
        const styles = `
            @keyframes rgbColorChange {
                0% { color: red; }
                25% { color: yellow; }
                50% { color: green; }
                75% { color: blue; }
                100% { color: purple; }
            }
            .rgb-text {
                animation: rgbColorChange 5s infinite;
                animation-timing-function: linear;
            }
        `;
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);

        // Apply the RGB effect to specific elements (e.g., titles, usernames)
        document.querySelectorAll('.title, .username').forEach(el => {
            el.classList.add('rgb-text');
        });
    },
    onStop() {
        document.querySelectorAll('.rgb-text').forEach(el => {
            el.classList.remove('rgb-text');
        });
        const styleSheet = document.querySelector("style");
        if (styleSheet) styleSheet.remove();
    }
};

m(RGBPlugin);
