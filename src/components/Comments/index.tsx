import React from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

export default function Comments(): JSX.Element {
    const { colorMode } = useColorMode();

    return (
        <div>
            <Giscus
                id="comments"
                repo="minjidev/bichoninthefront"
                repoId="R_kgDOM-VoyQ"
                category="Comments"
                categoryId="DIC_kwDOM-Voyc4CjUIh"
                mapping="pathname"
                strict="0"
                reactionsEnabled="1"
                emitMetadata="1"
                inputPosition="top"
                theme={colorMode === "dark" ? "dark_tritanopia" : "light_tritanopia"}
                lang="ko"
                loading="lazy"
            />
        </div>
    );
}
