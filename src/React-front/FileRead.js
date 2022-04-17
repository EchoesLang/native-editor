import testStore from '../states/testState';

function Example() {
    const { testText } = testStore();
    const { SetText } = testStore();
    return (
        <div>
            <input type="file" onChange={(e) => {
                let file = e.target.files[0];
                let fileReader = new FileReader();
                fileReader.readAsText(file);
                var a;
                fileReader.onload = () => {
                    a = fileReader.result;
                    SetText(a);
                };
                console.log(a);
            }} />
            <p>result = {testText}</p>
        </div>
    )
}

export default Example;