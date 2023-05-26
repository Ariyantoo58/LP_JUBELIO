import CallToAction from "./cta";
import SectionOne from "./sectionOne";
import { Portofolio } from "./sectionFive";
import Keunggulan from "./keunggulan";
import { AutoPlayLeft } from "./coursel";
import AutoPlayRight from "./coursel";
import SectionSix from "./sectionSix";

function IndexHome() {
    return (
        <>
            <CallToAction />
            <Keunggulan />
            <SectionOne />
            <Portofolio />
            <AutoPlayRight />
            <AutoPlayLeft />
            <SectionSix />
        </>
    )
}
export default IndexHome 