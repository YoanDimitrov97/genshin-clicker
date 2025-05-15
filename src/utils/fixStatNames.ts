export const fixStatNames = (name:string) => {
    switch (name) {
      case "CRITRATE":
        return "CRIT RATE";
        break;
      case "CRITDMG":
        return "CRIT DMG";
        break;
      case "PYRODPS":
        return "PYRO DPS";
        break;
      case "HYDRODPS":
        return "HYDRO DPS";
        break;
      case "ELECTRODPS":
        return "ELECTRO DPS";
        break;
      case "CRYODPS":
        return "CRYO DPS";
        break;
      case "ANEMODPS":
        return "ANEMO DPS";
        break;
      case "GEODPS":
        return "GEO DPS";
        break;
      case "DENDRODPS":
        return "DENDRO DPS";
        break;
      default:
        return "ATK";
        break;
    }

}