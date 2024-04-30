import javaLogo from "@assets/icons/java.svg";
import goLogo from "@assets/icons/go.svg";
import rustLogo from "@assets/icons/rust.svg";
import javascriptLogo from "@assets/icons/javascript.svg";

type Logo = any;

export const langDictionary: Record<string, Logo> = {
    java: javaLogo,
    go: goLogo,
    rust: rustLogo,
    js: javascriptLogo
}
