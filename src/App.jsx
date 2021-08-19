import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div onClick={() => alert("Hi!")}>XXXXX</div>;

function App() {
    const center = {
        lat: 59.95,
        lng: 30.33
    };
    const zoom = 11;
    const config = { key: "KEY_HERE" };

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={config}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                />
            </GoogleMapReact>
        </div>
    );
}

export default App;