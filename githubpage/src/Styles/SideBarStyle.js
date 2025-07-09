export const menuItemStyle = {
    border: "2px solid transparent",
    borderImage: "linear-gradient(to right, red, yellow) 1",
    borderRadius: "10px",
    marginBottom: "10px",
    padding: "10px 16px",
    fontWeight: "bold",
    width: "100%",
    boxSizing: "border-box",
    color: "white",
    backgroundColor: "black",
    boxShadow: "0 0 6px rgba(0,0,0,0.2)",
    transition: "background 0.3s ease",
    "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.05)",
    },
};

export const gradientBoxStyle = {
    position: "fixed",
        top: 400,
        left: 25,
        height: "auto",
        width: 250,
        borderRadius: "20px",
        overflow: "hidden",
        padding: "20px", // inner padding to create space for border effect
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        // Use ::before to create true rounded border effect
        "&::before": {
        content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: "2px", // border thickness
            borderRadius: "20px",
            background: "linear-gradient(to right, red, yellow)",
            WebkitMask:
        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            zIndex: -1,
    }}