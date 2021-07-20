const validateHex = (Rule) =>
  Rule.required().custom((color) => {
    console.log(Rule);
    if (!color || typeof color !== "string") return "Hex needs to be a string";

    // Validate hex values
    if (color.substring(0, 1) === "#") color = color.substring(1);

    switch (color.length) {
      case 3:
        return /^[0-9A-F]{3}$/i.test(color);
      case 6:
        return /^[0-9A-F]{6}$/i.test(color);
      case 8:
        return /^[0-9A-F]{8}$/i.test(color);
      default:
        return "This isn't a valid HEX code, baby!";
    }
  });

export default { validateHex };
