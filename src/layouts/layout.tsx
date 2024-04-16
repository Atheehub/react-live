import { Header } from "../components/Header";
import { Footer } from "../components/footer";
export const Layout = ({ content }: any) => {
    return (
        <>
            <Header />
            {content}
            <Footer />

        </>
    )

};
