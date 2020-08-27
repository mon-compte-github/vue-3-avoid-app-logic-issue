import { reactive, readonly, provide, inject } from 'vue';

export class Identifiable {
    constructor(readonly id: string | null) {}
}

export class Category extends Identifiable {
    constructor(readonly id: string, public name: string, public icon: string) {
        super(id);
    }
}

export class Project extends Identifiable {
    constructor(readonly id: string, public category: string, public name: string, public amount: number) {
        super(id);
    }
}

// ----------------------------------

export interface DataStore {
    categories: {[id: string]: Category};
    projects: {[id: string]: Project};
}

export interface DataStoreMethods {
    data: DataStore;

    addProject(p: Project): Promise<Project>;
    updateAmount(projectId: string, newAmount: number): Promise<Project>;
    updateProject(p: Project): Promise<Project>;
    deleteProject(p: Project): Promise<Project>;
}

/* private */ class DataStoreImpl implements DataStore {
    categories: {[id: string]: Category} = {};
    projects: {[id: string]: Project} = {};
}

export const createDataStore = (): DataStoreMethods => {

    // pour stocker les données réactives
    const data = reactive<DataStore>(new DataStoreImpl());

    // mock
    data.categories['C1'] = new Category('C1', 'entertainement', 'balloon');
    data.categories['C2'] = new Category('C2', 'tech', 'tablet');

    data.projects['P1'] = new Project('P1', 'C1', 'n!ntend* switch', 400);
    data.projects['P2'] = new Project('P2', 'C1', 'trip to new-york', 230);
    data.projects['P3'] = new Project('P3', 'C2', 'new tv', 230);

    const addProject = (p: Project): Promise<Project> => {
        return Promise.reject('not yet implemented');
    }

    const updateProject = (p: Project): Promise<Project> => {
        return Promise.reject('not yet implemented');
    }

    const updateAmount = (projectId: string, newAmount: number): Promise<Project> => {
        return Promise.reject('not yet implemented');
    }

    const deleteProject = (p: Project): Promise<Project> => {
        return Promise.reject('not yet implemented');
    }
    
    return { data: readonly(data), addProject, updateProject, updateAmount, deleteProject } as DataStoreMethods;

};

// ----------------------------------

export const dataStoreSymbol = Symbol('dataStore');

// cast explicit pour éviter le problème avec 'undefined' qui peut être renoyé par inject
export const useDataStore = (): DataStoreMethods => (inject(dataStoreSymbol) as DataStoreMethods);

export const provideDataStore = () => provide(
    dataStoreSymbol, 
    createDataStore()
);
