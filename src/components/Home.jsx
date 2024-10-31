import Header from "./Header";
import DataProvider from "../context/DataProvider";
import Code from "./Code";
import Result from "./Result";
const Home  = () => {
    return (
        <DataProvider>
            <Header />
            <Code />
            <Result />
        </DataProvider>
    );
}

export default Home;