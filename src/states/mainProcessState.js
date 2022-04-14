import create from "zustand";

const mpStore = create((set) => ({
    navGuide : 0,
    navId : 'Authentication',
    SetProcess(index, ident){
        set((state) => ({
            navGuide : index,
            navId : ident
        }))
    }
}));

export default mpStore;