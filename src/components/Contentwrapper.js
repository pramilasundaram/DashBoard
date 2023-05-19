import Maincontent from "./Maincontent";
import Footer from "./Footer";

export default function Content_wrapper() {
  return (
    <>
      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" className="d-flex flex-column">
        <Maincontent />

        {/* <!-- Footer --> */}
        <Footer />
        {/* <!-- End of Footer --> */}
      </div>
      {/* <!-- End of Content Wrapper --> */}
    </>
  );
}
