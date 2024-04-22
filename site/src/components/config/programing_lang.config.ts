import javaLogo from "@assets/languages_icons/java.svg";
import goLogo from "@assets/languages_icons/go.svg";
import rustLogo from "@assets/languages_icons/rust.svg";
import javascriptLogo from "@assets/languages_icons/javascript.svg";

type Logo = any;

export const langDictionary: Record<string, Logo> = {
    java: javaLogo,
    go: goLogo,
    rust: rustLogo,
    js: javascriptLogo
}
