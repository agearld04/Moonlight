function m(o){window.enmity.plugins.registerPlugin(o)}
function i(...o){return window.enmity.modules.getByProps(...o)}
const s = window.enmity.patcher.create("RGBColorChanger");
const e = i("StyleSheet");

function addRGBStyles() {
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
        }
    `;
    e.default.create({
        rgbStyles: {
            animation: 'rgbColorChange 5s infinite',
        },
    });
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}

const RGBPlugin = {
    name: "RGBColorChanger",
    version: "1.0.0",
    description: "Adds RGB color-changing effect to text.",
    authors: [{ name: "FPSFIGHTER", id: "YourID" }],
    color: "#ff0000",
    sourceUrl: "https://github.com/agearld04/Nightlight",
    onStart() {
        addRGBStyles();
    },
    onStop() {
        s.unpatchAll();
    }
};

m(RGBPlugin);
