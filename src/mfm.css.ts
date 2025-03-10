export const mfmStyle = `
.center {
    text-align: center;
}
.emoji {
    height: 2em;
    vertical-align: middle;
    transition: transform 0.2s ease;
}
.Fn {
    display: inline-block;
}
.blur {
    filter: blur(6px);
    transition: filter 0.3s;
}
.blur:hover {
    filter: blur(0px);
}

/* maxine added */
.text {
    white-space: normal;
}

/* MFM style.css */
:root {
    --accent: rgb(93, 176, 218);
    --accentDarken: rgb(51, 156, 209);
    --accentLighten: rgb(135, 196, 227);
    --accentedBg: rgba(93, 176, 218, 0.15);
    --focus: rgba(93, 176, 218, 0.3);
    --bg: rgb(246, 248, 249);
    --acrylicBg: rgba(246, 248, 249, 0.5);
    --fg: rgb(99, 107, 113);
    --fgTransparentWeak: rgba(99, 107, 113, 0.75);
    --fgTransparent: rgba(99, 107, 113, 0.5);
    --fgHighlighted: rgb(92, 99, 105);
    --fgOnAccent: rgb(255, 255, 255);
    --fgOnWhite: rgb(51, 51, 51);
    --divider: rgb(230, 233, 234);
    --indicator: rgb(93, 176, 218);
    --panel: rgb(255, 255, 255);
    --panelHighlight: rgb(247, 247, 247);
    --panelHeaderBg: rgb(255, 255, 255);
    --panelHeaderFg: rgb(99, 107, 113);
    --panelHeaderDivider: rgb(230, 233, 234);
    --panelBorder: solid 1px var(--divider);
    --acrylicPanel: rgba(255, 255, 255, 0.5);
    --windowHeader: rgba(255, 255, 255, 0.85);
    --popup: rgb(255, 255, 255);
    --shadow: rgba(0, 0, 0, 0.1);
    --header: rgba(255, 255, 255, 0.7);
    --navBg: rgb(255, 255, 255);
    --navFg: rgb(99, 107, 113);
    --navHoverFg: rgb(58, 63, 67);
    --navActive: rgb(93, 176, 218);
    --navIndicator: rgb(93, 176, 218);
    --link: rgb(93, 176, 218);
    --hashtag: rgb(93, 176, 218);
    --mention: rgb(93, 176, 218);
    --mentionMe: rgb(93, 176, 218);
    --renote: rgb(93, 176, 218);
    --modalBg: rgba(0, 0, 0, 0.3);
    --scrollbarHandle: rgba(0, 0, 0, 0.2);
    --scrollbarHandleHover: rgba(0, 0, 0, 0.4);
    --dateLabelFg: rgb(99, 107, 113);
    --infoBg: rgb(229, 245, 255);
    --infoFg: rgb(114, 129, 138);
    --infoWarnBg: rgb(255, 240, 219);
    --infoWarnFg: rgb(143, 110, 49);
    --switchBg: rgba(0, 0, 0, 0.15);
    --buttonBg: rgba(0, 0, 0, 0.05);
    --buttonHoverBg: rgba(0, 0, 0, 0.1);
    --buttonGradateA: rgb(93, 176, 218);
    --buttonGradateB: rgb(93, 134, 218);
    --switchOffBg: rgba(0, 0, 0, 0.1);
    --switchOffFg: rgb(255, 255, 255);
    --switchOnBg: rgb(93, 176, 218);
    --switchOnFg: rgb(255, 255, 255);
    --inputBorder: rgba(0, 0, 0, 0.1);
    --inputBorderHover: rgba(0, 0, 0, 0.2);
    --listItemHoverBg: rgba(0, 0, 0, 0.03);
    --driveFolderBg: rgba(93, 176, 218, 0.3);
    --wallpaperOverlay: rgba(255, 255, 255, 0.5);
    --badge: rgb(49, 177, 206);
    --messageBg: rgb(246, 248, 249);
    --success: rgb(134, 179, 0);
    --error: rgb(236, 65, 55);
    --warn: rgb(236, 182, 55);
    --codeString: rgb(185, 135, 16);
    --codeNumber: rgb(15, 187, 187);
    --codeBoolean: rgb(98, 183, 12);
    --deckBg: rgb(237, 241, 243);
    --htmlThemeColor: rgb(246, 248, 249);
    --X2: rgb(250, 250, 250);
    --X3: rgba(0, 0, 0, 0.05);
    --X4: rgba(0, 0, 0, 0.1);
    --X5: rgba(0, 0, 0, 0.05);
    --X6: rgba(0, 0, 0, 0.25);
    --X7: rgba(0, 0, 0, 0.05);
    --X8: rgb(114, 186, 223);
    --X9: rgb(72, 166, 213);
    --X10: rgba(93, 176, 218, 0.4);
    --X11: rgba(0, 0, 0, 0.1);
    --X12: rgba(0, 0, 0, 0.1);
    --X13: rgba(0, 0, 0, 0.15);
    --X14: rgba(255, 255, 255, 0.5);
    --X15: rgba(255, 255, 255, 0);
    --X16: rgba(255, 255, 255, 0.7);
    --X17: rgba(246, 248, 249, 0.8);
    color-scheme: light;
    --modalBgFilter: none;
    --blur: none;
}

@keyframes blink {
    0% {
        opacity: 1;
        transform: scale(1);
    }

    30% {
        opacity: 1;
        transform: scale(1);
    }

    90% {
        opacity: 0;
        transform: scale(0.5);
    }
}

@keyframes tada {
    0% {
        transform: scaleZ(1);
    }

    10%,
    20% {
        transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    }

    30%,
    50%,
    70%,
    90% {
        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    }

    40%,
    60%,
    80% {
        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    }

    to {
        transform: scaleZ(1);
    }
}

@keyframes mfm-spin {
    0% {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes mfm-spinX {
    0% {
        transform: perspective(128px) rotateX(0);
    }

    to {
        transform: perspective(128px) rotateX(360deg);
    }
    }

    @keyframes mfm-spinY {
    0% {
        transform: perspective(128px) rotateY(0);
    }

    to {
        transform: perspective(128px) rotateY(360deg);
    }
}

@keyframes mfm-jump {
    0% {
        transform: translateY(0);
    }

    25% {
        transform: translateY(-16px);
    }

    50% {
        transform: translateY(0);
    }

    75% {
        transform: translateY(-8px);
    }

    to {
        transform: translateY(0);
    }
}

@keyframes mfm-bounce {
    0% {
        transform: translateY(0) scale(1);
    }

    25% {
        transform: translateY(-16px) scale(1);
    }

    50% {
        transform: translateY(0) scale(1);
    }

    75% {
        transform: translateY(0) scale(1.5, 0.75);
    }

    to {
        transform: translateY(0) scale(1);
    }
}

@keyframes mfm-twitch {
    0% {
        transform: translate(7px, -2px);
    }

    5% {
        transform: translate(-3px, 1px);
    }

    10% {
        transform: translate(-7px, -1px);
    }

    15% {
        transform: translateY(-1px);
    }

    20% {
        transform: translate(-8px, 6px);
    }

    25% {
        transform: translate(-4px, -3px);
    }

    30% {
        transform: translate(-4px, -6px);
    }

    35% {
        transform: translate(-8px, -8px);
    }

    40% {
        transform: translate(4px, 6px);
    }

    45% {
        transform: translate(-3px, 1px);
    }

    50% {
        transform: translate(2px, -10px);
    }

    55% {
        transform: translate(-7px);
    }

    60% {
        transform: translate(-2px, 4px);
    }

    65% {
        transform: translate(3px, -8px);
    }

    70% {
        transform: translate(6px, 7px);
    }

    75% {
        transform: translate(-7px, -2px);
    }

    80% {
        transform: translate(-7px, -8px);
    }

    85% {
        transform: translate(9px, 3px);
    }

    90% {
        transform: translate(-3px, -2px);
    }

    95% {
        transform: translate(-10px, 2px);
    }

    to {
        transform: translate(-2px, -6px);
    }
}

@keyframes mfm-shake {
    0% {
        transform: translate(-3px, -1px) rotate(-8deg);
    }

    5% {
        transform: translateY(-1px) rotate(-10deg);
    }

    10% {
        transform: translate(1px, -3px) rotate(0);
    }

    15% {
        transform: translate(1px, 1px) rotate(11deg);
    }

    20% {
        transform: translate(-2px, 1px) rotate(1deg);
    }

    25% {
        transform: translate(-1px, -2px) rotate(-2deg);
    }

    30% {
        transform: translate(-1px, 2px) rotate(-3deg);
    }

    35% {
        transform: translate(2px, 1px) rotate(6deg);
    }

    40% {
        transform: translate(-2px, -3px) rotate(-9deg);
    }

    45% {
        transform: translateY(-1px) rotate(-12deg);
    }

    50% {
        transform: translate(1px, 2px) rotate(10deg);
    }

    55% {
        transform: translateY(-3px) rotate(8deg);
    }

    60% {
        transform: translate(1px, -1px) rotate(8deg);
    }

    65% {
        transform: translateY(-1px) rotate(-7deg);
    }

    70% {
        transform: translate(-1px, -3px) rotate(6deg);
    }

    75% {
        transform: translateY(-2px) rotate(4deg);
    }

    80% {
        transform: translate(-2px, -1px) rotate(3deg);
    }

    85% {
        transform: translate(1px, -3px) rotate(-10deg);
    }

    90% {
        transform: translate(1px) rotate(3deg);
    }

    95% {
        transform: translate(-2px) rotate(-3deg);
    }

    to {
        transform: translate(2px, 1px) rotate(2deg);
    }
}

@keyframes mfm-rubberBand {
    0% {
        transform: scaleZ(1);
    }

    30% {
        transform: scale3d(1.25, 0.75, 1);
    }

    40% {
        transform: scale3d(0.75, 1.25, 1);
    }

    50% {
        transform: scale3d(1.15, 0.85, 1);
    }

    65% {
        transform: scale3d(0.95, 1.05, 1);
    }

    75% {
        transform: scale3d(1.05, 0.95, 1);
    }

    to {
        transform: scaleZ(1);
    }
}

@keyframes mfm-rainbow {
    0% {
        filter: hue-rotate(0deg) contrast(150%) saturate(150%);
    }

    to {
        filter: hue-rotate(360deg) contrast(150%) saturate(150%);
    }
}

.sparkle-root {
	position: relative;
	display: inline-block;
}

.sparkle-particle {
	transform-origin: center;
	transform-box: fill-box;
	translate: var(--translateX) var(--translateY);
	animation: particleAnimation var(--duration) linear infinite;
}

@keyframes particleAnimation {
	0% {
		rotate: 0deg;
		scale: 0;
	}
	50% {
		scale: var(--size);
	}
	100% {
		rotate: 360deg;
		scale: 0;
	}
}
`;