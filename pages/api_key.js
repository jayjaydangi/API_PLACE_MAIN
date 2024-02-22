import APIKeyComponent from "../Components/ApiKey/ApikeyComponent";

function api_key() {
  // const [showGenerateKey, setshowGenerateKey] = useState(false)
  return (
    <div>
      {/* {showGenerateKey ?
                <ApikeyGenerate />
                 : */}
      <APIKeyComponent setshowGenerateKey={() => setshowGenerateKey()} />
      {/* } */}
    </div>
  );
}

export default api_key;
