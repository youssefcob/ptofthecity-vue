interface Lang {
    en: string;
    ar: string;
    es: string;
}
interface ListLang {
    en: string[];
    ar: string[];
    es: string[];
}
interface Service {
    id: string;
    path: string;
    title: Lang;
    description: Lang;
    listHeader: Lang;
    list: ListLang;
    
}


export type { Service };