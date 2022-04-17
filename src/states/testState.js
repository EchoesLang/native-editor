import create from "zustand";

const testStore = create((set) => ({
    testText : "",
    SetText(index){
        set((state) => ({
            testText : index,
        }))
    }
}));

export default testStore;