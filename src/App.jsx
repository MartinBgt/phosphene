import TitleComponent from "./components/sections/title/TitleComponent.jsx";
import LoadingText from "./components/ui/LoadingText.jsx";

function App() {
    return (
        <div className="bg-p-black h-[100vh] py-52 px-16 ">
            <TitleComponent />

            <div className="py-8">
                <LoadingText texts={["soon...","soon..."]} />
            </div>
        </div>
    );
}

export default App;
