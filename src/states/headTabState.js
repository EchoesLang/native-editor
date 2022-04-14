import create from "zustand";

const htsStore = create((set) => ({
    count : 0,
    SetCount(index){
        set((state) => ({
            count : index
        }))
    }
}));

export default htsStore;