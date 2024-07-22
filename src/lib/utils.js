const COLORS = {
    rose: {
        bg: "bg-[#FFE4E1]",
        badge: "bg-[#FFB6C1]",
    },
    blue: {
        bg: "bg-[#E6E6FA]",
        badge: "bg-[#B0E0E6]",
    },
    beige: {
        bg: "bg-[#F5F5DC]",
        badge: "bg-[#FFDAB9]",
    },
};

export const getRandomColor = () => {
    const colorNames = Object.keys(COLORS); // Get array of the keys (color names)
    const randomIndex = Math.floor(Math.random() * colorNames.length);
    const randomColorName = colorNames[randomIndex];
    return COLORS[randomColorName];
}

getRandomColor()