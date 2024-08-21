function m(o){window.enmity.plugins.registerPlugin(o)}
function i(...o){return window.enmity.modules.getByProps(...o)}
window.enmity.modules.common, window.enmity.modules.common.Constants, window.enmity.modules.common.Clipboard, 
window.enmity.modules.common.Assets, window.enmity.modules.common.Messages, 
window.enmity.modules.common.Clyde, window.enmity.modules.common.Avatars, 
window.enmity.modules.common.Native, window.enmity.modules.common.React, 
window.enmity.modules.common.Dispatcher, window.enmity.modules.common.Storage;

const t=window.enmity.modules.common.Toasts;
window.enmity.modules.common.Dialog, window.enmity.modules.common.Token, 
window.enmity.modules.common.REST, window.enmity.modules.common.Settings, 
window.enmity.modules.common.Users, window.enmity.modules.common.Navigation, 
window.enmity.modules.common.NavigationNative, window.enmity.modules.common.NavigationStack, 
window.enmity.modules.common.Theme, window.enmity.modules.common.Linking, 
window.enmity.modules.common.StyleSheet, window.enmity.modules.common.ColorMap, 
window.enmity.modules.common.Components, window.enmity.modules.common.Locale, 
window.enmity.modules.common.Profiles, window.enmity.modules.common.Lodash, 
window.enmity.modules.common.Logger, window.enmity.modules.common.Flux, 
window.enmity.modules.common.SVG, window.enmity.modules.common.Scenes, 
window.enmity.modules.common.Moment;

function d(o){return window.enmity.assets.getIDByName(o)}
function s(o){return window.enmity.patcher.create(o)}

var w="RGBTheme", c="1.0.0", l="Applies a color-changing RGB theme with a dark background.", 
u=[{name:"YourName",id:"YourID"}], r="#00007d", a="https://github.com/YourRepo/RGBTheme", 
y={name:w, version:c, description:l, authors:u, color:r, sourceUrl:a};

const n=s("RGBTheme"), g=i("openLazy","hideActionSheet");

function applyRGBTheme() {
    const bodyStyle = window.enmity.modules.common.StyleSheet.create({
        background: {
            backgroundColor: '#000000',
            color: '#FFFFFF'
        },
        rgbAnimation: {
            animation: 'colorChange 5s infinite'
        }
    });

    document.body.style = bodyStyle.background;

    let style = document.createElement('style');
    style.innerHTML = `
        @keyframes colorChange {
            0% { color: #ff0000; }
            25% { color: #00ff00; }
            50% { color: #0000ff; }
            75% { color: #ffff00; }
            100% { color: #ff00ff; }
        }
        body { animation: colorChange 5s infinite; }
    `;
    document.head.appendChild(style);
}

const S={...y, onStart(){ 
    console.log("[RGBTheme] RGB Theme Applied!"); 
    applyRGBTheme(); 
}, 
onStop(){ 
    n.unpatchAll();
    document.body.style = ''; // Reset to default
    const style = document.querySelector('style');
    if (style) style.remove();
}};

m(S);
