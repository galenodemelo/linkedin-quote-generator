import Form from "@components/pages/home/Form";
import ImageResult from "@components/pages/home/ImageResult";
import Box from "@components/templates/Box";
import Logo from "@components/templates/Logo";

export default function Home() {
    return (
        <>
            <Logo />

            <Box>
                <div>
                    <p>Click the button below and start inspiring your audicience.</p>
                    <Form />
                </div>
                <div>
                    <ImageResult />
                </div>
            </Box>
        </>
    )
}
