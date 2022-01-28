import Form from "@components/pages/home/Form";
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
            </Box>
        </>
    )
}
