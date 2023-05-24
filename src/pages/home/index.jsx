import CallToAction from "./cta";
import SectionOne from "./sectionOne";
import SectionTwo from "./sectionTwo";
import { Portofolio } from "./sectionFive";
import Keunggulan from "./keunggulan";
import Rating from "./Rating";
import { AutoPlayLeft } from "./coursel";
import AutoPlayRight from "./coursel";


function IndexHome() {
    return (
        <>
            <CallToAction />
            <Keunggulan />
            <SectionOne />
            <SectionTwo />
            <Portofolio />
            <AutoPlayRight />
            <AutoPlayLeft />
        </>
    )
}
export default IndexHome 