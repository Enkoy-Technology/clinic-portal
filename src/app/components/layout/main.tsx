import { AppShell, Box } from "@mantine/core";

const Main = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppShell.Main
            style={{
                backgroundColor: "var(--mantine-color-body)",
                display: "flex",
                width: "100%",
                overflowX: "hidden",
                marginTop: 70,
            }}
        >
            <Box style={{ maxWidth: "100%", width: "100%" }}>{children}</Box>
        </AppShell.Main>
    );
};

export default Main;
